"use client";

import myPhoto from "@/public/images/myPhoto.png";
import {
  Download,
  GithubIcon,
  LinkedinIcon,
  MessagesSquare,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import CustomLink from "../freelance/_components/CustomLink";

export default function AboutMe() {
  const downloadCV = () => {
    const imageUrl = "/images/cv.pdf";
    window.open(imageUrl, "_blank");
  };

  return (
    <div className="  mx-6 md:mx-10 lg:mx-20 ">
      <div className=" xl:h-[100vh] text-font mb:pb-8   ">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-16 justify-around  items-center h-full  ">
          <div className="font-poppins font-normal -tracking-tight text-txt_black lg:w-[50rem] flex flex-col gap-6 dark:text-white">
            <div className="flex flex-col items-start gap-2">
              <h1 className="  mt-8 sm:mt-16 lg:mt-0 text-[1.5rem] dark:text-white">
                Bonjour, je suis&nbsp;
                <span className=" text-[1.5rem] md:text-[2.2rem]   font-semibold  ">
                  Marion
                </span>
                {/* <span className="text-[1.5rem] md:text-[2.2rem] ">👋</span> */}
              </h1>
              <div className=" ">
                <h2 className=" font-bold  leading-none  text-txt_black dark:text-white text-[1.9rem] lg:text-[1.8rem] xl:text-[2.3rem] mb-2">
                  Développeuse Web Fullstack
                </h2>
                <span className=" wave-about  "></span>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-pretty ">
              <p className=" text-[1rem] md:text-[1.07rem] leading-7   ">
                <span className="font-bold text-[1.1rem]  dark:text-free_yellow/80">
                  Curieuse et passionnée{" "}
                </span>{" "}
                par le web, j’adore expérimenter, tester et relever des défis
                techniques. Mon objectif ? Explorer de nouvelles idées,
                <span className="font-bold text-[1.1rem] dark:text-free_yellow/80 ">
                  {" "}
                  repousser les limites{" "}
                </span>
                du code et donner vie à des projets innovants avec{" "}
                <span className="font-bold text-[1.1rem]  dark:text-free_yellow/80">
                  créativité
                </span>{" "}
                et efficacité !
              </p>
              <p className="text-[1rem] leading-7 ">
                A la{" "}
                <span className="font-bold text-[1.1rem]  dark:text-free_yellow/80">
                  recherche d'opportunité
                </span>{" "}
                en CDD ou CDI, où je pourrai mettre mes compétences à profit
                dans un environnement dynamique et stimulant. En parallèle, je
                travaille sur des projets variés, ainsi qu'en freelance, ce qui
                me permet d'explorer de nouvelles technologies et de{" "}
                <span className="font-bold text-[1.1rem]  dark:text-free_yellow/80">
                  {" "}
                  relever des défis
                </span>{" "}
                variés.
              </p>
            </div>
            <div className=" flex flex-col  md:flex-row lg:mt-8 md:gap-8  ">
              <div className=" flex flex-col sm:flex-row sm:items-center gap-6 md:gap-4">
                <CustomLink
                  href={"/#me-contacter"}
                  aria-label="M'envoyer un email"
                  className="flex items-center justify-center md:gap-2 dark:bg-white/30 dark:hover:bg-white  dark:hover:text-black text-[1rem] md:text-[1.07rem] "
                >
                  <MessagesSquare
                    size="22"
                    id="contact-me header"
                    className=" w-16 md:w-8  "
                  />
                  Discutons ensemble !
                </CustomLink>

                <div className="flex justify-center items-center gap-4 md:gap-2 ">
                  <Button
                    onClick={downloadCV}
                    role="button"
                    aria-label="Télécharger mon CV"
                    className="px-4 gap-2 h-[50px]  text-[1rem] md:text-[1.07rem]   text-txt_black dark:text-white text-center  rounded-full hover:bg-free_grey dark:hover:bg-white/10  hover:text-txt_black border-[1px] dark:border-white hover:border-txt_black transition-colors duration-300 ease-in-out dark:bg-black "
                  >
                    <Download
                      id="download-cv"
                      alt="icône de téléchargement  "
                    />
                    <p className="flex gap-1">
                      <span className="hidden xl:flex">Téléchargez mon</span> CV
                    </p>
                  </Button>
                  <ul className="flex items-center gap-4 md:gap-2">
                    <li className=" border-2 border-black/40 duration-200   hover:border-black/60 dark:shadow-inner dark:shadow-free_grey  dark:hover:bg-white/10 rounded-full p-3 ">
                      {" "}
                      <Link
                        href="https://www.linkedin.com/in/marion-baston/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedinIcon
                          size={26}
                          className="text-txt_black dark:text-white"
                        />
                      </Link>
                    </li>
                    <li className=" border-2 border-black/40 duration-200   hover:border-black/60 dark:shadow-inner dark:shadow-free_grey  dark:hover:bg-white/10 rounded-full p-3 ">
                      <Link
                        href="https://github.com/MarionbDev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubIcon
                          size={26}
                          className="text-txt_black dark:text-white"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center  p-1 ">
            {/* <div className=" p-[0.4rem]  rotate-12 border-gradient border-2 z-20 relative -top-4 sm:top-8 lg:-top-0 lg:mb-24 xl:mb-0 ">*/}
            <Image
              src={myPhoto}
              alt="ma photo de profil"
              width={900}
              height={400}
              className=" w-[10rem] md:w-[15rem] lg:w-[17rem] rounded-full bg-free_yellow "
            />
            {/* <div className="border-two-gradient border-2 z-20 p-28 sm:p-44 relative rotate-12 "></div>
              <span className="absolute z-0 inset-0 m-auto photo-gradient    rounded-bl-[12.2rem] rounded-tr-[12rem] rounded-tl-[24rem] rounded-br-[18rem] w-[88%] rotate-12 mt-5 mb-3 md:mb-4 "></span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
