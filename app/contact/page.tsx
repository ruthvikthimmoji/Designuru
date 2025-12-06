// "use client";

// export default function ContactPage() {
//   return (
//     <div className="relative flex items-center justify-center bg-[#0A0A0A] text-white h-screen overflow-hidden">
      
//       {/* Animated Glow Left */}
//       <div className="absolute center-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#E31E25] blur-3xl opacity-30 animate-ping rounded-full" />
      
//       <div className="text-4xl font-semibold z-10 animate-pulse">
//         Coming soon...
//       </div>
//     </div>
//   );
// }
"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0A0A0A] text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-semibold"
      >
        Coming soon...
      </motion.div>
    </div>
  );
}


// import { motion, useScroll, useSpring } from "framer-motion";

// export default function ContactPage() {
//   // Scroll progress
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });

//   const fadeIn = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
//   };

//   return (
//     <main className="relative min-h-screen bg-[#0A0A0A] text-white px-6 py-24 overflow-hidden">
//       {/* Scroll Progress Bar */}
//       <motion.div
//         className="fixed top-0 left-0 right-0 h-[3px] bg-[#E31E25] origin-left z-[100]"
//         style={{ scaleX }}
//       />

//       {/* HERO SECTION */}
//       <motion.section
//         variants={fadeIn}
//         initial="hidden"
//         animate="visible"
//         className="text-center max-w-4xl mx-auto mt-12"
//       >
//         <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
//           Let’s Build <span className="text-[#E31E25]">Something Meaningful</span>
//         </h1>
//         <p className="text-gray-300 text-lg leading-relaxed">
//           Have an idea, startup, or brand that deserves great design?  
//           Reach out and let’s turn your vision into something unforgettable.
//         </p>
//       </motion.section>

//       {/* CONTACT FORM */}
//       <motion.section
//         variants={fadeIn}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="mt-24 max-w-3xl mx-auto bg-[#111] border border-gray-800 rounded-2xl p-10"
//       >
//         <h2 className="text-2xl font-semibold mb-6 text-white text-center">Send Us a Message</h2>

//         <form className="space-y-6">
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-gray-400 mb-2 text-sm">Your Name</label>
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 className="w-full bg-transparent border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#E31E25] outline-none transition"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-400 mb-2 text-sm">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full bg-transparent border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#E31E25] outline-none transition"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-gray-400 mb-2 text-sm">Project Type</label>
//             <input
//               type="text"
//               placeholder="Website, Branding, or Product Design..."
//               className="w-full bg-transparent border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#E31E25] outline-none transition"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-400 mb-2 text-sm">Message</label>
//             <textarea
//               rows={5}
//               placeholder="Tell us a bit about your project..."
//               className="w-full bg-transparent border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#E31E25] outline-none transition resize-none"
//             ></textarea>
//           </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.98 }}
//             className="w-full bg-[#E31E25] text-white py-3 rounded-full font-medium hover:shadow-[0_0_20px_#E31E25] transition-all"
//           >
//             Send Message ✦
//           </motion.button>
//         </form>
//       </motion.section>

//       {/* CONTACT DETAILS SECTION */}
//       <motion.section
//         variants={fadeIn}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="mt-32 text-center"
//       >
//         <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8">
//           Connect With <span className="text-[#E31E25]">DesignUru</span>
//         </h2>
//         <div className="flex flex-col md:flex-row justify-center gap-12 text-gray-400">
//           <div>
//             <p className="font-medium text-white mb-1">Email</p>
//             <a
//               href="mailto:hello@designuru.com"
//               className="hover:text-[#E31E25] transition-colors"
//             >
//               designuru.studio@gmail.com
//             </a>
//           </div>
//           <div>
//             <p className="font-medium text-white mb-1">Location</p>
//             <p className="text-white">Bangalore, India 🇮🇳</p>
//           </div>
//           <div>
//             <p className="font-medium text-white mb-1">Socials</p>
//             <div className="flex justify-center gap-4">
//               <a href="https://dribbble.com" target="_blank" className="hover:text-[#E31E25]">
//                 Dribbble
//               </a>
//               <a href="https://linkedin.com" target="_blank" className="hover:text-[#E31E25]">
//                 LinkedIn
//               </a>
//               <a href="https://instagram.com" target="_blank" className="hover:text-[#E31E25]">
//                 Instagram
//               </a>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* FOUNDER NOTE */}
//       <motion.section
//         variants={fadeIn}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="mt-40 max-w-4xl mx-auto text-center"
//       >
//         <h2 className="text-4xl font-semibold text-white mb-6">A Note from the Founder</h2>
//         <p className="text-gray-400 text-lg leading-relaxed mb-6">
//           “Every collaboration starts with a conversation — a shared vision that grows into something timeless.  
//           Whether you’re a startup or an established brand, my goal is simple: create design that makes people feel.”
//         </p>
//         <p className="text-[#E31E25] font-signature text-2xl">— Ruthvik</p>
//       </motion.section>

//       {/* CTA SECTION */}
//       <motion.section
//         variants={fadeIn}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="mt-32 text-center"
//       >
//         <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
//           Ready to Start Your Next Chapter?
//         </h2>
//         <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
//           We’d love to hear from you — let’s create something meaningful together.
//         </p>
//         <a
//           href="mailto:hello@designuru.com"
//           className="bg-[#E31E25] text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform"
//         >
//           Get In Touch
//         </a>
//       </motion.section>

//       {/* FOOTER */}
//       <footer className="bg-black mt-32 py-8 text-center text-gray-500 text-sm">
//         © {new Date().getFullYear()} DesignUru Studios — All rights reserved.
//       </footer>
//     </main>
//   );
// }
