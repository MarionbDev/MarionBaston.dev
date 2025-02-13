"use client";

// import { Button } from "@/components/ui/button";
import splash from "@/public/images/splash.png";
import { Download, MessagesSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import Github from "../../public/images/github-about.svg";
import Linkedin from "../../public/images/linkedin-about.svg";
// import myPhoto from "../../public/images/photo1.png";
import myPhoto from "@/public/images/myPhoto.png";

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
            <div className="flex flex-col items-start">
              <h1 className=" mt-14 sm:mt-20 lg:mt-0 text-[1.5rem]  dark:text-white">
                Bonjour, je suis&nbsp;
                <span className=" text-[1.5rem] md:text-[2.2rem]  font-semibold text-purple dark:text-[#c59ff7] ">
                  Marion👋
                </span>
              </h1>
              <div className=" ">
                <h2 className=" text-[#8300E9] font-extrabold  slide-name-dev leading-none text-[2rem] lg:text-[3.2rem] mb-2">
                  Développeuse Web
                </h2>
                <span className=" wave-about  "></span>
              </div>
            </div>
            <p className=" text-[1rem] md:text-[1.5rem] leading-7   ">
              J'aime expérimenter de nouvelles fonctionnalités, tester de
              nouveaux concepts et relever des défis techniques pour
              continuellement enrichir mes connaissances.
            </p>
            <div className=" flex flex-col md:flex-row lg:mt-8 md:gap-8  ">
              <div className=" flex items-center gap-4">
                <Link
                  href={"/#me-contacter"}
                  aria-label="M'envoyer un email"
                  className="flex  items-center bg-purple dark:bg-purple/80 hover:bg-purple/60  dark:hover:bg-purple_dark dark:hover:text-white  dark:shadow-inner rounded-xl text-[#ffffff] text-[0.9rem]  p-2 md:gap-1 px-4 "
                >
                  <MessagesSquare
                    size="22"
                    id="contact-me header"
                    className="md:mr-2 w-16 md:w-0 "
                  />
                  <span className=" hidden md:flex">Contactez-moi</span>
                </Link>

                <Button
                  onClick={downloadCV}
                  role="button"
                  aria-label="Télécharger mon CV"
                  className=" border-2 shadow-none dark:border-purple md:border-purple/30 hover:border-purple md:dark:border-purple/60  dark:hover:border-purple_dark dark:shadow-purple/80 dark:shadow-inner rounded-xl p-2 gap-2 px-4  text-purple dark:text-white"
                >
                  <Download id="download-cv" alt="icône de téléchargement  " />
                  <p className="flex gap-1">
                    <span className="hidden md:flex">Téléchargez mon</span> CV
                  </p>
                </Button>
                <ul className="flex items-center gap-2">
                  <li className=" border-2 border-purple duration-200 md:opacity-50 hover:opacity-100  hover:border-purple_dark rounded-full p-2 ">
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
                  <li className=" border-2 border-purple duration-200  md:opacity-50 hover:opacity-100  hover:border-purple rounded-full p-2 ">
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
          <div className="flex justify-center items-center -rotate-6  relative bottom-6 xl:bottom-10 ">
            <div className="border-2 p-[0.4rem]  rotate-12 border-[#ab6aff] absolute sm:top-[6rem]   ">
              <Image
                src={myPhoto}
                alt="ma photo de profil"
                width={900}
                height={400}
                className=" w-[14rem] sm:w-[21rem] rounded-b-xl  -rotate-12 absolute bottom-6 sm:bottom-10 rounded-r-[5rem] rounded-l-[5rem]   "
              />
              <div className=" border-2 border-[#c80ec8] p-28 sm:p-44 relative rotate-12 "></div>
            </div>

            <Image
              src={splash}
              alt="splach"
              width={450}
              height={450}
              className=" w-[16rem] sm:w-[28rem] mt-0 sm:mt-16 "
            />
          </div>
        </div>
      </div>
      {/* <div className="w-full flex flex-col md:px-8 lg:px-14 xl:px-24">
          <div className="flex justify-center lg:h-[100vh] lg:pb-32 ">
            <div className="flex w-full ">
              <div className="flex flex-col   lg:items-center justify-center w-full  md:gap- xl:gap-8 mx-8 lg:mx-1">
                <div className=" flex flex-col gap-5 xl:w-[40rem]">
                  <h1 className=" font-roboto text-purple_text dark:text-[#cfcccc] text-xl md:text-3xl lg:text-[4rem]">
                    Je suis Marion
                  </h1>

                  <h2 className="slide-name-dev font-roboto  text-purple_text text-2xl sm:text-2xl md:text-3xl lg:text-[4rem] ">
                    Développeuse Web FullStack
                  </h2>
                  <p className=" leading-7">
                    J'aime expérimenter de nouvelles fonctionnalités, tester de
                    nouveaux concepts et relever des défis techniques pour
                    continuellement enrichir mes connaissances.
                  </p>
                </div>
                <div className=" profile-image-mobile bio-part1 md:mx-2 text-justify slide-para font-lato z-30 text-base  sm:text-xl md:text-base xl:text-lg p-6   relative text-purple_text dark:text-[#cfcccc] mb-6"></div>
                <div className="xl:w-[43rem]   lg:w-[32rem]  flex justify-center sm:justify-start">
                  <div className=" slideLink-1  lg:mt-8 lg:mx-6 md:gap-8 ">
                    <div className="profile-image-mobile flex gap-4">
                      <Button
                        
                        onClick={downloadCV}
                        role="button"
                        aria-label="Télécharger mon CV"
                        className=" font-lato dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/70 bg-purple/80   rounded-xl text-[#ffffff] dark:text-[#cfcccc]  dark:hover:bg-pale_pink/20 hover:bg-purple hover:bg-[#baa8bbc0] p-2 gap-2 px-4 "
                      >
                        <Download
                          size="16"
                          id="download-cv"
                          alt="icône de téléchargement"
                        />
                        CV
                      </Button>

                      <Button
                        role="button"
                        aria-label="M'envoyer un email"
                        className=" font-lato dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30  bg-purple/30  dark:hover:bg-pale_pink/40  rounded-xl p-2 text-sm  dark:text-[#cfcccc] hover:text-[#ffff] text-[#412c7a] "
                      >
                        <MessagesSquare
                          size="16"
                          id="contact-me header"
                          className="mr-2"
                        />
                        <Email text="Contactez-moi" />
                      </Button>
                    </div>

                    <div className="profile-image-desktop flex gap-6">
                      <Button
                        
                        onClick={downloadCV}
                        role="button"
                        aria-label="Télécharger mon CV"
                        className="slideLink font-lato dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/70 bg-purple/80   rounded-xl text-[#ffffff] dark:text-[#cfcccc]  dark:hover:bg-pale_pink/20 hover:bg-purple hover:bg-[#baa8bbc0] p-2 gap-2 px-4 "
                      >
                        <Download
                          size="16"
                          id="download-cv"
                          alt="icône de téléchargement"
                        />
                        Téléchargez mon CV
                      </Button>
                      <Button
                        role="button"
                        aria-label="M'envoyer un email"
                        className=" slideLink-2 font-lato dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30  bg-purple/30  dark:hover:bg-pale_pink/20 hover:bg-[#baa8bbc0] rounded-xl p-2 text-sm  text-[#412c7a] dark:text-[#cfcccc] hover:text-[#ffff]   "
                      >
                        <MessagesSquare
                          size="16"
                          id="contact-me header"
                          className="mr-2"
                        />
                        <Email text="Contactez - moi" />
                      </Button>
                      <Email />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col items-center lg:sw-[70rem] justify-center md:justify-start lg:justify-center gap-4">
              <div className=" profile-image-desktop rounded-full w-40 md:w-52  lg:w-72 2xl:w-[20rem]  z-0 ">
                <Image
                  src={myPhoto}
                  alt="ma photo de profil"
                  width={400}
                  className="   shadow-2xl  shadow-[#0b080f]  lg:border-none  rounded-full  dark:brightness-75 dark:bg-dark_bg_profile bg-bg_profile bg-purple "
                />
              </div>

            </div>
          </div>

          <div className=" flex justify-center">
            <div className=" mt-20 sm:mt-32 md:mt-20 w-full sm:w-10/12">
              <div className="flex flex-col items-center sm:items-start gap-3 mb-1  lg:mb-6 md:mb-8  ">
                <h2
                  className={`font-roboto  text-2xl font-semibold md:text-4xl w-4/5 sm:w-full  text-center lg:text-start  border-b-2 pb-4 sm:pb-2  border-purple `}
                >
                  Qui suis-je ?
                </h2>
              </div>
            </div>
          </div>
          <div className="flex  flex-col  ">
            <div className="flex flex-col items-center lg:flex-row lg:justify-end  py-6 mt-4  gap-10 ">
              <div className=" flex flex-col items-center gap-10 ">
                <div className=" md:w-3/4  lg:w-3/5 mx-6 slide-para font-lato z-30 text-base md:text-justify sm:text-xl md:text-base xl:text-lg p-6 sm:p-5 dark:border-2 md:border-none   border-purple/30 relative  text-purple_text dark:text-[#cfcccc]  shadow-purple/80 dark:shadow-purple/40  shadow-sm rounded-xl  ">
                  <p className=" md:leading-8">
                    <span className="text-[#a066f7] font-semibold dark:text-[#ab72ff]  text-lg lg:text-xl">
                      Passionnée{" "}
                    </span>
                    par la tech et inspirée par ma créativité, je suis
                    <span className=" text-[#a066f7] font-semibold dark:text-[#ab72ff] text-lg lg:text-xl">
                      {" "}
                      déterminée{" "}
                    </span>
                    à mettre en pratique mes compétences acquises en autodidacte
                    et consolidées par la formation de "Développeur fullstack
                    web et web mobile" avec une appétence pour le frontend.
                   
                  </p>
                </div>
                <div className="  md:w-3/4 lg:w-3/5 mx-6 slide-para font-lato z-30 text-base md:text-justify sm:text-xl md:text-base xl:text-lg p-6 sm:p-5 dark:border-2 md:border-none   border-purple/30 relative text-purple_text dark:text-[#cfcccc] shadow-purple/80 dark:shadow-purple/40 shadow-sm rounded-xl   ">
                  <p className="md:leading-8">
                    Mes objectifs de développement sont orientés vers
                    <span className=" text-[#a066f7] font-semibold dark:text-[#ab72ff]  text-lg lg:text-xl">
                      {" "}
                      l'accessibilité{" "}
                    </span>
                    et
                    <span className=" text-[#a066f7] font-semibold dark:text-[#ab72ff]  text-lg lg:text-xl">
                      {" "}
                      l' optimisation{" "}
                    </span>
                    pour les moteurs de recherche (SEO). Je suis déterminée à
                    concevoir des expériences web inclusives et à créer des
                    sites web qui offrent une excellente expérience utilisateur
                    pour tous, tout en veillant à ce qu'ils soient bien
                    positionnés sur les moteurs de recherche pour atteindre un
                    public plus large. J'apprécie le travail en équipe, le souci
                    du détail et la qualité du code.
                  
                  </p>
                </div>
                <div className="   md:w-3/4 lg:w-3/5 mx-6 slide-para font-lato z-30 text-base md:text-justify sm:text-xl md:text-base xl:text-lg p-6 sm:p-5 dark:border-2 md:border-none   border-purple/30 relative text-purple_text dark:text-[#cfcccc] shadow-purple/80 dark:shadow-purple/40 shadow-sm rounded-xl  ">
                  <p>
                    Je reste à l'écoute de toutes les opportunités et
                    enthousiaste à l'idée de mettre en pratique mes compétences
                    au sein d'une entreprise dynamique. Si votre équipe
                    recherche une{" "}
                    <span className=" text-[#a066f7] font-semibold dark:text-[#ab72ff]  text-lg lg:text-xl">
                      {" "}
                      développeuse web React.js / Next.js
                    </span>
                    , je serais honorée de contribuer à des projets innovants au
                    sein de votre organisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
}
