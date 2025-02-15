import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="navbar flex text-base justify-between items-center  w-full pr-3 lg:pr-6  h-14 fixed z-50  shadow-purple/10 shadow-md text-txt_black dark:text-white ">
      <div className="  ml-4">
        <ModeToggle />
      </div>
      <nav aria-labelledby="navigation-menu" className=" flex justify-between">
        <ul className="font-lato flex gap-4 lg:gap-6 items-center font-medium  ">
          <li className="">
            <Link href="/#home" aria-label="Accueil" className="nav-link">
              Bienvenue<span className="underline-nav"></span>
            </Link>
          </li>
          <li className="">
            <Link
              href="/parcours"
              aria-label="mon parcours"
              className="nav-link"
            >
              Mon parcours<span className="underline-nav"></span>
            </Link>
          </li>

          <li className="">
            <Link
              href="/portfolio"
              aria-label="mes projets"
              className="nav-link"
            >
              Portfolio<span className="underline-nav"></span>
            </Link>
          </li>
          <li className="">
            <Link
              href="/#skills"
              aria-label="mes compétences"
              className="nav-link"
            >
              Mes compétences<span className="underline-nav"></span>
            </Link>
          </li>

          <li>
            <Link
              href={"/#me-contacter"}
              aria-label="me contacter"
              className="nav-link"
            >
              <MessageCircle size={24} />{" "}
              <span className="underline-nav"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
