import Image from "next/image";
import { Menu } from "lucide-react";
import { ChevronRight } from "lucide-react";
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
import Link from "next/link";
import linkedinColor from "../../public/images/linkedinColor.svg";
import githubb from "../../public/logos/github.png";
import Email from "./Email";
import gmailLogo from "../../public/images/gmail.svg";

export default function NavbarMobile(emailAddress) {
  return (
    <div className=" navSupp mr-2 mt-2  fixed right-0 z-50  ">
      <Menubar className="border-none">
        <MenubarMenu>
          <MenubarTrigger>
            <Menu className="w-6 h-6 " />
          </MenubarTrigger>
          <MenubarContent
            align="start"
            sideOffset={1}
            className=" bg-white border-none  shadow-md shadow-[#3f2f5565] rounded-lg "
          >
            <Link href="#aboutme" aria-label="Qui suis-je ?">
              <MenubarItem className="text-xs ">Qui suis-je ?</MenubarItem>{" "}
            </Link>
            <Link href="#projects" aria-label="mes projets">
              <MenubarItem className="text-xs ">Projets</MenubarItem>
            </Link>
            <Link href="#skills" aria-label="mes compétences">
              <MenubarItem className="text-xs ">Compétences</MenubarItem>
            </Link>
            <Link href="#myservices" aria-label="mes services">
              <MenubarItem className="text-xs ">Mes services</MenubarItem>
            </Link>
            <MenubarSeparator className="  bg-purple" />
            <MenubarSub className=" ">
              <MenubarSubTrigger className="flex text-sm items-center ">
                <ChevronRight className="  w-5 rotate-180" /> Contact
              </MenubarSubTrigger>
              <MenubarSubContent
                sideOffset={1}
                className=" bg-white shadow-[#3f2f5565] shadow-md "
              >
                <MenubarItem>
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
                </MenubarItem>
                <MenubarItem>
                  <Link
                    href="https://www.linkedin.com/in/marion-baston/"
                    target="_blank"
                  >
                    <Image
                      src={linkedinColor}
                      alt="lien vers ma page linkedin"
                      width={30}
                      height={30}
                    />
                  </Link>
                </MenubarItem>
                <MenubarItem>
                  <Link href="https://github.com/MarionbDev" target="_blank">
                    <Image
                      src={githubb}
                      alt="lien vers ma page github"
                      width={28}
                      height={28}
                      className=" logo-filter"
                    />
                  </Link>
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}