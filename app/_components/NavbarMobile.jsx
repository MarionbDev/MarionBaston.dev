import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
} from "@radix-ui/react-menubar";
import { ChevronRight, Menu } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import Link from "next/link";
import gmailLogo from "../../public/images/gmail.svg";
// import linkedinColor from "../../public/images/linkedinColor.svg";
// import githubb from "../../public/logos/github.png";
import Email from "./Email";
import { ModeToggle } from "./ModeToggle";

export default function NavbarMobile(emailAddress) {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/login");
  };

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
              <MenubarSub>
                <MenubarSubTrigger className="flex text-sm items-center ">
                  <ChevronRight className="  w-5 rotate-180" /> Contact
                </MenubarSubTrigger>
                <MenubarSubContent
                  sideOffset={1}
                  className=" bg-white dark:bg-[#39294f] w-32    shadow-[#3f2f5565] shadow-md  "
                >
                  <MenubarItem
                    aria-label="Lien vers mon adresse Gmail"
                    className="flex gap-2 italic text-sm"
                  >
                    <Email
                      emailAddress={emailAddress}
                      logo={
                        <Image
                          src={gmailLogo}
                          alt="logo Gmail"
                          width={30}
                          height={30}
                        />
                      }
                    />
                    Gmail
                  </MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              {/* <MenubarSeparator className="  bg-purple" />
              <MenubarItem className="text-sm  px-0 ">
                <button
                  onClick={handleButtonClick}
                  role="button"
                  aria-label="Se connecter"
                  className=" italic flex gap-2 "
                >
                  <LogIn size="18" className="hover:scale-125 duration-300 " />
                  Se connecter
                </button>
              </MenubarItem> */}
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
