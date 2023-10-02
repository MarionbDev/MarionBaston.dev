import Navbar from "./_components/Navbar";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";
import WhoIsMarion from "./_components/WhoIsMarion";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <WhoIsMarion />
      <Contact />
    </div>
  );
}
