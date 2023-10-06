import Navbar from "./_components/Navbar";
import About from "./_components/About";
import Skills from "./_components/Skills";
import WhoIsMarion from "./_components/WhoIsMarion";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className=" pb-28  ">
        <About />
      </div>
      <div className="mt-10 sm:mt-30 pb-28 ">
        <Skills />
      </div>
      <div className="mt-10 sm:mt-30 ">
        <WhoIsMarion />
      </div>
      <div className="mt-10 sm:mt-36">
        <Contact />
      </div>
    </div>
  );
}
