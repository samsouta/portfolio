import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/lib/constants";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-36 lg:pb-32 lg:pt-40">
      <div className="hero-glow" />
      <Container className="relative">
        <div className="max-w-4xl min-w-0">
          <div className="mb-5 inline-flex max-w-full rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-2 text-xs font-medium leading-5 text-sky-200 sm:mb-6 sm:px-4 sm:text-sm">
            Full-Stack Developer • Product Builder • Problem Solver
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            {personalInfo.name}
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-medium leading-tight text-slate-100 sm:text-3xl lg:text-4xl">
            {personalInfo.headline}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
            I design and build modern applications with a focus on performance, scalability, and user experience. From web platforms and business systems to automation tools and SaaS products, I enjoy turning complex ideas into practical solutions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button href="#projects" className="w-full sm:w-auto">View Projects</Button>
            <Button href={personalInfo.github} target="_blank" rel="noreferrer" variant="secondary" className="w-full sm:w-auto">
              GitHub
            </Button>
            <Button href="#contact" variant="ghost" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-4">
          {["Product Builder", "Full-Stack Systems", "Real-World Solutions"].map((item) => (
            <div key={item} className="surface-card rounded-lg p-4 sm:p-5">
              <p className="text-sm font-semibold text-white">{item}</p>
              <div className="mt-4 h-1.5 rounded-full bg-gradient-to-r from-sky-300 to-violet-500" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
