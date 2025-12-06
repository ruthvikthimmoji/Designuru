"use client";


export default function WorkPage() {
  return (
    <div className="relative flex items-center justify-center bg-[#0A0A0A] text-white h-screen overflow-hidden">
      
      {/* Animated Glow Left */}
      <div className="absolute center-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#E31E25] blur-3xl opacity-30 animate-ping rounded-full" />
      
      <div className="text-4xl font-semibold z-10 animate-pulse">
        Coming soon...
      </div>
    </div>
  );
}

// import { motion, useScroll, useSpring } from "framer-motion";
// import { useState } from "react";

// export default function WorkPage() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   const [activeFilter, setActiveFilter] = useState("All");

//   const projects = [
//     {
//       title: "SaaS Dashboard Redesign",
//       desc: "A bold, minimal redesign for a B2B analytics platform improving usability and visual hierarchy.",
//       category: "UI/UX",
//       image: "/images/work/saas-dashboard.jpg",
//       link: "#",
//     },
//     {
//       title: "Brand Identity for Dinerly",
//       desc: "Created a visual identity and playful design system for a food tech brand.",
//       category: "Branding",
//       image: "/images/work/dinerly-branding.jpg",
//       link: "#",
//     },
//     {
//       title: "Portfolio Website for Creator",
//       desc: "Designed and built a high-performance Next.js portfolio with cinematic transitions.",
//       category: "Web Design",
//       image: "/images/work/creator-portfolio.jpg",
//       link: "#",
//     },
//     {
//       title: "E-commerce Experience Revamp",
//       desc: "Complete UI overhaul for an e-commerce platform focusing on UX clarity and conversion.",
//       category: "UI/UX",
//       image: "/images/work/ecommerce-ui.jpg",
//       link: "#",
//     },
//   ];

//   const filters = ["All", "UI/UX", "Branding", "Web Design"];

//   const filteredProjects =
//     activeFilter === "All"
//       ? projects
//       : projects.filter((p) => p.category === activeFilter);

//   return (
//     <main className="relative min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
//       {/* 🔴 Scroll Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-[3px] bg-[#E31E25] origin-left z-[100]"
//         style={{ scaleX }}
//       />

//       {/* 🌟 Hero Section */}
//       <section className="text-center max-w-5xl mx-auto px-6 pt-32 pb-20">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-6xl font-bold mb-6 text-white"
//         >
//           Work That Speaks <span className="text-[#E31E25]">Louder Than Words</span>
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-gray-400 max-w-2xl mx-auto text-lg"
//         >
//           Every project is a story — of design, detail, and deliberate simplicity.
//           Here are some of the experiences we've crafted for brands that believe in design that performs.
//         </motion.p>
//       </section>

//       {/* 🏷️ Filter Bar */}
//       <div className="flex flex-wrap justify-center gap-4 mb-16 px-6">
//         {filters.map((f) => (
//           <button
//             key={f}
//             onClick={() => setActiveFilter(f)}
//             className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${
//               activeFilter === f
//                 ? "bg-[#E31E25] border-[#E31E25] text-white"
//                 : "border-gray-700 text-gray-400 hover:border-[#E31E25] hover:text-[#E31E25]"
//             }`}
//           >
//             {f}
//           </button>
//         ))}
//       </div>

//       {/* 🖼️ Work Grid */}
//       <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 pb-32">
//         {filteredProjects.map((project, i) => (
//           <motion.a
//             key={project.title}
//             href={project.link}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: i * 0.1 }}
//             viewport={{ once: true }}
//             className="group block overflow-hidden rounded-2xl border border-gray-800 bg-[#111111] hover:border-[#E31E25]/70 hover:shadow-[0_0_40px_-10px_#E31E25]/30 transition-all"
//           >
//             <div className="relative overflow-hidden rounded-t-2xl">
//               <div className="aspect-[16/9] w-full bg-[#0A0A0A]">
//                 {/* Placeholder for image */}
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
//                 />
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//             </div>

//             <div className="p-6">
//               <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
//               <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
//               <span className="text-[#E31E25] text-sm font-medium">
//                 View Case Study →
//               </span>
//             </div>
//           </motion.a>
//         ))}
//       </section>

//       {/* 🧠 Process / Methodology */}
//       <section className="py-32 bg-[#111111] border-t border-gray-800 text-center px-6">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-4xl font-semibold mb-6 text-white"
//         >
//           Our Creative Process
//         </motion.h2>
//         <p className="text-gray-400 max-w-3xl mx-auto mb-16">
//           Every project is approached with strategy, empathy, and clarity.  
//           We listen, design, refine — and create experiences that drive real impact.
//         </p>

//         <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
//           {[
//             { step: "01", title: "Research", desc: "Understanding your users and business deeply." },
//             { step: "02", title: "Concept", desc: "Creating visual systems and interaction flows." },
//             { step: "03", title: "Design", desc: "Bringing everything together with elegance and intent." },
//             { step: "04", title: "Refine", desc: "Iterating, testing, and launching with precision." },
//           ].map((p, i) => (
//             <motion.div
//               key={p.step}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-[#0A0A0A] p-6 rounded-2xl border border-gray-800 hover:border-[#E31E25]/70 transition-all"
//             >
//               <h3 className="text-[#E31E25] text-lg font-medium mb-2">{p.step}</h3>
//               <h4 className="text-xl font-semibold mb-2 text-white">{p.title}</h4>
//               <p className="text-gray-400 text-sm">{p.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ✉️ CTA Section */}
//       <section className="py-32 text-center bg-[#0A0A0A] border-t border-gray-800">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-semibold mb-6 text-white"
//         >
//           Have a Vision? <span className="text-[#E31E25]">Let’s Build It Together</span>
//         </motion.h2>
//         <p className="text-gray-400 mb-8">
//           We’d love to collaborate and bring your next digital idea to life.
//         </p>
//         <a
//           href="/contact"
//           className="bg-[#E31E25] text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform inline-block"
//         >
//           Start a Project ✦
//         </a>
//       </section>

//       {/* ⚡ Footer */}
//       <footer className="bg-black py-8 text-center text-gray-400 text-sm border-t border-gray-800">
//         © {new Date().getFullYear()} DesignUru Studios. All rights reserved.
//       </footer>
//     </main>
//   );
// }
