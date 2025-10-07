"use client";

import Hero from "./sections/Hero";
import Header from "@/components/Header";
import About from "./sections/About";
import Works from "./sections/Works";
import Contact from "./sections/Contact";
import Footer from "@/components/Footer";
import Skills from "./sections/Skills";

export default function HomePage() {
  return (
    <main className="bg-secondary relative">
      <div className="h-full w-px bg-[#EEEEEE]/10 absolute top-0 left-[35.5555555556%]" />

      <Header />

      <div className="h-px w-full bg-[#EEEEEE]/10" />

      <Hero />

      <About />

      <Skills />

      <Works />

      <Contact />

      <div className="h-px w-full bg-[#EEEEEE]/10" />

      <Footer />
    </main>
  );
}
