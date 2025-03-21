import ContactMe from "./_components/ContactMe";
import Header from "./_components/Header";
import ProjectsFree from "./_components/ProjectsFree";
import ProjectStep from "./_components/ProjectStep";
import Services from "./_components/Services";
import Support from "./_components/SupportFree";
import Testimonials from "./_components/Testimonials";
import styles from "./styles.module.css";

export default function FreelancePage() {
  return (
    <div
      className={`${styles.spaceG} px-6 pt-10 flex flex-col gap-16 mb-40 lg:px-40`}
    >
      <Header />
      <Services />
      <ProjectsFree />
      <ProjectStep />
      <Support />
      <Testimonials />
      <ContactMe />
    </div>
  );
}
