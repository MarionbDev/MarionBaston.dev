"use client";

import { Github, Linkedin, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../../components/ui/menubar";
import { ModeToggle } from "./ModeToggle";

export default function NavbarMobile() {
  const pathname = usePathname();

  const hideNavbarOn = ["/developpeuse-web-freelance"];

  if (hideNavbarOn.includes(pathname)) return null;
  return (
    <div className=" flex navSupp justify-center  ">
      <div className=" flex justify-between items-center  w-full px-8 md:px-12 pt-6 pb-2 fixed z-50  bg-bg_white dark:bg-[#0e0e0e]  ">
        <ModeToggle />

        <Menubar className="border-none p-0 m-0">
          <MenubarMenu>
            <MenubarTrigger
              tabIndex={0}
              aria-label="barre de navigation "
              className="p-0 m-0"
            >
              <Menu className="w-9 h-9  text-purple  " />
            </MenubarTrigger>
            <MenubarContent
              sideOffset={2}
              className="w-[100vw]  h-screen flex flex-col gap-6 items-center  dark:bg-[#0e0e0e] bg-bg_white border-none shadow-md  pt-8"
            >
              <Link href="/#home" aria-label="Home">
                <MenubarItem className="text-[1.2rem] ">Bienvenue</MenubarItem>
              </Link>
              <Link
                href="/parcours"
                aria-label="mon parcours"
                className="nav-link"
              >
                <MenubarItem className="text-[1.2rem] ">
                  Mon parcours
                </MenubarItem>
              </Link>
              <Link href="/portfolio" aria-label="mes projets">
                <MenubarItem className="text-[1.2rem] ">Portfolio</MenubarItem>
              </Link>
              <Link href="/#skills" aria-label="mes compétences">
                <MenubarItem className="text-[1.2rem] ">
                  Mes Compétences
                </MenubarItem>
              </Link>

              <Link href="/#me-contacter" aria-label="me contacter">
                <MenubarItem className="text-[1.2rem] ">
                  Contactez-moi
                </MenubarItem>
              </Link>

              <span className=" flex justify-center border-t-[1px]  border-purple/40 my-8 w-2/4"></span>
              <div className="flex  gap-3">
                <Link
                  href="https://www.linkedin.com/in/marion-baston/"
                  target="_blank"
                  aria-label="me contacter"
                >
                  <MenubarItem className="text-[1.2rem] bg-purple/70 rounded-full p-2 ">
                    <Linkedin size={28} color="white " />
                  </MenubarItem>
                </Link>
                <Link
                  href="https://github.com/MarionbDev"
                  target="_blank"
                  aria-label="me contacter"
                >
                  <MenubarItem className="text-[1.2rem]  bg-purple/70 rounded-full p-2">
                    <Github size={28} color="white" />
                  </MenubarItem>
                </Link>
              </div>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
