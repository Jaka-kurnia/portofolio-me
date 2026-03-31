"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "../components/hero";
import { Skills } from "@/components/skils";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";

export default function Portfolio() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] selection:bg-[#FFD700] selection:text-black font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}