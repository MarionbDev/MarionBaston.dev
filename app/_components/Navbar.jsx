import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="navbar flex text-base justify-between items-center  w-full pr-7  h-14 fixed z-50  shadow-purple/10 shadow-md text-txt_black dark:text-white ">
      <div className="  ml-4">
        <ModeToggle />
      </div>
      <nav aria-labelledby="navigation-menu" className=" flex justify-between">
        <ul className="font-lato flex gap-8 items-center font-medium  ">
          <li className="">
            <Link
              href="#aboutme"
              aria-label="En savoir plus sur moi"
              className="nav-link"
            >
              Qui suis-je ?<span className="underline"></span>
            </Link>
          </li>
          <li className="">
            <Link
              href="#projects"
              aria-label="mes projets"
              className="nav-link"
            >
              Mes Projets<span className="underline"></span>
            </Link>
          </li>
          <li className="">
            <Link
              href="#skills"
              aria-label="mes compétences "
              className="nav-link"
            >
              Mes Compétences<span className="underline"></span>
            </Link>
          </li>
          <li className="">
            <Link
              href="#myservices"
              aria-label="mes services"
              className="nav-link"
            >
              Mes services<span className="underline"></span>
            </Link>
          </li>
          {/* <li className="transition hover:scale-110 duration-300 hover:rotate-[360deg]">
            <Link
              href="https://www.linkedin.com/in/marion-baston/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                key={currentTheme}
                src={linkedinImage}
                alt="lien vers ma page linkedin"
                width={36}
                height={36}
                className=" logo-filter dark:filter-none"
              />
            </Link>
          </li>
          <li className="transition hover:scale-110 duration-300 hover:rotate-[360deg]">
            <Link
              href="https://github.com/MarionbDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              {}
              <Image
                src={githubImage}
                alt="lien vers ma page github"
                width={32}
                height={32}
                className=" logo-filter dark:filter-none  rounded-full"
              />
            </Link>
          </li> */}
        </ul>
        {/* <button
          onClick={handleButtonClick}
          role="button"
          aria-label="Se connecter"
          className="ml-5 pl-4 border-l "
        >
          <LogIn size="18" className="hover:scale-125 duration-300 " />
        </button> */}
      </nav>
    </div>
  );
}
