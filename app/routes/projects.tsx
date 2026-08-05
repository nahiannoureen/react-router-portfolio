import type { Route } from "./+types/projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects — Noureen | Web Developer" },
    {
      name: "description",
      content:
        "Explore Noureen's web development projects — from healthcare apps to interactive portfolios.",
    },
  ];
}

export default function Projects() {
  const projects = [
    {
      title: "SmartCare",
      description:
        "A comprehensive healthcare web application designed for disease prediction and hospital management. Built with a focus on secure user data handling and robust architectural requirements.",
      tech: ["Django", "Python", "Tailwind CSS", "JavaScript"],
      github: "#",
      live: "#",
      gradientClass: "bg-gradient-to-r from-teal-400 to-emerald-400",
    },
    {
      title: "Interactive Portfolio",
      description:
        "A personal portfolio website featuring client-side routing, responsive design utilizing advanced Flexbox and Grid techniques, and seamless component rendering.",
      tech: ["React", "React Router", "Tailwind CSS"],
      github: "#",
      live: "#",
      gradientClass: "bg-gradient-to-r from-teal-400 to-emerald-400",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "An admin dashboard for managing products, orders, and customer analytics with real-time data visualization and role-based access control.",
      tech: ["React", "Chart.js", "Node.js", "REST API"],
      github: "#",
      live: "#",
      gradientClass: "bg-gradient-to-r from-teal-400 to-emerald-400",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with drag-and-drop kanban boards, real-time updates, and team workspace management.",
      tech: ["React", "Tailwind CSS", "Python", "Django"],
      github: "#",
      live: "#",
      gradientClass: "bg-gradient-to-r from-teal-400 to-emerald-400",
    },
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-rose-500/8 text-teal-600 border border-emerald-500/12">
            My Work
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-emerald-400 to-emerald-500 bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Selected Projects
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Each project is a unique piece of development, crafted with care and
            attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden bg-white/80 backdrop-blur-xl border border-rose-100/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/10"
            >
              {/* Gradient Top Bar */}
              <div
                className={`h-2 w-full transition-all duration-500 group-hover:h-3 ${project.gradientClass}`}
              />

              <div className="p-8">
                {/* Project Number */}
                <span className="text-xs font-bold tracking-widest mb-3 block text-gray-300">
                  PROJECT {String(idx + 1).padStart(2, "0")}
                </span>

                <h2
                  className="text-2xl font-bold mb-3 text-stone-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.title}
                </h2>

                <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold bg-violet-500/8 text-violet-600 border border-violet-500/10 transition-all duration-300 hover:scale-105"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex gap-4 pt-5 border-t border-rose-100/50">
                  <a
                    href={project.github}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-rose-500/20 ${project.gradientClass}`}
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
                    href={project.live}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/80 text-rose-600 border border-rose-200 transition-all duration-300 hover:scale-105 hover:border-rose-400"
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

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block rounded-2xl p-8 md:p-10 bg-white/60 backdrop-blur-xl border border-rose-100/50">
            <span className="text-3xl block mb-3">🚀</span>
            <h3
              className="text-xl font-bold mb-2 text-purple-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              More projects coming soon!
            </h3>
            <p className="text-sm text-gray-400 mb-5">
              I'm always working on something new and exciting.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg shadow-teal-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Follow on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
