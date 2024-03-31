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
    <div className="  ">
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
        <div className="flex flex-col items-center text-font pt-4 md:pt-32 pb-8  md:px-0 xl:py-20   ">
          <div className="profile-image-mobile flex justify-center rounded-full w-48 mt-20  mb-6 ">
            <Image
              src={myPhoto}
              alt="ma photo de profil"
              width={400}
              className="  rounded-full  dark:brightness-75 dark:bg-dark_bg_profile bg-bg_profile bg-purple "
            />
          </div>
          <div className="slideContainer w-full flex flex-col lg:px-20">
            <div className="flex justify-center lg:h-[100vh] lg:pb-32 ">
              <div className="flex w-full ">
                <div className="flex flex-col  lg:items-center justify-center w-full  md:gap-2 xl:gap-8 mx-8 lg:mx-1">
                  <div className=" ">
                    <h3 className="slide-hello font-roboto text-purple_text dark:text-[#dfd0cb] text-xl md:text-3xl lg:text-[2.2rem] sm:mb-10">
                      Bonjour, je suis
                    </h3>
                    <h1 className="slide-name font-alice text-purple  lg:space-x-2  text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-4">
                      <span>M</span>
                      <span>a</span>
                      <span>r</span>
                      <span>i</span>
                      <span>o</span>
                      <span>n</span>&nbsp;
                      <span>B</span>
                      <span>a</span>
                      <span>s</span>
                      <span>t</span>
                      <span>o</span>
                      <span>n</span>
                    </h1>
                    <p className="slide-name-dev font-roboto font-medium text-purple_text dark:text-[#dfd0cb]  text-2xl sm:text-3xl lg:text-4xl mt-2 md:mt-2 lg:mt-0 mb-10 sm:mb-6 ">
                      {bio.title_business}
                    </p>
                  </div>

                  <div className=" slideLink-1 lg:mt-8 flex justify-start  lg:mx-6 gap-4 md:gap-8 ">
                    <div className="profile-image-mobile flex gap-4">
                      <Button
                        onChild
                        onClick={downloadCV}
                        role="button"
                        aria-label="Télécharger mon CV"
                        className="slideLink font-lato dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30 bg-purple/80   rounded-xl  dark:text-[#dfd0cb]  dark:hover:bg-pale_pink/20 hover:bg-purple hover:bg-[#baa8bbc0] p-2 gap-2 px-4 "
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
                        className=" slideLink-2 font-lato dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30  bg-purple/30  dark:hover:bg-pale_pink/20 hover:bg-[#baa8bbc0] rounded-xl p-2 text-sm  dark:text-[#dfd0cb] hover:text-[#ffff]   "
                      >
                        <MessagesSquare
                          size="16"
                          id="contact-me header"
                          className="mr-2"
                        />
                        <Email text="Contact" />
                      </Button>
                    </div>
                    <div className="profile-image-desktop flex gap-6">
                      <Button
                        onChild
                        onClick={downloadCV}
                        role="button"
                        aria-label="Télécharger mon CV"
                        className="slideLink font-lato dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30 bg-purple/80   rounded-xl  dark:text-[#dfd0cb]  dark:hover:bg-pale_pink/20 hover:bg-purple hover:bg-[#baa8bbc0] p-2 gap-2 px-4 "
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
                        className=" slideLink-2 font-lato dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30  bg-purple/30  dark:hover:bg-pale_pink/20 hover:bg-[#baa8bbc0] rounded-xl p-2 text-sm  dark:text-[#dfd0cb] hover:text-[#ffff]   "
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
              <div className=" flex flex-col items-center justify-center w-full gap-4">
                <div className=" profile-image-desktop rounded-full w-40 md:w-52  lg:w-48 2xl:w-72  z-0 ">
                  <Image
                    src={myPhoto}
                    alt="ma photo de profil"
                    width={400}
                    className="  lg:shadow-none lg:border-none  rounded-full  dark:brightness-75 dark:bg-dark_bg_profile bg-bg_profile bg-purple "
                  />
                </div>
                <div className=" profile-image-desktop-lg lg:w-96 xl:w-3/4 slide-para font-lato z-30 text-base text-justify sm:text-xl md:text-sm xl:text-base p-6 sm:p-5  border-purple/30 rounded-2xl relative text-purple_text border-2 italic  dark:text-[#dfd0cb]  ">
                  <p className=" leading-7">"{bio.description_part1}"</p>
                </div>
              </div>
            </div>
            <div className=" flex justify-center">
              <div className=" mt-20 sm:mt-32 md:mt-20 w-full sm:w-10/12">
                <div className="flex flex-col items-center sm:items-start gap-3 mb-1  lg:mb-6 md:mb-12  ">
                  <h2
                    className={`font-roboto  text-2xl font-semibold md:text-4xl w-4/5 sm:w-full  text-center lg:text-start  border-b-2 pb-4 sm:pb-2  border-purple `}
                  >
                    Qui suis-je ?
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex  flex-col ">
              <div className="flex flex-col items-center lg:justify-end  py-6 mt-4  gap-10">
                <div className=" profile-image-mobile bio-part1 w-3/4 mx-6 slide-para font-lato z-30 text-base text-justify sm:text-xl md:text-base xl:text-lg p-6 border-2  border-purple/30 rounded-2xl relative text-purple_text dark:text-[#dfd0cb]    ">
                  <p className=" leading-7">"{bio.description_part1}"</p>
                </div>
                <div className="  w-3/4 mx-6 slide-para font-lato z-30 text-base text-justify sm:text-xl md:text-base xl:text-lg p-6 sm:p-5 border-2  border-purple/30 rounded-2xl relative text-purple_text dark:text-[#dfd0cb]   ">
                  <p className="">"{bio.description_part2}"</p>
                </div>

                <div className="  w-3/4 mx-6 slide-para font-lato z-30 text-base text-justify sm:text-xl md:text-base xl:text-lg p-6 sm:p-5 border-2  border-purple/30 rounded-2xl relative text-purple_text dark:text-[#dfd0cb]   ">
                  <p className="">"{bio.description_part3}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
