import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Projects from "./projects/page";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <Services />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
    </>
  );
}
