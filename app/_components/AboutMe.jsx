"use client";

import myPhoto from "@/public/images/myPhoto.png";
import splash from "@/public/images/splash.png";
import { Download, MessagesSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import Github from "../../public/images/github-about.svg";
import Linkedin from "../../public/images/linkedin-about.svg";

export default function AboutMe() {
  const downloadCV = () => {
    const imageUrl = "/images/cv.pdf";
    window.open(imageUrl, "_blank");
  };

  return (
    <div className="  mx-6 md:mx-20 xl:mx-0">
      <div className=" lg:h-[100vh] text-font mb:pb-8   ">
        <div className="flex flex-col-reverse xl:flex-row justify-around items-center h-full  ">
          <div className="font-poppins font-normal -tracking-tight text-txt_black xl:w-[40rem] flex flex-col gap-6 dark:text-white">
            <div className="flex flex-col items-start gap-2">
              <h1 className="  mt-14 sm:mt-20 lg:mt-0 text-[1.5rem]  dark:text-white">
                Bonjour, je suis&nbsp;
                <span className=" text-[1.5rem] md:text-[2.2rem]  font-semibold text-purple dark:text-[#c59ff7] ">
                  Marion
                </span>
                <span className="text-[1.5rem] md:text-[2.2rem] ">👋</span>
              </h1>
              <div className=" ">
                <h2 className=" text-[#8300E9] font-extrabold  slide-name-dev leading-none text-[2rem] lg:text-[3.2rem] mb-2">
                  Développeuse Web
                </h2>
                <span className=" wave-about  "></span>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-pretty">
              <p className=" text-[1rem] leading-7   ">
                <span className="font-bold text-[1.1rem] text-purple dark:text-[#d29aec]">
                  Curieuse et passionnée{" "}
                </span>{" "}
                par le web, j’adore expérimenter, tester et relever des défis
                techniques. Mon objectif ? Explorer de nouvelles idées,
                <span className="font-bold text-[1.1rem] text-purple dark:text-[#d29aec]">
                  {" "}
                  repousser les limites{" "}
                </span>
                du code et donner vie à des projets innovants avec{" "}
                <span className="font-bold text-[1.1rem] text-purple dark:text-[#d29aec]">
                  créativité
                </span>{" "}
                et efficacité !
              </p>
              <p className="text-[1rem] leading-7 ">
                A la{" "}
                <span className="font-bold text-[1.1rem] text-purple dark:text-[#d29aec]">
                  recherche d'opportunité
                </span>{" "}
                en CDD ou CDI, où je pourrai mettre mes compétences à profit
                dans un environnement dynamique et stimulant. En parallèle, je
                travaille sur des projets variés, ainsi qu'en freelance, ce qui
                me permet d'explorer de nouvelles technologies et de{" "}
                <span className="font-bold text-[1.1rem] text-purple dark:text-[#d29aec]">
                  {" "}
                  relever des défis
                </span>{" "}
                variés.
              </p>
            </div>
            <div className=" flex flex-col  md:flex-row lg:mt-8 md:gap-8  ">
              <div className=" flex flex-col sm:flex-row sm:items-center gap-6 md:gap-4">
                <Link
                  href={"/#me-contacter"}
                  aria-label="M'envoyer un email"
                  className="flex  items-center justify-center bg-purple dark:bg-purple/80 hover:bg-purple/60  dark:hover:bg-purple_dark dark:hover:text-white shadow-md rounded-xl text-[#ffffff] text-[0.9rem] text-center p-2   w-full sm:w-[16rem]"
                >
                  <MessagesSquare
                    size="22"
                    id="contact-me header"
                    className=" w-16 md:w-8  "
                  />
                  Discutons ensemble !
                </Link>

                <div className="flex justify-center items-center gap-4 md:gap-2 ">
                  <Button
                    onClick={downloadCV}
                    role="button"
                    aria-label="Télécharger mon CV"
                    className=" border-2 dark:border-purple md:border-purple/40 hover:border-purple md:dark:border-purple/60 shadow-md  dark:hover:border-purple_dark dark:shadow-purple/80 dark:shadow-inner rounded-xl p-2 gap-2 px-4  text-purple dark:text-white"
                  >
                    <Download
                      id="download-cv"
                      alt="icône de téléchargement  "
                    />
                    <p className="flex gap-1">
                      <span className="hidden md:flex">Téléchargez mon</span> CV
                    </p>
                  </Button>
                  <ul className="flex items-center gap-4 md:gap-2">
                    <li className=" border-2 border-purple/40 duration-200  hover:border-purple_dark rounded-full p-2 ">
                      <Link
                        href="https://www.linkedin.com/in/marion-baston/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={Linkedin}
                          alt="lien vers ma page linkedin"
                          width={26}
                          height={26}
                        />
                      </Link>
                    </li>
                    <li className=" border-2 border-purple/40 duration-200   hover:border-purple rounded-full p-2 ">
                      {" "}
                      <Link
                        href="https://github.com/MarionbDev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={Github}
                          alt="lien vers ma page github"
                          width={26}
                          height={26}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center -rotate-6  relative bottom-6 lg:bottom-32 xl:bottom-10 ">
            <div className=" p-[0.4rem]  rotate-12 border-gradient absolute sm:top-[6rem]   ">
              <Image
                src={myPhoto}
                alt="ma photo de profil"
                width={900}
                height={400}
                className=" w-[14rem] sm:w-[21rem] rounded-b-xl  -rotate-12 absolute bottom-6 sm:bottom-10 rounded-r-[5rem] rounded-l-[5rem]   "
              />
              <div className="border-two-gradient border-2  p-28 sm:p-44 relative rotate-12 "></div>
            </div>

            <Image
              src={splash}
              alt=""
              width={450}
              height={450}
              className=" w-[16rem] sm:w-[28rem] mt-0 sm:mt-16 "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
