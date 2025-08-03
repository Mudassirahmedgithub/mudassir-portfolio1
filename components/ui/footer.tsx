"use client";

import { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  const [isHoveringGitHub, setIsHoveringGitHub] = useState(false);

  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white w-full py-3 font-sans">
      {/* Top: Copyright */}
      <div className="text-center mb-3 text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Mudassir Ahmed. All rights reserved.
      </div>

      {/* Bottom: Layout */}
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
        {/* Left: Icons + Contact */}
        <div className="flex flex-col items-start space-y-3">
          {/* Icons */}
          <div className="flex space-x-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mudassir-ahmed"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaLinkedin size={30} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mudassirahmed915171"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-transform transform hover:scale-110"
              onMouseEnter={() => setIsHoveringGitHub(true)}
              onMouseLeave={() => setIsHoveringGitHub(false)}
            >
              <svg width="0" height="0">
                <linearGradient id="githubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop stopColor="#6e40c9" offset="0%" />
                  <stop stopColor="#f81c73" offset="100%" />
                </linearGradient>
              </svg>
              <FaGithub
                size={30}
                style={{
                  fill: isHoveringGitHub ? "url(#githubGradient)" : "#ffffff",
                  transition: "fill 0.3s ease",
                }}
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918522915171"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-green-400 transition-transform transform hover:scale-110"
            >
              <FaWhatsapp size={30} />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-sm space-y-1 mt-1">
            <a
              href="mailto:mudassirahmed915171@gmail.com"
              className="flex items-center space-x-2 hover:text-blue-400 transition"
            >
              <FaEnvelope size={16} />
              <span className="underline">mudassirahmed915171@gmail.com</span>
            </a>
            <a
              href="tel:+918522915171"
              className="flex items-center space-x-2 hover:text-green-400 transition"
            >
              <FaPhone size={16} />
              <span className="underline">+91 8522915171</span>
            </a>
          </div>
        </div>

        {/* Right: Name + Tagline */}
        <div className="text-right mt-4 md:mt-0">
          <h2 className="text-3xl font-semibold tracking-tight font-serif leading-snug">
            Mudassir Ahmed
          </h2>
          <p className="text-sm italic text-gray-400">
            Building the digital future, one line at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
