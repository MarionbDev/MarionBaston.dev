import ContactMe from "./_components/ContactMe";
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
        <div id="/freelance/services" className="pt-16 md:pt-28">
          <Services />
        </div>
        <div id="/freelance/free-project" className="">
          <ProjectsFree />
        </div>
        <div id="/freelance/step-project" className="">
          <ProjectStep />
        </div>
        <div id="/freelance/support" className="">
          <Support />
        </div>
        <div id="/freelance/testimonial" className="">
          <Testimonials />
        </div>
        <div id="/freelance/contact-me" className="my-20">
          <ContactMe />
        </div>
      </div>
    </div>
  );
}
