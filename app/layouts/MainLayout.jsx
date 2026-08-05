import { Outlet, NavLink } from "react-router";
import { useState } from "react";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
      <NavigationBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5 group">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-teal-600 to-emerald-500 shadow-lg shadow-teal-500/20">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </span>
          <span
            className="text-xl font-bold tracking-tight bg-gradient-to-r from-teal-700 to-emerald-500 bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Noureen
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-teal-700 text-white shadow-md shadow-cyan-500/30"
                    : "text-gray-600 hover:text-cyan-400 hover:bg-slate-800/60"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href="mailto:noureen@example.com"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-emerald-500 shadow-lg shadow-teal-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/30"
        >
          <svg
            width="14"
            height="14"
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
          Say Hello
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-rose-50 hover:text-rose-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-2 border-t border-slate-800/50">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-teal-600 to-emerald-500 text-white shadow-md shadow-cyan-500/30"
                    : "text-stone-600 hover:text-teal-700 hover:bg-stone-100"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="mailto:noureen@example.com"
            className="block px-4 py-3 rounded-xl text-sm font-semibold text-white text-center mt-2 bg-teal-700 hover:bg-teal-800
"
          >
            ✉️ Say Hello
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="mt-auto bg-white border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-bold mb-2 bg-gradient-to-r from-teal-700 to-emerald-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Noureen
            </h3>
            <p className="text-sm text-stone-500">
              Crafting beautiful digital experiences ✨
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex justify-center gap-6">
              <NavLink
                to="/"
                className="text-sm text-stone-500 hover:text-teal-700 transition-colors duration-300"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-sm text-stone-500 hover:text-teal-700 transition-colors duration-300"
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className="text-sm text-stone-500 hover:text-teal-700 transition-colors duration-300"
              >
                Projects
              </NavLink>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full flex items-center justify-center text-stone-500 bg-stone-100 border border-stone-200 transition-all duration-300 hover:scale-110 hover:bg-teal-700 hover:text-white hover:bg-cyan-500 hover:shadow-lg hover:shadow-rose-500/40 hover:border-transparent"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 text-center border-t border-stone-200">
          <p className="text-xs text-stone-500">
            © {currentYear} Noureen. Designed with{" "}
            <span className="text-teal-700">♥</span> — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
