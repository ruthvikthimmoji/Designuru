"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
   <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center justify-between gap-8 backdrop-blur-md bg-white/10
       border border-white/20 shadow-lg rounded-full px-6 py-2 md:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-gray-200
           text-lg tracking-tight transition-colors transition-white"
        >
          Design<span className="text-[#E31E25]">Uru</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-6 ml-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative text-white hover:text-[#E31E25] transition-colors duration-200 ${
                pathname === item.href ? "text-[#E31E25]" : ""
              }`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-full h-[1.5px] bg-[#E31E25] rounded-full"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
