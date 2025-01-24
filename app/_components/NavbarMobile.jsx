import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "../../components/ui/menubar";
import { ModeToggle } from "./ModeToggle";

export default function NavbarMobile() {
  return (
    <div className=" flex navSupp justify-center  ">
      <div className=" flex justify-between  w-full px-8 sm:px-12 mt-9 fixed z-50  ">
        <ModeToggle />

        <Menubar className="border-none p-0 m-0">
          <MenubarMenu>
            <MenubarTrigger
              tabIndex={0}
              aria-label="barre de navigation "
              className="p-0 m-0"
            >
              <Menu className="w-11 h-11  text-[#5c23ac]  " />
            </MenubarTrigger>
            <MenubarContent
              align="start"
              sideOffset={0}
              className=" dark:bg-[#39294f] mr-2   bg-bg_white border-none  shadow-md shadow-[#3f2f5565] rounded-lg "
            >
              <Link href="/#home" aria-label="Home">
                <MenubarItem className="text-sm ">Home</MenubarItem>
              </Link>
              <Link href="/#portfolio" aria-label="mes projets">
                <MenubarItem className="text-sm ">Portfolio</MenubarItem>
              </Link>
              <Link href="/#mes-competences" aria-label="mes compétences">
                <MenubarItem className="text-sm ">Mes Compétences</MenubarItem>
              </Link>
              <Link href="/#mes-services" aria-label="mes services">
                <MenubarItem className="text-sm ">Mes services</MenubarItem>
              </Link>
              <Link href="/#me-contacter" aria-label="me contacter">
                <MenubarItem className="text-sm ">Contactez-moi</MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
