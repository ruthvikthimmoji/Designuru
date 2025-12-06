"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  // Scroll progress indicator setup
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const values = [
    {
      title: "✦ Minimal & Meaningful",
      desc: "We strip away the unnecessary to focus on what truly matters — creating clarity and purpose in every pixel.",
    },
    {
      title: "✦ Design That Performs",
      desc: "Every design we craft is driven by usability, emotion, and results. Beauty means nothing if it doesn’t perform.",
    },
    {
      title: "✦ Emotion-Led Strategy",
      desc: "We believe people remember how a brand makes them feel — not just how it looks. Every project starts with empathy.",
    },
    {
      title: "✦ End-to-End Execution",
      desc: "From strategy and storytelling to design and development — we take ideas from spark to launch, seamlessly.",
    },
  ];

  const process = [
    {
      step: "01. Discover",
      desc: "We start by understanding — your vision, your users, your story. The foundation of every great product is empathy.",
    },
    {
      step: "02. Design",
      desc: "We translate insights into visuals that feel intuitive and purposeful — designing with both logic and heart.",
    },
    {
      step: "03. Build",
      desc: "Design comes to life through clean, scalable code. We bring interfaces and experiences that perform beautifully.",
    },
    {
      step: "04. Deliver",
      desc: "Our goal is not just to finish a project — but to launch something that grows, connects, and inspires.",
    },
  ];

  const team = [
    {
      name: "Ruthvik",
      role: "Founder & Creative Director",
      img: "/ruthvik.jpg", // replace with your actual image in /public
    },
    // {
    //   name: "Ananya",
    //   role: "UI/UX Designer",
    //   img: "/team1.jpg",
    // },
    // {
    //   name: "Arjun",
    //   role: "Frontend Developer",
    //   img: "/team2.jpg",
    // },
  ];

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] text-white px-6 py-24">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#E31E25] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* HERO */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          The Story Behind <span className="text-[#E31E25]">DesignUru</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          DesignUru Studios was born from a belief — design isn’t just how it looks; it’s how it works, feels, and connects.  
          We blend strategy, storytelling, and design to craft experiences that move people and build brands that last.
        </p>
      </motion.section>

      {/* CORE VALUES */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-24 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl text-white font-semibold mb-12">
          Our Core Beliefs
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="bg-[#111] border border-gray-800 rounded-2xl p-8 text-left hover:border-[#E31E25] transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#E31E25]">{v.title}</h3>
              <p className="text-gray-400 text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FOUNDER NOTE */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-32 flex flex-col md:flex-row items-center justify-center  gap-10 max-w-6xl mx-auto"
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/ruthvik.jpg"
            alt="Ruthvik - Founder of DesignUru"
            width={400}
            height={400}
            className="rounded-3xl shadow-lg object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold text-white  mb-4">
            Meet the Maker
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hi, I’m <span className="text-[#E31E25]">Ruthvik</span> — a designer, developer, and storyteller.  
            I founded DesignUru to bridge the gap between aesthetics and strategy — creating products that don’t just look good, but feel good.  
            Every project is a conversation between creativity and clarity, driven by the idea that great design speaks without words.
          </p>
          <p className="italic text-gray-400">Design is the silent ambassador of your brand.</p>
          <p className="mt-6 text-[#E31E25] font-signature text-2xl">— Ruthvik</p>
        </div>
      </motion.section>

      {/* TEAM SECTION */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-32 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-white  mb-12">
          The Team Behind the Magic
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="group bg-[#111] border border-gray-800 rounded-2xl overflow-hidden hover:border-[#E31E25] transition-all"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* <div className="text-center items-center justify-center"> -------------------------------------------------------------------------- </div> */}


      {/* CTA */}
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-32 text-center"
      >
        <h2 className="text-4xl md:text-5xl text-white  font-semibold mb-6">
          Design with <span className="text-[#E31E25]">Purpose</span>.
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          We don’t just design for screens — we design for people.  
          Every pixel we place, every story we craft, aims to make your brand unforgettable.
        </p>
        <a
          href="/contact"
          className="bg-[#E31E25] text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform"
        >
          Let’s Build Something Together
        </a>
      </motion.section>
    </main>
  );
}
