"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ServicesPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const services = [
    {
      title: "UI / UX Design",
      desc: "We craft data-driven, intuitive, and beautiful interfaces that make users fall in love with your product.",
      points: [
        "User Research & Personas",
        "Wireframing & Prototyping",
        "High-Fidelity Design",
        "Usability Testing",
      ],
      icon: "🎨",
    },
    {
      title: "Web Design & Development",
      desc: "From concept to code — we design and build responsive, performant, and SEO-friendly websites that convert.",
      points: [
        "Responsive Design Systems",
        "Next.js + Tailwind Development",
        "Performance Optimization",
        "CMS Integration (Sanity, Notion, etc.)",
      ],
      icon: "💻",
    },
    // {
    //   title: "Brand Identity Design",
    //   desc: "We help brands define their visual DNA — creating logos, colors, and systems that express who they are.",
    //   points: [
    //     "Logo & Visual Identity",
    //     "Typography & Color Systems",
    //     "Brand Guidelines",
    //     "Packaging & Print Collateral",
    //   ],
    //   icon: "🌈",
    // },
    {
      title: "Frontend Engineering",
      desc: "We bring pixel-perfect designs to life with scalable, maintainable code and smooth interactions.",
      points: [
        "Next.js / React Development",
        "API Integrations",
        "Animations & Microinteractions",
        "Performance & Accessibility",
      ],
      icon: "⚡",
    },
  ];

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* 🔴 Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#E31E25] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* 🌟 Hero Section */}
      <section className="text-center max-w-5xl mx-auto px-6 pt-32 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-white"
        >
          We Turn Ideas Into <span className="text-[#E31E25]">Impactful Designs</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Every brand has a story — our job is to bring it to life with design, strategy, and technology.
          We collaborate with startups, agencies, and founders to craft experiences that matter.
        </motion.p>
      </section>

      {/* 🧩 Services Grid */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 pb-32">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group bg-[#111111] border border-gray-800 rounded-2xl p-8 hover:border-[#E31E25]/60 transition-all hover:shadow-[0_0_40px_-10px_#E31E25]/30"
          >
            <div className="text-4xl mb-4">{s.icon}</div>
            <h2 className="text-2xl font-semibold mb-3 text-white">{s.title}</h2>
            <p className="text-gray-400 text-base mb-5">{s.desc}</p>
            <ul className="space-y-2 text-sm text-gray-400">
              {s.points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="text-[#E31E25]">✦</span> {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* 🧠 Process Section */}
      <section className="py-32 bg-[#111] border-t border-gray-800 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-6 text-white"
        >
          Our Process
        </motion.h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          Every project starts with a story. We follow a structured yet flexible process to ensure creativity, clarity, and precision in every stage.
        </p>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { step: "01", title: "Discover", desc: "We learn about your goals, audience, and brand DNA." },
            { step: "02", title: "Design", desc: "We explore creative directions and craft strong concepts." },
            { step: "03", title: "Develop", desc: "We bring ideas to life through clean code and collaboration." },
            { step: "04", title: "Deliver", desc: "We launch, test, and polish for an unforgettable finish." },
          ].map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] p-6 rounded-2xl border border-gray-800 hover:border-[#E31E25]/70 transition-all"
            >
              <h3 className="text-[#E31E25] text-lg font-medium mb-2">{p.step}</h3>
              <h4 className="text-xl font-semibold mb-2 text-white">{p.title}</h4>
              <p className="text-gray-400 text-sm">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✉️ CTA Section */}
      <section className="py-32 text-center bg-[#0A0A0A] border-t border-gray-800">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-6 text-white"
        >
          Ready to Build Something <span className="text-[#E31E25]">Exceptional?</span>
        </motion.h2>
        <p className="text-gray-400 mb-8">
          Whether it’s a brand refresh or a full digital product, we’re here to help you make your mark.
        </p>
        <a
          href="/contact"
          className="bg-[#E31E25] text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform inline-block"
        >
          Let’s Talk Design ✦
        </a>
      </section>

      {/* ⚡ Footer */}
      <footer className="bg-black py-8 text-center text-gray-400 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} DesignUru Studios. All rights reserved.
      </footer>
    </main>
  );
}
