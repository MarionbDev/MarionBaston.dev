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
import { ChevronRight, LogIn, Menu } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import Link from "next/link";
import gmailLogo from "../../public/images/gmail.svg";
import linkedinColor from "../../public/images/linkedinColor.svg";
import githubb from "../../public/logos/github.png";
import Email from "./Email";
import { ModeToggle } from "./ModeToggle";

export default function NavbarMobile(emailAddress) {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/login");
  };

  return (
    <div className="  flex navSupp">
      <div className=" ml-2 mt-3 ">
        <ModeToggle />
      </div>
      <div className="  mr-2 mt-2  fixed right-0 z-50  ">
        <Menubar className="border-none">
          <MenubarMenu>
            <MenubarTrigger tabIndex={0} aria-label="barre de navigation">
              <Menu className="w-10 h-10 " />
            </MenubarTrigger>
            <MenubarContent
              align="start"
              sideOffset={1}
              className=" dark:bg-[#39294f] mr-2   bg-white border-none  shadow-md shadow-[#3f2f5565] rounded-lg "
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
                  <MenubarItem aria-label="Lien vers ma page Linkedin">
                    <Link
                      href="https://www.linkedin.com/in/marion-baston/"
                      target="_blank"
                    >
                      <div className="flex items-center gap-2 italic text-sm">
                        <Image
                          src={linkedinColor}
                          alt="lien vers ma page linkedin"
                          width={30}
                          height={30}
                        />{" "}
                        Linkedin
                      </div>
                    </Link>
                  </MenubarItem>
                  <MenubarItem aria-label="Lien vers ma page Github">
                    <Link href="https://github.com/MarionbDev" target="_blank">
                      <div className="flex items-center gap-2 italic text-sm">
                        <Image
                          src={githubb}
                          alt="lien vers ma page github"
                          width={28}
                          height={28}
                          className=" logo-filter bg-white rounded-full"
                        />
                        GitHub{" "}
                      </div>
                    </Link>
                  </MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator className="  bg-purple" />
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
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </div>
  );
}
