"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(null);
  const pathname = usePathname();

  const hideFooterOn = ["/developpeuse-web-freelance"];

  if (hideFooterOn.includes(pathname)) return null;

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  if (currentYear === null) {
    return null;
  }

  return (
    <footer>
      <div className=" py-2 px-6 bg-purple dark:border-t-[1px] dark:bg-[#121212] text-[#f3f1f1] ">
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
                  <Link href="#home" id="footer-about-me">
                    Bienvenue
                  </Link>
                </li>
                <li>
                  <Link href="/parcours" id="footer-services">
                    Mon parcours
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" id="footer-projects">
                    Portfolio
                  </Link>
                </li>

                <li>
                  <Link href="#skills" id="footer-skills">
                    Mes Compétences
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col my-6 gap-2 ">
              <p className=" font-bold text-[1.2rem]">Contact</p>
              <ul className=" flex flex-col gap-2">
                <li className=" w-full ">
                  <Link href={"/#me-contacter"}>Email</Link>
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
            <span className="flex justify-center  mx-4 border-t-[1px]  border-[#f3dec9] my-8"></span>
            <Link href="/" aria-labelledby="marion-baston" className="block">
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 mb-8">
                <p className=" ">© {currentYear}</p>
                <p
                  id="marion-baston"
                  className=" font-poppins tracking-wide font-semibold "
                >
                  Marion Baston
                </p>
                <p
                  id="marion-baston"
                  className=" font-poppins tracking-wide font-semibold "
                >
                  Développeuse Web
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
