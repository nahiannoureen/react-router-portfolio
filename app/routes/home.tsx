import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Noureen's Portfolio" },
    {
      name: "Nahian Noureen",
      content:
        "Portfolio of Noureen, a passionate web developer creating beautiful, user centric digital experiences.",
    },
  ];
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsShowcase />
      <FeaturedProjects />
      <ContactCTA />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-6">
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-60 pointer-events-none bg-teal-400/10 blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-50 pointer-events-none bg-emerald-400/10 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-40 pointer-events-none bg-emerald-400/10 blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      <div className="absolute top-20 right-1/4 animate-bounce">
        <span className="text-2xl opacity-30 text-emerald-400">✦</span>
      </div>
      <div
        className="absolute bottom-1/3 left-[20%] animate-bounce"
        style={{ animationDelay: "0.5s" }}
      >
        <span className="text-lg opacity-20 text-fuchsia-400">✧</span>
      </div>
      <div
        className="absolute top-1/3 right-[16%] animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        <span className="text-xl opacity-25 text-violet-400">✦</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full p-1 bg-gradient-to-br from-teal-400 via-emerald-400 to-teal-600 shadow-xl shadow-teal-500/20">
              <img
                src="/pro-pic-noureen.jpg"
                alt="Noureen — Web Developer"
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-lg border border-emerald-100 animate-bounce text-sm">
              💜
            </div>
            <div
              className="absolute -bottom-1 -left-1 w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-lg border border-emerald-100 animate-bounce text-sm"
              style={{ animationDelay: "0.5s" }}
            >
              ✨
            </div>
          </div>
        </div>

        <div className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-emerald-500/8 border border-emerald-500/15 text-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open to Opportunities
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-500 font-medium mb-4">
          Hello, I'm
        </p>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight bg-gradient-to-r from-teal-700 via-teal-600 to-emerald-500 bg-clip-text text-transparent"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Noureen
        </h1>

        <p className="text-xl md:text-2xl font-semibold mb-6 text-stone-800">
          Web Developer & UI Enthusiast
        </p>

        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          A passionate final-year undergraduate crafting beautiful, accessible,
          and user-centric web experiences. I blend creativity with code to
          bring ideas to life — from pixel-perfect interfaces to robust backend
          systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/40"
          >
            View My Work
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-white/70 border-2 border-emerald-200 text-emerald-700 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:shadow-lg"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        <div className="mt-16">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-xs font-medium tracking-wider uppercase">
              Scroll to explore
            </span>
            <div className="animate-bounce">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsShowcase() {
  const skillCategories = [
    {
      title: "Frontend",
      emoji: "🎨",
      bgClass: "bg-gradient-to-br from-teal-100 to-emerald-100",
      pillClass: "bg-teal-50 text-teal-700 border border-teal-200",
      borderClass: "border-teal-200/50",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      title: "Backend",
      emoji: "⚙️",
      bgClass: "bg-gradient-to-br from-teal-100 to-emerald-100",
      pillClass: "bg-teal-50 text-teal-700 border border-teal-200",
      borderClass: "border-emerald-200/50",
      skills: ["Python", "Java", "PHP", "Django"],
    },
    {
      title: "Tools & More",
      emoji: "🛠️",
      bgClass: "bg-gradient-to-br from-teal-100 to-emerald-100",
      pillClass: "bg-teal-50 text-teal-700 border border-teal-200",
      borderClass: "border-emerald-200/50",
      skills: ["Git", "Flexbox/Grid", "Responsive Design", "REST APIs"],
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-teal-50 text-teal-700 border border-teal-100">
            My Expertise
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-teal-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`group rounded-2xl p-6 bg-white/70 backdrop-blur-xl border ${cat.borderClass} transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-500/10`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 ${cat.bgClass}`}
              >
                {cat.emoji}
              </div>
              <h3 className="text-lg font-bold mb-4 text-purple-900">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 ${cat.pillClass}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const projects = [
    {
      title: "SmartCare",
      description:
        "A comprehensive healthcare web app for disease prediction and hospital management with secure data handling.",
      tech: ["Django", "Python", "Tailwind CSS", "JavaScript"],
      gradientClass: "bg-gradient-to-r from-teal-400 to-emerald-400",
    },
    {
      title: "Interactive Portfolio",
      description:
        "A personal portfolio with client-side routing, responsive design, and seamless component rendering.",
      tech: ["React", "React Router", "Tailwind CSS"],
      gradientClass: "bg-gradient-to-r from-emerald-400 to-teal-400",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-emerald-500/8 text-teal-700 border border-emerald-500/12">
            Portfolio
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-teal-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Featured Projects
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto">
            A selection of projects that showcase my skills and passion.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl border border-emerald-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              <div className={`h-3 w-full ${project.gradientClass}`} />

              <div className="p-8">
                <h3
                  className="text-2xl font-bold mb-3 text-stone-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-stone-500 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/8 text-emerald-600 border border-emerald-500/12"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Source Code
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-emerald-500/8 text-emerald-600 border border-emerald-500/15 transition-all duration-300 hover:scale-105 hover:bg-emerald-500/15"
          >
            View All Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-500 to-teal-600 shadow-2xl shadow-purple-900/30">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 bg-emerald-500 blur-3xl translate-x-[30%] -translate-y-[30%]" />
          <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full opacity-15 bg-fuchsia-500 blur-3xl -translate-x-[30%] translate-y-[30%]" />

          <div className="relative z-10">
            <span className="text-4xl mb-4 block">💌</span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-300 via-violet-300 to-purple-300 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let's Work Together
            </h2>
            <p className="text-emerald-200/80 mb-8 max-w-lg mx-auto leading-relaxed">
              I'm always excited about new opportunities and interesting
              projects. Whether you have a question or just want to say hi, feel
              free to reach out!
            </p>
            <a
              href="mailto:nishat@example.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold bg-gradient-to-r from-emerald-500 to-purple-500 shadow-lg shadow-emerald-500/35 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/50"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
