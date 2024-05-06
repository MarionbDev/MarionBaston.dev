"use client";

import { Button } from "@/components/ui/button";
import { getBio } from "@/lib/api/bio";
import { Download, MessagesSquare } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import myPhoto from "../../public/images/photo1.png";
import Email from "./Email";

export default function AboutMe() {
  const downloadCV = () => {
    const imageUrl = "/images/marionbastonCV.png";
    window.open(imageUrl, "_blank");
  };

  const [bio, setBio] = useState({});
  const [titleBusiness, setTitleBusiness] = useState("");
  const [descriptionPart1, setDescriptionPart1] = useState("");
  const [descriptionPart2, setDescriptionPart2] = useState("");
  const [descriptionPart3, setDescriptionPart3] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isLoading = Object.keys(bio).length === 0;

  const adminBio = async () => {
    try {
      const data = await getBio();
      // console.log("adminBio data:", data);
      if (data && data.length > 0) {
        setBio(data[0]);
        setTitleBusiness(data[0]?.title_business || "");
        setDescriptionPart1(data[0]?.description_part1 || "");
        setDescriptionPart2(data[0]?.description_part2 || "");
        setDescriptionPart3(data[0]?.description_part3 || "");
      } else {
        console.error("Error fetching admin bio");
        setError(error.message || "Erreur inconnue");
      }
    } catch (error) {
      console.error(`Error fetching admin bio: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log("Inside useEffect");
    adminBio();
  }, []);

  return (
    <div className=" ">
      {isLoading ? (
        // Affiche un indicateur de chargement ou tout autre chose
        <div className="mt-20 h-screen">
          <p className=" text-center"></p>
        </div>
      ) : error ? (
        <div className="mt-20  h-screen">
          <p className="text-center">Erreur: {error}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center text-font pt-16 md:pt-32 pb-8  md:px-0 xl:py-20   ">
          <div className="profile-image-mobile flex justify-center rounded-full w-48 mt-20  mb-10 ">
            <Image
              src={myPhoto}
              alt="ma photo de profil"
              width={400}
              className=" shadow-[#0b080f] shadow-2xl  rounded-full  dark:brightness-75 dark:bg-dark_bg_profile bg-bg_profile bg-purple "
            />
          </div>

          <div className="slideContainer w-full flex flex-col md:px-8 lg:px-14 xl:px-24">
            <div className="flex justify-center lg:h-[100vh] lg:pb-32 ">
              <div className="flex w-full ">
                <div className="flex flex-col   lg:items-center justify-center w-full  md:gap-2 xl:gap-8 mx-8 lg:mx-1">
                  <div className=" xl:w-[40rem]">
                    <h3 className="slide-hello  font-roboto text-purple_text dark:text-[#cfcccc] text-xl md:text-3xl lg:text-[2.1rem] italic mb-2 sm:mb-10">
                      Bonjour, je suis
                    </h3>
                    <h1 className="name-gradient font-alice lg:space-x-2  text-3xl sm:text-3xl md:text-[2.8rem] xl:text-6xl mb-4 tracking-widest  font-semibold ">
                      Marion Baston
                    </h1>
                    <p className="slide-name-dev font-roboto font-medium text-purple_text  sm:mb-6   text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-2 md:mt-2 lg:mt-0  ">
                      Développeuse Web Frontend
                      {/* {bio.title_business} => appel depuis la bdd */}
                    </p>
                  </div>
                  <div className=" profile-image-mobile bio-part1 md:mx-2 text-justify slide-para font-lato z-30 text-base  sm:text-xl md:text-base xl:text-lg p-6   relative text-purple_text dark:text-[#cfcccc] mb-6">
                    <p className=" leading-7">
                      " J'aime expérimenter de nouvelles fonctionnalités, tester
                      de nouveaux concepts et relever des défis techniques pour
                      continuellement enrichir mes connaissances
                      {/* {bio.description_part1} => appel depuis la bdd */}"
                    </p>
                  </div>
                  <div className="xl:w-[43rem]   lg:w-[32rem]  flex justify-center sm:justify-start">
                    <div className=" slideLink-1  lg:mt-8 lg:mx-6 md:gap-8 ">
                      <div className="profile-image-mobile flex gap-4">
                        <Button
                          onChild
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
                          CV
                        </Button>

                        <Button
                          role="button"
                          aria-label="M'envoyer un email"
                          className=" slideLink-2 font-lato dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30  bg-purple/30  dark:hover:bg-pale_pink/40  rounded-xl p-2 text-sm  dark:text-[#cfcccc] hover:text-[#ffff] text-[#412c7a] "
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
                          onChild
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

                <div className=" profile-image-desktop-lg lg:w-96 xl:w-3/4  slide-para font-lato z-30 text-base text-justify sm:text-xl md:text-sm xl:text-lg p-6 sm:p-5  border-purple/30 rounded-2xl relative text-purple_text border-2 italic  dark:text-[#cfcccc]  ">
                  <p className=" leading-8">
                    " J'aime expérimenter de nouvelles fonctionnalités, tester
                    de nouveaux concepts et relever des défis techniques pour
                    continuellement enrichir mes connaissances "
                    {/* {bio.description_part1}" => appel depuis la bdd*/}
                  </p>
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
                      à mettre en pratique mes compétences acquises en
                      autodidacte et consolidées par la formation de
                      "Développeur fullstack web et web mobile" avec une
                      appétence pour le frontend.
                      {/* {bio.description_part2} => appel depuis la bdd */}
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
                      sites web qui offrent une excellente expérience
                      utilisateur pour tous, tout en veillant à ce qu'ils soient
                      bien positionnés sur les moteurs de recherche pour
                      atteindre un public plus large. J'apprécie le travail en
                      équipe, le souci du détail et la qualité du code.
                      {/* {bio.description_part3} => appel depuis la bdd */}
                    </p>
                  </div>
                  <div className="   md:w-3/4 lg:w-3/5 mx-6 slide-para font-lato z-30 text-base md:text-justify sm:text-xl md:text-base xl:text-lg p-6 sm:p-5 dark:border-2 md:border-none   border-purple/30 relative text-purple_text dark:text-[#cfcccc] shadow-purple/80 dark:shadow-purple/40 shadow-sm rounded-xl  ">
                    <p>
                      Je reste à l'écoute de toutes les opportunités et
                      enthousiaste à l'idée de mettre en pratique mes
                      compétences au sein d'une entreprise dynamique. Si votre
                      équipe recherche une{" "}
                      <span className=" text-[#a066f7] font-semibold dark:text-[#ab72ff]  text-lg lg:text-xl">
                        {" "}
                        développeuse web React.js / Next.js
                      </span>
                      , je serais honorée de contribuer à des projets innovants
                      au sein de votre organisation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
