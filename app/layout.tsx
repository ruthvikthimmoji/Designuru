import "./globals.css"
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

import type { Metadata } from "next"
import { Navbar } from "@/components//ui/navbar"

export const metadata: Metadata = {
  title: "DesignUru Studio",
  description: "Minimal. Bold. Creative — DesignUru Studio builds beautiful digital experiences.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Navbar/>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}
