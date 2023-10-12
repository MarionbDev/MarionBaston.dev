import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#020617] ">
      <footer className="px-2 w-full lg:container lg:m-auto lg:px-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 py-2">
          <div className="lg:col-start-1 lg:col-span-6 flex flex-col justify-between items-start text-white">
            <Link
              href="/"
              className="flex items-center gap-4 ml-10"
              aria-labelledby="my-name"
            >
              <div className="flex flex-col ">
                <span id="my-name" className="text-xl font-semibold">
                  Marion Baston
                </span>
                <span className="text-md">© {currentYear}</span>
              </div>
            </Link>
            <Button
              variant="link"
              asChild
              aria-labelledby="legal-notice"
              className="ml-6 text-white"
            >
              <Link href="/legal-notice" id="legal-notice">
                Mentions légales
              </Link>
            </Button>
          </div>
          <nav
            aria-labelledby="footer-navigation-link "
            className="hidden lg:block lg:col-start-7 lg:col-span-3"
          >
            <ul>
              <li>
                <Button
                  variant="link"
                  asChild
                  aria-labelledby="footer-about-me"
                  className="text-white"
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
                  className="text-white"
                >
                  <Link href="#projects" id="footer-projects">
                    Projets
                  </Link>
                </Button>
              </li>
              <li>
                <Button
                  variant="link"
                  asChild
                  aria-labelledby="footer-skills"
                  className="text-white"
                >
                  <Link href="#skills" id="footer-skills">
                    Compétences
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
          <nav
            aria-labelledby="footer-navigation-externalLink"
            className="lg:col-start-10 lg:col-span-3"
          >
            <ul>
              <li>
                <Button
                  variant="link"
                  asChild
                  aria-labelledby="footer-github"
                  className="text-white"
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
                  className="text-white"
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
