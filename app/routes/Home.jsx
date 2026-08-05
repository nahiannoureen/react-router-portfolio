import React from "react";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-6 border-4 border-indigo-100">
        {/* Replace src with your actual profile photo */}
        <img
          src="../../public/pro-pic-noureen.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
        Hi, I'm a <span className="text-indigo-600">Web Developer</span>
      </h1>

      <p className="text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed">
        A final-year undergraduate and professional fresher building robust,
        user-centric web applications. Specializing in crafting seamless
        front-end layouts and powerful back-end systems.
      </p>

      <div className="flex gap-4">
        <Link
          to="/projects"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-md"
        >
          View My Work <ArrowRight size={20} />
        </Link>
        <button className="bg-white text-gray-800 border-2 border-gray-200 px-6 py-3 rounded-lg font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-colors flex items-center gap-2 shadow-sm">
          <Download size={20} /> Download CV
        </button>
      </div>
    </div>
  );
}
