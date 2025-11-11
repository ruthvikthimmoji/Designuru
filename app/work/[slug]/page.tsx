"use client";

import { useParams } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = {
  "saas-dashboard": {
    title: "SaaS Dashboard Redesign",
    category: "UI/UX Design",
    description:
      "A complete redesign for a SaaS analytics platform, focusing on clarity, scalability, and usability. We restructured the interface, simplified navigation, and introduced a data-driven design system to enhance user comprehension and engagement.",
    image: "/images/work/saas-dashboard.jpg",
    color: "#E31E25",
    roles: ["UX Strategy", "UI Design", "Prototyping", "Frontend Dev"],
    link: "https://example.com",
    results: [
      "↑ 38% user engagement",
      "↓ 25% churn rate",
      "Faster onboarding experience",
    ],
    sections: [
      {
        title: "Challenge",
        text: "The previous dashboard lacked structure and visual hierarchy. Users struggled to interpret key data points efficiently. Our challenge was to simplify the complexity without sacrificing depth.",
      },
      {
        title: "Approach",
        text: "We conducted usability testing, defined user flows, and designed modular components that adapt dynamically to various data states.",
      },
      {
        title: "Outcome",
        text: "The result was a clean, responsive design system that empowered users to make faster, data-backed decisions.",
      },
    ],
  },

  "dinerly-branding": {
    title: "Dinerly — Brand Identity Design",
    category: "Branding & Strategy",
    description:
      "A bold and playful identity for a modern food-tech startup. From logo to digital presence, we created a consistent, human-centered visual system.",
    image: "/images/work/dinerly-branding.jpg",
    color: "#FBBF24",
    roles: ["Brand Strategy", "Logo Design", "Visual Identity", "Packaging"],
    link: "https://example.com",
    results: ["Unified brand identity", "Increased recall", "Positive brand sentiment"],
    sections: [
      {
        title: "Challenge",
        text: "Dinerly wanted a modern identity that felt friendly yet bold enough to stand out in the competitive food-tech landscape.",
      },
      {
        title: "Approach",
        text: "We crafted a minimal geometric logo with a vibrant color palette, balancing approachability with confidence.",
      },
      {
        title: "Outcome",
        text: "The result was a cohesive visual language applied across web, social, and packaging — building instant recognizability.",
      },
    ],
  },
};

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = projects[slug as keyof typeof projects];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>Project not found.</p>
      </main>
    );
  }

  return (
    <main ref={ref} className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-50"
        style={{ backgroundColor: project.color, scaleX: scrollYProgress }}
      />

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          {project.title}
        </motion.h1>
        <p className="text-gray-300">{project.category}</p>
      </section>

      {/* Overview Section */}
      <section className="max-w-5xl mx-auto py-24 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-300 mb-10 leading-relaxed"
        >
          {project.description}
        </motion.p>

        <div className="flex flex-wrap gap-6 mb-16">
          {project.roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111111] border border-gray-800 rounded-xl px-5 py-3 text-sm"
            >
              {role}
            </motion.div>
          ))}
        </div>

        {/* Results */}
        <div className="border-t border-gray-800 pt-10">
          <h3 className="text-xl font-semibold mb-3 text-white">Impact & Results</h3>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            {project.results.map((r, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {r}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Detailed Sections */}
      {project.sections.map((section, i) => (
        <section
          key={i}
          className="max-w-5xl mx-auto py-20 px-6 border-t border-gray-800"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold mb-6 text-white"
          >
            {section.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-400 max-w-3xl leading-relaxed"
          >
            {section.text}
          </motion.p>
        </section>
      ))}

      {/* CTA */}
      <section className="text-center py-32 border-t border-gray-800 bg-[#0A0A0A]">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold mb-4"
        >
          Like What You See?
        </motion.h3>
        <p className="text-gray-400 mb-8">Let’s collaborate on your next big project.</p>
        <a
          href="/contact"
          className="bg-[#E31E25] px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform inline-block"
        >
          Start a Project ✦
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} DesignUru Studios. All rights reserved.
      </footer>
    </main>
  );
}
