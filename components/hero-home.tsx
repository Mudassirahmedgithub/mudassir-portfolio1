// components/hero-home.tsx or TypingHero.tsx

"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-white relative z-10">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hi, this is{" "}
          <span className="text-blue-600">
            <Typewriter
              words={["Mudassir Ahmed"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    </section>
  );
}
