import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="to-[#fae8ff] bg-gradient-to-t from-purple/50 to-transparent  ">
      <footer className="font-lato px-2 w-full lg:container lg:m-auto lg:px-8 text-[#4f3670] ">
        <div className="grid grid-cols-2 lg:grid-cols-12 py-2">
          <div className=" lg:col-start-1 lg:col-span-3 flex sm:flex-col justify-between items-start ">
            <Link
              href="/"
              className="flex items-center gap-4 sm:ml-10"
              aria-labelledby="marion-baston "
            >
              <div className="flex flex-col ">
                <span
                  id="marion-baston"
                  className=" font-alice text-xs sm:text-xl font-semibold"
                >
                  Marion Baston
                </span>
                <span className="text-xs sm:text-sm">© {currentYear}</span>
              </div>
            </Link>
            <Button
              variant="link"
              asChild
              aria-labelledby="legal-notice"
              className="  text-xs sm:text-sm sm:ml-6 shadow-none "
            >
              <Link href="/legal-notice" id="legal-notice">
                Mentions légales
              </Link>
            </Button>
          </div>
          <div></div>
          <nav
            aria-labelledby="footer-navigation-link "
            className=" hidden lg:block lg:col-start-7 lg:col-span-2"
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
                    Projets
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
                    Compétences
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  asChild
                  aria-labelledby="footer-skills"
                  className="shadow-none"
                >
                  <Link href="#myservices" id="footer-skills">
                    Mes services
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
          <nav
            aria-labelledby="footer-navigation-externalLink"
            className=" col-start-2 row-start-1 lg:col-start-11 lg:col-span-2"
          >
            <ul className="flex md:flex-col">
              <li>
                <Button
                  variant="link"
                  asChild
                  aria-labelledby="footer-github"
                  className="shadow-none text-xs sm:text-sm"
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
              <li>
                <Button
                  variant="link"
                  asChild
                  aria-labelledby="footer-linkedin"
                  className="shadow-none text-xs sm:text-sm"
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
      </footer>
    </div>
  );
}
