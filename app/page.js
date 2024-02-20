"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { Contact } from "@/layouts/Contact";
import { Experience } from "@/layouts/Experience";
import { Projects } from "@/layouts/Projects";
import { useState } from "react";

export default function Home() {
  const [navBar, setNavBar] = useState(false)
  return (
    <main className="">
      <Header checkNavBar={val => setNavBar(val)}/>
      <NavBar navBar={navBar} toggle={val => setNavBar(val)}/>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
