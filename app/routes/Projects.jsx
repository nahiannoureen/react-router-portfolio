import React from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SmartCare",
      description:
        "A comprehensive healthcare web application designed for disease prediction and hospital management. Built with a focus on secure user data handling and robust architectural requirements.",
      tech: ["Django", "Python", "Tailwind CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      title: "Interactive Portfolio",
      description:
        "A personal portfolio website featuring client-side routing, responsive design utilizing advanced Flexbox and Grid techniques, and seamless component rendering.",
      tech: ["React", "React Router", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-900 mb-8 border-b-4 border-indigo-600 inline-block pb-2">
        Selected Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex gap-4">
              <a
                href={project.github}
                className="text-gray-600 hover:text-indigo-600 flex items-center gap-2 text-sm font-medium transition-colors"
              >
                <Github size={16} /> Code
              </a>
              <a
                href={project.live}
                className="text-gray-600 hover:text-indigo-600 flex items-center gap-2 text-sm font-medium transition-colors"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
