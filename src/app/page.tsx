import AboutMe from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Hero className="py-8" />
      <AboutMe className="py-8" />
      <Projects className="py-8" />
      <Contact className="py-8" />
    </div>
  );
}
