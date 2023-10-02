export default function Navbar() {
  return (
    <div className="nav text-purple flex justify-end items-center  w-full pr-8  h-20 ">
      <nav className=" flex justify-between ">
        <ul className=" flex gap-6">
          <li>Home</li>
          <li>Projets</li>
          <li>Compétences</li>
          <li>A propos</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

// prévoir changement couleur text + logo dans la nav bar quand celle ci disparait
