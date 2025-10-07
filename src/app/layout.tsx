import type { Metadata } from "next";
import { Poppins, Oswald } from "next/font/google";
import "./globals.css";
// import Header from "@/components/ui/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pick weights you need
  variable: "--font-oswald", // optional (useful with Tailwind)
});

export const metadata: Metadata = {
  title: "Portfolio | AhmedRamadan",
  description:
    "I am a motivated Frontend Developer from Egypt, skilled in React, Next.js, Tailwind CSS, Framer Motion, shadcn/ui, and Redux. I enjoy turning ideas into clean, functional, and interactive user experiences. As a fresh graduate, I am eager to apply my skills, grow in real-world projects, and contribute to building modern, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${oswald.variable} antialiased`}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
