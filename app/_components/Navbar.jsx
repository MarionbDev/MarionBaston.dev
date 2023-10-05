import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nav text-purple flex justify-end items-center  w-full pr-8  h-20 ">
      <nav className=" flex justify-between ">
        <ul className=" flex gap-6">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/projects">
            <li>Projets</li>
          </Link>
          <Link href="/skills">
            <li>Compétences</li>
          </Link>
          <Link href="/about">
            <li>A propos</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
