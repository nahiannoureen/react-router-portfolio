import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About — Nishat | Web Developer" },
    {
      name: "description",
      content:
        "Learn more about Nishat — a final-year undergraduate and passionate web developer.",
    },
  ];
}

export default function About() {
  const skills = [
    {
      category: "Frontend",
      emoji: "🎨",
      bgClass: "bg-gradient-to-br from-rose-100 to-rose-200",
      pillClass: "bg-rose-100 text-rose-700 border border-rose-200",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      category: "Backend",
      emoji: "⚙️",
      bgClass: "bg-gradient-to-br from-fuchsia-100 to-fuchsia-200",
      pillClass: "bg-fuchsia-100 text-fuchsia-700 border border-fuchsia-200",
      items: ["Python", "Java", "PHP", "Django"],
    },
    {
      category: "Tools & Concepts",
      emoji: "🛠️",
      bgClass: "bg-gradient-to-br from-violet-100 to-violet-200",
      pillClass: "bg-violet-100 text-violet-700 border border-violet-200",
      items: ["Git", "Flexbox/Grid", "Responsive Design", "Routing"],
    },
  ];

  const journey = [
    {
      year: "2022",
      title: "Started Coding Journey",
      desc: "Began learning HTML, CSS and JavaScript — fell in love with building for the web.",
    },
    {
      year: "2023",
      title: "Discovered React",
      desc: "Dove deep into React, component architecture, and modern frontend workflows.",
    },
    {
      year: "2024",
      title: "Backend Exploration",
      desc: "Expanded into Python, Django, and database design for full-stack capabilities.",
    },
    {
      year: "2025",
      title: "Final Year & Beyond",
      desc: "Building production-grade projects and preparing for a professional career in tech.",
    },
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-fuchsia-500/8 text-fuchsia-600 border border-fuchsia-500/12">
            About Me
          </span>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Woman Behind the Code
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate about creating digital experiences that are both beautiful and functional.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
          {/* Photo */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl p-1 bg-gradient-to-br from-rose-300 via-fuchsia-300 to-violet-300 shadow-xl shadow-rose-500/20">
                <img
                  src="/pro-pic-nishat.jpg"
                  alt="Nishat — Web Developer"
                  className="w-full h-full rounded-3xl object-cover border-4 border-white"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 w-14 h-14 rounded-xl flex items-center justify-center text-lg animate-bounce bg-white border-2 border-rose-100 shadow-lg">
                💜
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-xl flex items-center justify-center text-lg animate-bounce bg-white border-2 border-violet-100 shadow-lg" style={{ animationDelay: "0.5s" }}>
                ✨
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div>
            <h2
              className="text-2xl font-bold mb-6 text-purple-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Hello! I'm Nishat
            </h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                I am a final-year undergraduate student deeply passionate about
                software engineering. As a female developer entering the tech
                industry, I thrive on solving complex problems and turning elegant
                designs into functional, accessible websites.
              </p>
              <p>
                My technical journey spans across both the client and server sides.
                I enjoy designing intuitive interfaces using React and Tailwind CSS,
                while also architecting reliable data structures with frameworks
                like Django and core languages like Python, Java, and PHP.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends,
                contributing to open-source projects, or sipping coffee while
                sketching wireframes. ☕
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { value: "10+", label: "Projects" },
                { value: "5+", label: "Technologies" },
                { value: "3+", label: "Years Learning" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-white/70 backdrop-blur-sm border border-rose-100/50"
                >
                  <p className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-fuchsia-500 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 font-medium mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-violet-500/8 text-violet-600 border border-violet-500/12">
              Tech Stack
            </span>
            <h2
              className="text-3xl font-bold text-purple-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Technical Arsenal
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div
                key={group.category}
                className="group rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-rose-100/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-rose-500/10"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4 ${group.bgClass}`}>
                  {group.emoji}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-purple-700">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 ${group.pillClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-rose-500/8 text-rose-600 border border-rose-500/12">
              My Journey
            </span>
            <h2
              className="text-3xl font-bold text-purple-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How It Started
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {journey.map((item, idx) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                {/* Timeline Dot */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0 bg-gradient-to-br from-rose-500 to-fuchsia-500 shadow-lg shadow-rose-500/25">
                    {item.year.slice(-2)}
                  </div>
                  {idx < journey.length - 1 && (
                    <div className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-rose-200 to-violet-100" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 flex-1 rounded-xl p-5 bg-white/60 backdrop-blur-sm border border-rose-100/30">
                  <span className="text-xs font-bold text-gray-400">{item.year}</span>
                  <h3 className="text-lg font-bold mt-1 mb-2 text-purple-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
