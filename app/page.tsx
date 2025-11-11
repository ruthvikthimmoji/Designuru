"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// ✅ Load Spline dynamically (no SSR issues)
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Home() {
  return (
<main className="relative min-h-screen text-white overflow-hidden">
      {/* 🌌 Hero Section */}
      <section className="relative h-screen flex flex-col items-left justify-center text-center px-6">
        {/* 🎞️ Spline Background */}
        <div className="absolute inset-0 -z-10">
          <Spline
            scene="https://prod.spline.design/UVrPW5hmrlnVt2t0/scene.splinecode"
            className="w-screen h-full"
          />
          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>
         {/* 🏠 HERO SECTION */}
      <section className="h-screen flex flex-col items-left justify-center text-left
       px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight max-w-3xl text-white"
        >
          We Design <span className="text-[#E31E25]">Experiences</span> That Speak.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-4 text-gray-300 max-w-xl text-lg"
        >
          A minimal, bold, and creative studio crafting digital products that blend design, strategy, and emotion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex gap-4 mt-8"
        >
          <a
            href="/work"
            className="bg-[#E31E25] text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform"
          >
            View Our Work
          </a>
          <a
            href="/contact"
            className="border border-[#E31E25] text-[#E31E25] px-6 py-3 rounded-full font-medium hover:bg-[#E31E25] hover:text-white transition-all"
          >
            Let’s Collaborate
          </a>
        </motion.div>
  </section>
  </section>



      {/* 💫 About Section */}
  <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          The Story Behind <span className="text-[#E31E25]">DesignUru</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
          We’re a multidisciplinary design studio focused on creating visual experiences that connect people and brands. 
          From interfaces to full brand identities — we design with purpose, emotion, and clarity.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-10 text-sm">
          {["Minimal & Meaningful", "Design That Performs", "Emotion-Led Strategy", "End-to-End Execution"].map((v) => (
            <span key={v} className="bg-[#1A1A1A] text-gray-300 px-4 py-2 rounded-full border border-gray-800">
              ✦ {v}
            </span>
          ))}
        </div>
      </section>


{/* 🧱 FEATURED WORK */}
      <section className="py-24 bg-[#111111] px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-white">
          Work That Speaks Louder Than Words.
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Example Project 1 */}
          <div className="bg-[#0A0A0A] rounded-2xl border border-gray-800 p-8 hover:scale-[1.02] transition-transform">
            <h3 className="text-2xl font-semibold mb-3">SaaS Dashboard Redesign</h3>
            <p className="text-gray-400 mb-4">
              A complete redesign for a startup’s analytics platform — improving UX flow, visual clarity, and performance.
            </p>
            <a href="#" className="text-[#E31E25] font-medium">View Case Study →</a>
          </div>
          {/* Example Project 2 */}
          <div className="bg-[#0A0A0A] rounded-2xl border border-gray-800 p-8 hover:scale-[1.02] transition-transform">
            <h3 className="text-2xl font-semibold mb-3">Brand Identity for Dinerly</h3>
            <p className="text-gray-400 mb-4">
              Created a bold, warm identity and website for a fast-growing food tech brand.
            </p>
            <a href="#" className="text-[#E31E25] font-medium">View Project →</a>
          </div>
        </div>
      </section>

{/* 🧩 SERVICES */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">What We Do Best</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          From concept to launch, we help brands craft interfaces and identities that matter.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "UI/UX Design", desc: "Data-driven, beautiful, and user-first digital experiences." },
            { title: "Web Design & Development", desc: "Responsive, fast websites built for performance." },
            { title: "Brand Identity Design", desc: "Visual systems and stories that build recognition." },
            { title: "Frontend Engineering", desc: "Pixel-perfect frontends built with Next.js & Tailwind." },
          ].map((s) => (
            <div key={s.title} className="bg-[#111111] rounded-xl p-6 border border-gray-800 hover:border-[#E31E25] transition-all">
              <h3 className="text-xl font-semibold mb-2 text-white">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

     {/* 🪩 CONTACT CTA */}
      <section className="py-32 text-center bg-[#0A0A0A] border-t border-gray-800">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">Let’s Create Something Extraordinary</h2>
        <p className="text-gray-400 mb-8">
          Have an idea, product, or brand to build? We’d love to bring it to life.
        </p>
        <a
          href="/contact"
          className="bg-[#E31E25] text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform"
        >
          Start a Project
        </a>
      </section>

      {/* ⚡ Footer */}
      <footer className="bg-black py-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} DesignUru Studios. All rights reserved.
      </footer>
    </main>
  );
}