import Image from "next/image";
import Link from "next/link";
import linkedin from "../../public/logos/linkedin.png";
import github from "../../public/logos/github.png";

export default function Navbar() {
  return (
    <div className="nav text-purple flex justify-end items-center  w-full pr-8  h-20 ">
      <nav className=" flex justify-between">
        <ul className=" flex gap-6 items-center">
          <Link href="#aboutme">
            <li>Qui suis-je</li>
          </Link>
          <Link href="#projects">
            <li>Projets</li>
          </Link>
          <Link href="#skills">
            <li>Compétences</li>
          </Link>
          <div className="flex gap-2">
            <li>
              <a
                href="https://www.linkedin.com/in/marion-baston/"
                target="_blank"
              >
                <Image
                  src={linkedin}
                  alt="link linkedin"
                  width={42}
                  height={42}
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/MarionbDev" target="_blank">
                <Image src={github} alt="link github" width={36} height={36} />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
