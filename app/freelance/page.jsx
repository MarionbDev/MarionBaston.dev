import AboutMeFree from "./_components/AboutMeFree";
import Header from "./_components/Header";
import OffresFree from "./_components/offres/OffresFree";
import ProjectStep from "./_components/project-step/ProjectStep";
import ProjectsFree from "./_components/ProjectsFree";
import Services from "./_components/Services";
import Support from "./_components/support-free/SupportFree";
import Testimonials from "./_components/Testimonials";
import styles from "./styles.module.css";

export default function FreelancePage() {
  return (
    <div
      className={`${styles.spaceG} px-6 pt-10 flex flex-col sm:px-24 xl:px-28 text-[#322e37]`}
    >
      <Header />
      <div className="flex flex-col gap-24">
        <div id="services" className="pt-16 md:pt-28">
          <Services />
        </div>
        <div id="free-project" className="">
          <ProjectsFree />
        </div>
        <div id="step-project" className="">
          <ProjectStep />
        </div>
        <div id="support" className="">
          <Support />
        </div>
        <div id="testimonial" className="">
          <Testimonials />
        </div>
        <div id="offres" className="pt-16 md:pt-28 mb-28">
          <OffresFree />
        </div>
        <div id="a-propos" className="pt-16 md:pt-28 mb-28">
          <AboutMeFree />
        </div>
      </div>
    </div>
  );
}
