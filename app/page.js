import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Experience } from "@/layouts/Experience";
import { Projects } from "@/layouts/Projects";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Experience/>
      <Projects/>
    </main>
  );
}
