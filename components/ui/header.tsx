"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Branding */}
          <div className="flex items-center">
            <Link href="/">
              <span className="text-black text-xl font-semibold hover:text-gray-700 transition duration-150 cursor-pointer">
                Mudassir Ahmed
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                href="/about"
                className="text-black hover:text-gray-700 transition duration-150"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-black hover:text-gray-700 transition duration-150"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="text-black hover:text-gray-700 transition duration-150"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-black hover:text-gray-700 transition duration-150"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
