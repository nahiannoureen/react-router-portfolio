import React from "react";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    { category: "Backend", items: ["Python", "Java", "PHP", "Django"] },
    {
      category: "Tools & Concepts",
      items: ["Git", "Flexbox/Grid", "Responsive Design", "Routing"],
    },
  ];

  return (
    <div className="animate-fade-in text-gray-800">
      <h2 className="text-4xl font-bold text-gray-900 mb-6 border-b-4 border-indigo-600 inline-block pb-2">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="text-lg leading-relaxed text-gray-600 space-y-4">
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
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-900">
            Technical Arsenal
          </h3>
          <div className="space-y-6">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
