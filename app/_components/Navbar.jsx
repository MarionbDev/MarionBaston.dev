import Image from "next/image";
import Link from "next/link";
import linkedin from "../../public/logos/linkedin.png";
import githubb from "../../public/logos/github.png";

export default function Navbar() {
  return (
    <div className="navbar  flex text-base justify-end items-center  w-full pr-8  h-14 fixed z-50  shadow-purple/10 shadow-md ">
      <nav aria-labelledby="navigation-menu" className=" flex justify-between">
        <ul className=" flex gap-10 items-center font-semibold  ">
          <li className="transition hover:scale-110 duration-300 ">
            <Link href="#aboutme" aria-label="Qui suis-je ?">
              Qui suis-je ?
            </Link>
          </li>
          <li className="transition hover:scale-110 duration-300 ">
            <Link href="#projects" aria-label="mes projets">
              Projets
            </Link>
          </li>
          <li className="transition hover:scale-110 duration-300 ">
            <Link href="#skills" aria-label="mes compétences">
              Compétences
            </Link>
          </li>
          <li className="transition hover:scale-110 duration-300 ">
            <Link href="#myservices" aria-label="mes services">
              Mes services
            </Link>
          </li>
          <li className="transition hover:scale-110 duration-300 hover:rotate-[360deg]">
            <Link
              href="https://www.linkedin.com/in/marion-baston/"
              target="_blank"
            >
              <Image
                src={linkedin}
                alt="lien vers ma page linkedin"
                width={36}
                height={36}
                className=" logo-filter"
              />
            </Link>
          </li>
          <li className="transition hover:scale-110 duration-300 hover:rotate-[360deg]">
            <Link href="https://github.com/MarionbDev" target="_blank">
              <Image
                src={githubb}
                alt="lien vers ma page github"
                width={32}
                height={32}
                className=" logo-filter"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
