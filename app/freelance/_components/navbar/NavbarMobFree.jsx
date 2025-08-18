"use client";

import { Handshake, House, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../../../../components/ui/menubar";
// import logo from "../../../../public/m_logo.png";
import logo from "./logo-bw.png";

export default function NavbarMobFree() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

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

        <Menubar className="border-none p-0 m-0">
          <MenubarMenu>
            <MenubarTrigger
              tabIndex={0}
              aria-label="barre de navigation "
              onClick={() => setIsOpen(!isOpen)}
              className="p-0 m-0"
            >
              {hasMounted ? (
                isOpen ? (
                  <X className="w-9 h-9 text-black" />
                ) : (
                  <Menu className="w-9 h-9 text-black" />
                )
              ) : (
                <Menu className="w-9 h-9 text-black" />
              )}
            </MenubarTrigger>
            <MenubarContent
              sideOffset={2}
              className="w-[100vw]  h-screen flex flex-col gap-6 items-center text-txt_black bg-bg_white border-none shadow-md  pt-8"
            >
              <Link
                href="/freelance"
                aria-label="accueil"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                <MenubarItem className="text-[1.2rem] gap-2 ">
                  <House size={18} />
                  Accueil
                </MenubarItem>
              </Link>

              <Link
                href="/freelance/#services"
                aria-label="services"
                onClick={() => setIsOpen(false)}
              >
                {" "}
                <MenubarItem className="text-[1.2rem] gap-2 ">
                  <Handshake size={18} />
                  Services
                </MenubarItem>
              </Link>
              <Link
                href="/freelance/#offres"
                aria-label="offres"
                onClick={() => setIsOpen(false)}
              >
                {" "}
                <MenubarItem className="text-[1.2rem] gap-2 ">
                  <Handshake size={18} />
                  Offres
                </MenubarItem>
              </Link>

              <Link href="/freelance/contact" aria-label="me contacter">
                <MenubarItem className=" text-[1.2rem] shadow-inner shadow-white   bg-free_yellow  rounded-full px-6">
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
