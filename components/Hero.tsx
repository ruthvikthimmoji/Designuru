"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-[var(--color-bg)]">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-grotesk font-semibold leading-tight"
        >
          Minimal. Bold. <br />
          <span className="text-[var(--color-primary)]">Creative Design Studio.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto"
        >
          We craft meaningful digital experiences through design and development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="/work"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
