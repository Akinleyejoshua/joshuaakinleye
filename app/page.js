"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Contact } from "@/layouts/Contact";
import { Experience } from "@/layouts/Experience";
import { Projects } from "@/layouts/Projects";

export default function Home() {

  return (
    <main className="">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
