import React from "react";
import { CircleGauge, Code2, Layers } from "lucide-react";
import { IoCodeSlash } from "react-icons/io5";
import { TbMoodKid } from "react-icons/tb";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-[#121312] rounded-lg p-8 h-full border border-[#ad0013]/40 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-white/20 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-[var(--kincha)] relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-[var(--kincha)] bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-[var(--shinku)]">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-300 border-l-4 border-white/40 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-[var(--shinku)]" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-[var(--shinku)]" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-[var(--kincha)] " />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-[var(--kincha)] " />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: IoCodeSlash,
      title: "Frontend Developer",
      company: "MMSIT",
      period: "2021 - 2022",
      description:
        "I craft responsive, user-friendly, and visually stunning web interfaces using React, JavaScript, HTML, CSS, and Tailwind CSS. Focused on performance, accessibility, and modern UI/UX, I build seamless digital experiences across all device",
    },
    {
      icon: Layers,
      title: "Backend Developer",
      company: "Fairway Technology",
      period: "2022 - 2022",
      description:
        "I develop secure, scalable, and high-performance server-side applications using Laravel, PHP, Node.js, and databases. Focused on API development, authentication, and data management, I ensure smooth and efficient backend operations for client projects.",
    },
    {
      icon: TbMoodKid,
      title: "Junior FullStack Developer",
      company: "aluto-benli",
      period: "2022 - 2023",
      description:
        "Create Website using react js and laravel Meeting clients to ascertain what they want from their site, Ensuring the site is responsive, to render properly on all devices, Testing and improving the functionality and rendering of the site, Uploading the site to a designated server User interface and user experience",
    },
    {
      icon: CircleGauge,
      title: "Mid level Full Stack Developer",
      company: "freelancer",
      period: "2023 - present",
      description:
        "",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b  relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div
          className="absolute inset-0 bg-[#121312]"
        />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#ad0013]/40 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-[var(--kincha)] bg-clip-text text-center">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Transforming ideas into digital reality, one project at a time"
            </p>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;
