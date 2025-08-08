"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, BadgeCheck, PenTool } from "lucide-react";

// Simple Card components for highlights
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`rounded-xl border border-black/10 bg-white shadow-sm ${className}`}>{children}</div>
);

const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={className}>{children}</div>
);

const testimonials = [
  {
    quote: "Mudassir's attention to detail is unmatched. If you want something built right, ask him.",
    name: "Aamir S.",
    role: "Software Engineer at Digitronix",
  },
  {
    quote: "His ability to simplify complex ideas and deliver polished results stands out in every team meeting.",
    name: "Nadia R.",
    role: "Data Analyst & Mentor",
  },
  {
    quote: "Working with him raised the bar for everyone around. Always structured, always thoughtful.",
    name: "Ishan M.",
    role: "Startup Founder",
  },
  {
    quote: "Working with you was a pleasure. Your attention to detail is unmatched.",
    name: "Alex Johnson",
    role: "Product Manager",
  },
  {
    quote: "A true team player who uplifts everyone around them.",
    name: "John Carter",
    role: "AI Engineer",
  },
];

const highlights = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Creative Logic",
    text: "Ideas should not just function — they should feel crafted.",
  },
  {
    icon: <BrainCircuit className="w-5 h-5" />,
    title: "Systems Thinking",
    text: "Zoom out, connect the dots, refine the entire experience.",
  },
  {
    icon: <BadgeCheck className="w-5 h-5" />,
    title: "Quiet Precision",
    text: "Polish is the result of invisible effort. I invest in both.",
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Minimal Design",
    text: "Restraint creates clarity. I design with what's essential.",
  },
];

const AboutPage = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel logic (shows 2 testimonials at a time)
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) =>
          (prev + 1) % Math.ceil(testimonials.length / 2)
        );
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section className="bg-white text-black font-sans py-20 px-4 sm:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Get to know me
        </motion.h1>

        {/* Intro Paragraphs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto space-y-6 text-lg text-gray-800 leading-relaxed mb-16"
        >
          <p>
            I'm Mudassir — a <strong>detail-driven</strong> data science enthusiast obsessed with precision and creative systems thinking. I'm pursuing a degree in <strong>Artificial Intelligence &amp; Data Science</strong> and actively working on projects that merge analytical modeling with real-world impact.
          </p>
          <p>
            The moment I saw an Excel dashboard back in high school, something clicked. I've always loved <strong>patterns</strong>, logic, and visual design. Data science was a perfect storm of those passions.
          </p>
          <p>
            My workflow is a mix of structured logic and creative finesse. Whether I'm debugging a stubborn pipeline, designing a dashboard, or explaining a complex ML concept—I obsess over clarity, utility, and polish.
          </p>
          <p>
            Curiosity is my default state. From biology to algorithms, from geopolitics to design systems—I study everything I touch until I understand it deeply. This mindset has made me a fast learner, a systems thinker, and someone people rely on when quality matters.
          </p>
          <p>
            I've worked on academic research, internal team tools, and personal prototypes—all aimed at solving practical challenges with elegant solutions.
          </p>
          <p>
            I believe great work is quiet, intentional, and timeless. I'm not here to ship fast—I'm here to ship well.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10 mb-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.22 },
            },
          }}
        >
          {highlights.map(({ icon, title, text }, i) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="p-6 bg-white">
                <CardContent className="flex items-start gap-5">
                  <span className="p-2 rounded-full bg-black text-white flex items-center justify-center">{icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg text-black mb-1">{title}</h3>
                    <p className="text-sm text-gray-700">{text}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials (animated carousel, 2 cards at a time) */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-7 text-gray-900">
            Testimonials
          </h2>
          <div
            className="overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 52}%` }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ gap: "2rem" }}
            >
              {testimonials.map((t, idx) => (
                <blockquote
                  key={idx}
                  className="bg-white border-l-4 border-black p-4 shadow-md rounded-xl w-1/2 shrink-0 flex flex-col justify-between"
                >
                  <p className="text-sm text-gray-800 font-normal flex-grow">&quot;{t.quote}&quot;</p>
                  <span className="text-xs text-gray-500 mt-2">
                    – {t.name}, {t.role}
                  </span>
                </blockquote>
              ))}
            </motion.div>
          </div>
          <div className="flex justify-center gap-2 mt-7">
            {[...Array(Math.ceil(testimonials.length / 2))].map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors duration-300
                  ${idx === currentIndex ? "bg-black" : "bg-gray-300"}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>

        {/* The Person Behind The Work */}
        <motion.div
          className="max-w-4xl mx-auto mt-24 space-y-7 text-lg text-gray-800 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-center text-gray-900">The Person Behind The Work</h2>

          <div>
            <h3 className="font-semibold text-xl mt-4 mb-2">Work Style</h3>
            <p>
              People often say I'm not traditionally funny, but my <strong>quirky work style</strong> and creative problem-solving approaches bring genuine smiles to team environments.
            </p>
            <p>
              I'm admittedly a bit of a workaholic—but in the most productive way possible. The effort, structure, and thought behind every project are what make me proud of the outcomes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mt-5 mb-2">Vision</h3>
            <p>
              My dream is to contribute meaningfully to <strong>AI</strong> and other emerging technologies that have the potential to reshape our world.
            </p>
            <p>
              Whether it's data storytelling, dashboard development, or creating analogies to teach complex concepts, I find joy in making information both understandable and engaging.
            </p>
          </div>

          <p>
            If you've read this far, I hope this glimpse into my journey has been worthwhile. Every story shared here reflects my commitment to continuous growth, meaningful contribution, and the pursuit of excellence in everything I undertake.
          </p>
          <p className="italic text-center text-base">"I hope it was worth the scroll"</p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
