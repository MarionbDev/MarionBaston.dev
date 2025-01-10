import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className=" py-2 px-6 bg-purple text-[#f3f1f1] ">
        <div className="">
          <nav
            aria-labelledby="footer-navigation-link "
            className=" lg:block lg:col-start- lg:col-span-2"
          >
            <div className="flex flex-col gap-2 my-6">
              <p className="font-bold text-[1.2rem]">Informations Légales</p>

              <Link href="/legal-notice" id="legal-notice">
                Mentions légales
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[1.2rem]">Plan du site</p>
              <ul className="flex flex-col gap-2 ">
                <li>
                  <Link href="#aboutme" id="footer-about-me">
                    Qui suis-je
                  </Link>
                </li>
                <li>
                  <Link href="#projects" id="footer-projects">
                    Mes Projets
                  </Link>
                </li>

                <li>
                  <Link href="#skills" id="footer-skills">
                    Mes Compétences
                  </Link>
                </li>
                <li>
                  <Link href="#myservices" id="footer-services">
                    Mes services
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col my-6 gap-2 ">
              <p className=" font-bold text-[1.2rem]">Contact</p>
              <ul className=" flex flex-col gap-2">
                <li className=" w-full ">
                  <Link href={"/#contactPage"}>Email</Link>
                </li>
                <li className=" w-full ">
                  <Link
                    href="https://www.linkedin.com/in/marion-baston/"
                    target="_blank"
                    id="footer-linkedin"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li className="w-full">
                  <Link
                    href="https://github.com/MarionbDev"
                    target="_blank"
                    id="footer-github"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="">
            <span className="flex justify-center mx-4 border-t-2  border-[#f3dec9] my-8"></span>
            <Link href="/" aria-labelledby="marion-baston">
              <div className="flex items-center gap-2 mb-8">
                <span className="text-xs sm:text-sm">© {currentYear}</span>
                <p
                  id="marion-baston"
                  className=" font-poppins tracking-wide font-semibold "
                >
                  Marion Baston &nbsp;
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
