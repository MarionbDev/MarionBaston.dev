import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../../components/ui/menubar";
// import linkedinColor from "../../public/images/linkedinColor.svg";
// import githubb from "../../public/logos/github.png";
import { ModeToggle } from "./ModeToggle";

export default function NavbarMobile() {
  return (
    <div className=" flex navSupp justify-center ">
      <div className=" flex justify-between w-5/6 rounded-full px-1 mt-9 fixed z-50 bg-purple/40   ">
        <ModeToggle />

        <Menubar className="border-none">
          <MenubarMenu>
            <MenubarTrigger tabIndex={0} aria-label="barre de navigation ">
              <Menu className="w-10 h-10  mt-2 text-[#5c23ac] dark:text-[#d6c0f5] " />
            </MenubarTrigger>
            <MenubarContent
              align="start"
              sideOffset={1}
              className=" dark:bg-[#39294f] mr-2   bg-bg_white border-none  shadow-md shadow-[#3f2f5565] rounded-lg "
            >
              <Link href="#aboutme" aria-label="Qui suis-je ?">
                <MenubarItem className="text-sm ">Qui suis-je ?</MenubarItem>
              </Link>
              <Link href="#projects" aria-label="mes projets">
                <MenubarItem className="text-sm ">Mes Projets</MenubarItem>
              </Link>
              <Link href="#skills" aria-label="mes compétences">
                <MenubarItem className="text-sm ">Mes Compétences</MenubarItem>
              </Link>
              <Link href="#myservices" aria-label="mes services">
                <MenubarItem className="text-sm ">Mes services</MenubarItem>
              </Link>
              <MenubarSeparator className="  bg-purple" />
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
