import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className=" py-2 px-6 to-[#fae8ff] bg-gradient-to-t from-purple/50 to-transparent  dark:to-[#070c21] dark:bg-gradient-to-t dark:from-purple/10 to-transparent w-full font-lato  lg:m-auto lg:px-8 dark:text-white/70 text-[#4f3670] dark:border-t-2 dark:border-[#111c49] ">
        <div className="grid grid-cols-2 lg:grid-cols-12 px-8 md:p-0  ">
          <nav className=" col-start-1 col-span-2 sm:col-start-1 sm:col-span-2 lg:col-start-1 lg:col-span-3 flex sm:flex-col justify-between items-start ">
            <div className="flex items-center gap-4 sm:ml-10 ">
              <Link href="/" aria-labelledby="marion-baston">
                <div className="flex flex-col items-center  lg:items-start ">
                  <span
                    id="marion-baston"
                    className=" font-alice text-xs sm:text-xl font-semibold"
                  >
                    Marion Baston
                  </span>
                  <span className="text-xs sm:text-sm">© {currentYear}</span>
                </div>
              </Link>
            </div>
            <Button
              variant="link"
              asChild
              aria-labelledby="legal-notice"
              className="  text-xs sm:text-sm  sm:ml-6 shadow-none lg:w-fit items-start "
            >
              <Link href="/legal-notice" id="legal-notice">
                Mentions légales
              </Link>
            </Button>
          </nav>

          <nav
            aria-labelledby="footer-navigation-link "
            className=" hidden  lg:block lg:col-start-7 lg:col-span-2"
          >
            <ul>
              <li>
                <Button
                  variant="link"
                  asChild
                  aria-labelledby="footer-about-me"
                  className=" shadow-none"
                >
                  <Link href="#aboutme" id="footer-about-me">
                    Qui suis-je
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  asChild
                  aria-labelledby="footer-projects"
                  className="shadow-none"
                >
                  <Link href="#projects" id="footer-projects">
                    Mes Projets
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
          <nav
            aria-labelledby="footer-navigation-link "
            className="hidden lg:block lg:col-start-9 lg:col-span-2"
          >
            <ul>
              <li>
                <Button
                  variant="link"
                  asChild
                  aria-labelledby="footer-skills"
                  className="shadow-none"
                >
                  <Link href="#skills" id="footer-skills">
                    Mes Compétences
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  asChild
                  aria-labelledby="footer-services"
                  className="shadow-none"
                >
                  <Link href="#myservices" id="footer-services">
                    Mes services
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
          <nav
            aria-labelledby="footer-navigation-externalLink"
            className=" col-start-1 row-start-2 col-span-2  lg:row-start-1  lg:col-start-11 lg:col-span-2 "
          >
            <ul className="flex md:flex-col md:items-stretch justify-between items-start">
              <li className="w-full">
                <Button
                  variant="link"
                  asChild
                  aria-labelledby="footer-github"
                  className="shadow-none text-xs sm:text-sm "
                >
                  <Link
                    href="https://github.com/MarionbDev"
                    target="_blank"
                    id="footer-github"
                  >
                    GitHub
                  </Link>
                </Button>
              </li>
              <li className=" w-full ">
                <Button
                  variant="link"
                  asChild
                  aria-labelledby="footer-linkedin"
                  className="shadow-none text-xs sm:text-sm w-full lg:w-fit  "
                >
                  <Link
                    href="https://www.linkedin.com/in/marion-baston/"
                    target="_blank"
                    id="footer-linkedin"
                  >
                    LinkedIn
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
