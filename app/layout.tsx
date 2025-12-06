import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/ui/navbar";
import type { Metadata } from "next";

// 🧠 Font Setup
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

// 🧾 Metadata
export const metadata: Metadata = {
  title: "DesignUru Studio",
  description:
    "Minimal. Bold. Creative — DesignUru Studio crafts digital experiences that blend art and strategy.",
};

// 🌍 Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable}`}
    >
      <body
        className={`bg-black text-gray-100 ${poppins.className} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
