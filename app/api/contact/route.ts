import { NextResponse } from "next/server";

type ContactRequestBody = {
  name?: unknown;
  message?: unknown;
};

export async function POST(request: Request) {
  let body: ContactRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
  }

  const text = [
    "New portfolio contact message",
    "",
    `Name: ${name || "visitor"}`,
    "Message:",
    message,
  ].join("\n");

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    if (!telegramResponse.ok) {
      return NextResponse.json({ error: "Unable to send message." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to send message." }, { status: 502 });
  }
}
