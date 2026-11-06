import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Certifications } from "@/components/sections/certifications";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <Gallery />
      <Contact />
    </>
  );
}
