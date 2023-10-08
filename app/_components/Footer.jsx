import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="to-[#f3def3c0] bg-gradient-to-t from-[#FFFFFF] to-transparent">
      <footer className="px-2 w-full lg:container lg:m-auto lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 py-4">
          <div className="lg:col-start-1 lg:col-span-6 flex flex-col justify-between items-start">
            <Link
              href="/"
              className="flex items-center gap-4 ml-10"
              aria-labelledby="my-name"
            >
              <span className="flex flex-col">
                <span id="my-name" className="text-xl font-semibold">
                  Marion Baston
                </span>
                <span className="text-md">© {currentYear}</span>
              </span>
            </Link>
            <Button
              variant="link"
              asChild
              className="ml-6"
              aria-labelledby="legal-notice"
            >
              <Link href="/legal-notice" id="legal-notice">
                Mentions légales
              </Link>
            </Button>
          </div>
          <nav
            aria-labelledby="footer-navigation-link"
            className="hidden lg:block lg:col-start-7 lg:col-span-3"
          >
            <ul>
              <li>
                <Button variant="link" asChild aria-labelleby="about-me">
                  <Link href="#aboutme" id="about-me">
                    Qui suis-je
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild aria-labelleby="projects">
                  <Link href="#projects" id="projects">
                    Projets
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild aria-labelleby="skills">
                  <Link href="#skills" id="skills">
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
                <Button variant="link" asChild aria-labelleby="github">
                  <Link
                    href="https://github.com/MarionbDev"
                    target="_blank"
                    id="github"
                  >
                    GitHub
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild aria-labelleby="linkedin">
                  <Link
                    href="https://www.linkedin.com/in/marion-baston/"
                    target="_blank"
                    id="linkedin"
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
