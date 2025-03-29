"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../../../../components/ui/menubar";
import logo from "../../../../public/m_logo.png";

export default function NavbarMobFree() {
  return (
    <div className=" flex navSupp justify-center  ">
      <div className=" flex justify-between items-center  w-full px-8 md:px-12 py-3 fixed z-50   dark:bg-[#181616] bg-bg_white ">
        {/* <ModeToggle /> */}
        <Image
          src={logo}
          width={512}
          height={512}
          alt="logo du site"
          className="w-9 h-9"
        />

        <Menubar className=" border-none p-0 m-0">
          <MenubarMenu>
            <MenubarTrigger
              tabIndex={0}
              aria-label="barre de navigation "
              className="p-0 m-0"
            >
              <Menu className="w-9 h-9  text-free_purple  " />
            </MenubarTrigger>
            <MenubarContent
              sideOffset={2}
              className="w-[100vw]  h-screen flex flex-col gap-6 items-center  dark:bg-[#181616] bg-bg_white border-none shadow-md  pt-8"
            >
              <Link href="/freelance" aria-label="accueil" className="nav-link">
                <MenubarItem className="text-[1.2rem] ">Accueil</MenubarItem>
              </Link>

              <Link href="/freelance/#services" aria-label="services">
                <MenubarItem className="text-[1.2rem] ">Services</MenubarItem>
              </Link>
              <Link href="/#me-contacter" aria-label="me contacter">
                <MenubarItem className=" text-[1.2rem] shadow-inner shadow-free_grey border-2 border-free_yellow bg-free_yellow text-free_purple rounded-full px-6">
                  Demandez un devis
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
