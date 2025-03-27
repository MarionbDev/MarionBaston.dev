import ContactMe from "./_components/ContactMe";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
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
        <div id="services" className="pt-24 md:pt-28">
          <Services />
        </div>
        <ProjectsFree />
        <ProjectStep />
        <Support />
        <Testimonials />
        <ContactMe />
      </div>
    </div>
  );
}
