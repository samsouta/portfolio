import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "../assets/css/tomorrow.css";
import Meteors from "./ui/meteors";
import PortfolioPage from "./PortfolioPage";
import SparklesText from "./ui/sparkles-text";
import { FlipWords } from "./ui/flip-words";
import Background from "./ui/background/Background";
import { ArrowDown, ChevronDown } from "lucide-react";

// AnimatedGrid Component
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
          <div className="absolute inset-0 grid grid-cols-[repeat(40,1fr)] opacity-20">
            {[...Array(50)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="relative h-full w-full border-r border-blue-500/10"
                style={{
                  animation: `gridPulse ${2 + Math.random() * 2
                    }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-[repeat(40,1fr)] opacity-20">
            {[...Array(50)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="relative w-full h-full border-b border-blue-500/10"
                style={{
                  animation: `gridPulse ${2 + Math.random() * 2
                    }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Full-Stack Developer ",
    "JavaScript Developer & PHP Developer",
    "Learning MARN Stack",
    "Linux & GitHub for DevOps Enthusiast",
  ];

  const [code] = useState(`
const profile = {
    name: 'Samsouta',
    title: 'Full-Stack Developer | Problem Solver',
    skills: [
        'React', 'NextJS', 'Redux', 'Express',
        'MySQL', 'Docker', 'AWS', 'TypeScript',
        'GraphQL', 'Git', 'Linux', 'PHP','laravel'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 3,   
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 3
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    < >

      <main className="pt-36 lg:pt-[0rem] bg-[var(--kuro)] text-white min-h-screen">
        <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 "></div>

          {/* Animated Grid Background */}
          <AnimatedGrid />
          {/* Background layer */}
          <div className=" absolute inset-0 z-0 lg:ms-80 flex justify-center lg:justify-start items-start mt-14 lg:mt-0 lg:items-center">
            <Background />
          </div>
          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Main content container */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-12 lg:py-0">
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative">
              {/* Decorative blurs */}
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

              {/* Welcome badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-[#121312]/50 backdrop-blur-sm border border-[var(--shinku)] mb-6 sm:mb-8 animate__animated animate__fadeInDown animate__delay-1s">
                <div className="w-2 h-2 rounded-full bg-[var(--shinku)] animate-pulse"></div>
                <span className="text-[var(--kincha)] text-xs sm:text-sm font-medium">
                  Welcome to my universe
                </span>
              </div>

              {/* Name section */}
              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-4xl text-[var(--kincha)] sm:text-5xl lg:text-7xl font-bold leading-tight">
                  <SparklesText text="Hello" />
                  <span className="relative inline-block">
                    I'm
                    <span className="typing-effect gradient-text">
                      {" "}
                      Samsouta
                    </span>
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              </div>

              {/* Role badge */}
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-[#121312]/40 border border-[var(--shinku)] mb-6 sm:mb-8 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
                <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
                <span>
                  <FlipWords
                    className={"text-lg sm:text-xl text-[var(--kincha)] font-medium"}
                    words={words}
                  />
                </span>
              </div>

              {/* Description */}
              <div className="relative mb-8 sm:mb-12 max-w-xl">
                <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed">
                  JavaScript lover 🚀 | coding the future 💻✨
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate__animated animate__fadeInUp animate__delay-2s">
                {/* View Projects Button */}
                <a
                  href="https://github.com/samsouta"
                  className="group relative inline-flex items-center justify-center gap-3 "
                >
                  <button className="border text-gray-300 tracking-wider duration-500  relative group cursor-pointer   overflow-hidden w-full h-14 sm:w-40 rounded-xl backdrop:blur-md bg-black/20 p-2  font-extrabold border-[var(--kincha)]">
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-[#BE1E2D]"></div>
                    <div className="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-[#DDDDDD]"></div>
                    <p className="z-10 absolute bottom-2 left-2">See more</p>
                  </button>
                </a>

                {/* Contact Button */}
                <a
                  href="https://mega.nz/file/hogSFbaA#cYq8-t9XAOiybdHC8olyUlv--OvsIqj_LOzox0TSMvc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3"
                >
                  <button
                    className="cursor-pointer flex justify-between bg-[--tetsukon]/40 border border-red-600 px-3 py-2 rounded-xl text-[var(--kincha)] tracking-wider shadow-xl hover:bg-[#DDDDDD]/30 backdrop:blur-lg hover:scale-105 duration-500 hover:ring-1 font-mono h-14 w-full sm:w-40"
                  >
                    Resume
                    <ArrowDown className="transition-transform duration-800 group-hover:translate-y-1 animate-bounce" />
                  </button>
                </a>
              </div>

              {/* Floating badges */}
              <div className="hidden lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
                <div className="px-4 py-2 rounded-lg bg-[#121312]/60 backdrop-blur-sm border border-[var(--kincha)] text-[var(--kincha)]">
                  <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;UI
                  Magic
                </div>
              </div>
              <div className="hidden lg:block absolute right-10 top-20 animate-float">
                <div className="px-4 py-2 rounded-lg bg-[#121312]/60 backdrop-blur-sm border border-[var(--kincha)] text-[var(--kincha)]">
                  <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
                </div>
              </div>
              <div className="hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
                <div className="px-4 py-2 rounded-lg bg-[#121312]/60 backdrop-blur-sm border border-[var(--shinku)] text-[--shinku]">
                  <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
                </div>
              </div>
            </div>

            {/* Right column - Code window */}
            <div className="w-full lg:w-[40%] animate__animated animate__fadeInDown animate__delay-0.1s">
              <div className="gradient-border top-10">
                <div className="code-window bg-[#121312]/50">
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code"></i>
                      developer.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
          <span className="text-[var(--kincha)] text-sm flex items-center justify-center flex-col">
            <i className="fas fa-mouse "></i>
            Scroll to explore
            <i className="  text-xl">
          <ChevronDown/>
          </i>
          </span>
          
        </div>

        <PortfolioPage />
      </main>
    </>
  );
}
