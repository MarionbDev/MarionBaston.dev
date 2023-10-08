import Image from "next/image";
import Link from "next/link";
import linkedin from "../../public/logos/linkedin.png";
import github from "../../public/logos/github.png";

export default function Navbar() {
  return (
    <div className="nav text-purple flex justify-end items-center  w-full pr-8  h-20 ">
      <nav aria-labelledby="navigation-menu" className=" flex justify-between">
        <ul className=" flex gap-6 items-center">
          <li>
            <Link href="#aboutme" aria-label="Qui suis-je ?">
              Qui suis-je ?
            </Link>
          </li>
          <li>
            <Link href="#projects" aria-label="mes projets">
              Projets
            </Link>
          </li>
          <li>
            <Link href="#skills" aria-label="mes compétences">
              Compétences
            </Link>
          </li>
          <div className="flex gap-2">
            <li>
              <Link
                href="https://www.linkedin.com/in/marion-baston/"
                target="_blank"
              >
                <Image
                  src={linkedin}
                  alt="lien vers ma page linkedin"
                  width={42}
                  height={42}
                />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/MarionbDev" target="_blank">
                <Image
                  src={github}
                  alt="lien vers ma page github"
                  width={36}
                  height={36}
                />
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
