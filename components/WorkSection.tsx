"use client";

import { motion } from "framer-motion";

export default function WorkSection() {
  return (
    <section className="py-20 bg-[var(--color-background)] text-[var(--color-foreground)] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold mb-8"
      >
        Selected Works
      </motion.h2>
      <p className="text-gray-500 max-w-2xl mx-auto">
        We help startups, SaaS products, and creative businesses turn bold ideas into functional, stunning digital experiences.
      </p>
    </section>
  );
}
