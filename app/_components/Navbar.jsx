import Image from "next/image";
import Link from "next/link";
import linkedin from "../../public/logos/linkedin.png";
import githubb from "../../public/logos/github.png";
import { ModeToggle } from "./ModeToggle";
import { LogIn } from "lucide-react";
import { useRouter } from "next-nprogress-bar";

export default function Navbar() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/login");
  };

  return (
    <div className="navbar flex text-base justify-between items-center  w-full pr-7  h-14 fixed z-50  shadow-purple/10 shadow-md ">
      <div className="  ml-4">
        <ModeToggle />
      </div>
      <nav aria-labelledby="navigation-menu" className=" flex justify-between">
        <ul className="font-lato flex gap-8 items-center font-medium  ">
          <li className="transition hover:scale-110 duration-300 ">
            <Link href="#aboutme" aria-label="En savoir plus sur moi">
              Qui suis-je ?
            </Link>
          </li>
          <li className="transition hover:scale-110 duration-300 ">
            <Link href="#projects" aria-label="mes projets">
              Mes Projets
            </Link>
          </li>
          <li className="transition hover:scale-110 duration-300 ">
            <Link href="#skills" aria-label="mes compétences">
              Mes Compétences
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
              rel="noopener noreferrer"
            >
              <Image
                src={linkedin}
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
              <Image
                src={githubb}
                alt="lien vers ma page github"
                width={32}
                height={32}
                className=" logo-filter dark:filter-none dark:bg-white rounded-full"
              />
            </Link>
          </li>
        </ul>
        <button
          onClick={handleButtonClick}
          role="button"
          aria-label="Se connecter"
          className="ml-5 pl-4 border-l "
        >
          <LogIn size="18" className="hover:scale-125 duration-300 " />
        </button>
      </nav>
    </div>
  );
}
