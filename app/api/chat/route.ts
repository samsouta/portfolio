import { NextRequest, NextResponse } from 'next/server';
import { openai, isOpenAIConfigured } from '@/lib/openai';
import { fetchPortfolioData } from '@/lib/supabase-server';
import { Message, AIResponse } from '@/types';

type Intent = 'chat' | 'identity' | 'portfolio';

function getIntent(query: string): Intent {
  const q = query.toLowerCase();
  
  const portfolioKeywords = ['project', 'projects', 'skill', 'skills', 'github', 'experience', 'work', 'build', 'tech', 'technology'];
  const identityKeywords = ['your name', 'who are you', 'who you', 'what is your name', 'who is this', 'what are you'];
  
  if (portfolioKeywords.some(k => q.includes(k))) return 'portfolio';
  if (identityKeywords.some(k => q.includes(k))) return 'identity';
  return 'chat';
}

function simpleIntentDetection(query: string): { type: AIResponse['type'], filter?: string } {
  const q = query.toLowerCase();
  
  if (q.includes('project') || q.includes('work') || q.includes('build') || q.includes('github')) {
    if (q.includes('react')) return { type: 'projects', filter: 'React' };
    if (q.includes('frontend') || q.includes('ui')) return { type: 'projects', filter: 'Frontend' };
    if (q.includes('backend') || q.includes('api')) return { type: 'projects', filter: 'Backend' };
    return { type: 'projects' };
  }
  
  if (q.includes('skill') || q.includes('tech') || q.includes('know')) {
    return { type: 'skills' };
  }
  
  if (q.includes('experience') || q.includes('job') || q.includes('career')) {
    return { type: 'experience' };
  }
  
  if (q.includes('about') || q.includes('who') || q.includes('bio')) {
    return { type: 'mixed' };
  }
  
  return { type: 'text' };
}

function generateFallbackResponse(query: string, portfolioData: any, intent: Intent): AIResponse {
  const { profile, projects, skills, experience, contact } = portfolioData;
  const devName = profile?.name || 'the developer';
  
  // Identity mode
  if (intent === 'identity') {
    return {
      message: `I am ${devName}'s AI assistant. I'm here to help you learn about ${devName}'s work, projects, skills, and experience. Feel free to ask me anything!`,
      type: 'text'
    };
  }
  
  // Portfolio mode
  if (intent === 'portfolio') {
    const intentResult = simpleIntentDetection(query);
    
    switch (intentResult.type) {
      case 'projects': {
        let filteredProjects = projects || [];
        if (intentResult.filter) {
          filteredProjects = (projects || []).filter((p: any) => 
            p.category?.toLowerCase().includes(intentResult.filter!.toLowerCase()) ||
            p.tech_stack?.some((t: string) => t.toLowerCase().includes(intentResult.filter!.toLowerCase()))
          );
        }
        return {
          message: `Here are ${devName}'s projects:`,
          type: 'projects',
          data: { projects: filteredProjects }
        };
      }
      
      case 'skills': {
        return {
          message: `${devName}'s skills:`,
          type: 'skills',
          data: { skills: skills || [] }
        };
      }
      
      case 'experience': {
        return {
          message: `${devName}'s work experience:`,
          type: 'experience',
          data: { experience: experience || [] }
        };
      }
      
      default:
        return {
          message: `Hi! I'm ${devName}'s AI assistant. ${profile?.bio || 'A passionate developer.'} Ask me about projects, skills, or experience!`,
          type: 'mixed',
          data: { projects, skills, experience }
        };
    }
  }
  
  // Chat mode
  return {
    message: `Hi! I'm ${devName}'s AI assistant. I can help you learn about ${devName}'s work or answer general questions. What would you like to know?`,
    type: 'text'
  };
}

export async function POST(req: NextRequest) {
  let userMessage = '';
  let portfolioData: any = {};
  
  try {
    const body = await req.json();
    userMessage = body.message || '';
    const { history } = body;

    if (!userMessage) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const intent = getIntent(userMessage);
    portfolioData = await fetchPortfolioData();

    if (!isOpenAIConfigured()) {
      const fallbackResponse = generateFallbackResponse(userMessage, portfolioData, intent);
      return NextResponse.json(fallbackResponse);
    }

    let systemPrompt = '';

    if (intent === 'chat') {
      systemPrompt = `You are a friendly AI assistant. Answer naturally and concisely. Keep responses short (2-3 sentences max).`;
    } 
    else if (intent === 'identity') {
      const devName = portfolioData.profile?.name || 'the developer';
      systemPrompt = `You are ${devName}'s AI assistant. Introduce yourself as such. Be friendly and offer to help visitors learn about ${devName}'s work. Answer in 1-2 sentences.`;
    } 
    else if (intent === 'portfolio') {
      const devName = portfolioData.profile?.name || 'the developer';
      systemPrompt = `You are ${devName}'s AI assistant. 

RULES:
- Use ONLY the provided Supabase data
- Never hallucinate or make up information
- Keep responses short and friendly
- If data is missing, say so

PORTFOLIO DATA:
- Profile: ${JSON.stringify(portfolioData.profile)}
- Projects: ${JSON.stringify(portfolioData.projects)}
- Skills: ${JSON.stringify(portfolioData.skills)}
- Experience: ${JSON.stringify(portfolioData.experience)}
- Contact: ${JSON.stringify(portfolioData.contact)}

Return JSON:
{
  "message": "short friendly response",
  "type": "text" | "projects" | "skills" | "experience" | "mixed",
  "data": { projects?: [...], skills?: [...], experience?: [...] }
}`;
    }

    const messages: any[] = [
      { role: 'system', content: systemPrompt },
      ...history.slice(-10).map((msg: Message) => ({
        role: msg.role,
        content: msg.content
      })),
      { role: 'user', content: userMessage }
    ];

    const completion = await openai!.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0.7
    });

    const responseContent = completion.choices[0]?.message?.content || '';
    
    // For chat/identity mode, return as plain text
    if (intent === 'chat' || intent === 'identity') {
      return NextResponse.json({
        message: responseContent,
        type: 'text'
      });
    }
    
    // For portfolio mode, try to parse JSON
    try {
      const parsedResponse = JSON.parse(responseContent) as AIResponse;
      return NextResponse.json(parsedResponse);
    } catch {
      return NextResponse.json({
        message: responseContent,
        type: 'text'
      });
    }
  } catch (error: any) {
    console.error('Chat API error:', error);
    
    if (error?.code === 'insufficient_quota' || error?.status === 429) {
      const intent = getIntent(userMessage);
      const fallbackResponse = generateFallbackResponse(userMessage, portfolioData, intent);
      return NextResponse.json(fallbackResponse);
    }
    
    const intent = getIntent(userMessage);
    const fallbackResponse = generateFallbackResponse(userMessage, portfolioData, intent);
    return NextResponse.json(fallbackResponse);
  }
}