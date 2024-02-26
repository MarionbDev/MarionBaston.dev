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

  const isLoading = Object.keys(bio).length === 0;

  const adminBio = async () => {
    try {
      const data = await getBio();
      console.log("adminBio data:", data);
      if (data && data.length > 0) {
        setBio(data[0]);
        setTitleBusiness(data[0]?.title_business || "");
        setDescriptionPart1(data[0]?.description_part1 || "");
        setDescriptionPart2(data[0]?.description_part2 || "");
        setDescriptionPart3(data[0]?.description_part3 || "");
      } else {
        console.error("Error fetching admin bio");
      }
    } catch (error) {
      console.error(`Error fetching admin bio: ${error.message}`);
    }
  };

  useEffect(() => {
    // console.log("Inside useEffect");
    adminBio();
  }, []);

  return (
    <div className="flex  sm:mt-0  ">
      {" "}
      {isLoading ? (
        // Affiche un indicateur de chargement ou tout autre chose
        <p className=" h-screen">Chargement...</p>
      ) : (
        <div className="dark:bg-dark_black  text-font flex flex-col items-center justify-center pt-4 md:pt-20 xl:pt-12  pb-8  md:px-0 xl:py-20 bg-[#ffffff]">
          <div className="slideContainer  md:w-3/4 flex flex-col items-center lg:items-start ">
            <div className="grid grid-cols-14 grid-rows-">
              <div className=" col-start-1 col-span-11 row-start-2 lg:row-start-2 row-span-6 mx-6">
                <h3 className="slide-hello font-roboto text-xl md:text-2xl  sm:mb-3   ">
                  Bonjour, je suis
                </h3>
                <h1 className="slide-name font-alice text-purple  text-3xl sm:text-4xl lg:text-6xl mt-3 md:mt-0 ">
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
                <p className=" slide-name-dev font-roboto font-medium  text-2xl sm:text-3xl lg:text-4xl mt-2 md:mt-2 lg:mt-0 mb-10 sm:mb-6 ">
                  {bio.title_business}
                </p>

                <div className="dark:bg-purple/20   slide-para font-lato z-30 text-base text-justify sm:text-xl md:text-base p-6 sm:p-5  bg-white/30  backdrop-blur-lg drop-shadow-lg rounded-2xl relative ">
                  <p className=" leading-7">{bio.description_part1}</p>
                </div>
              </div>

              <div className=" slide-picture picture  pr-1  shadow-[#ad75c7da] shadow-md z-0  mt-0  mb-10 ml-10 md:mt-0  lg:mt-12  xl:mt-8 lg:py-3 xl:py-3 lg:px-7 xl:px-6 col-start-7 col-span-4 row-start-1 row-span-2 md:col-start-9 md:col-span-3 md:row-start-1 md:row-span-3 lg:col-start-10 lg:col-span-3 lg:row-start-1 lg:row-span-5  2xl:col-start-10 2xl:col-span-4 2xl:row-start-1 2xl:row-span-4  to-[#fae8ff]/20 bg-gradient-to-t from-purple to-transparent   ">
                <Image
                  src={myPhoto}
                  alt="ma photo de profil"
                  width={300}
                  className="  md:w-full 2xl:w-60 mb-9 lg:shadow-none lg:border-none  rounded-full  lg:rounded-r-full lg:rounded-l-3xl lg:ml-4  dark:brightness-75 "
                />
              </div>
            </div>
            <div className="xl:grid xl:grid-cols-2 ">
              <div className=" mx-6 py-6 mt-4  gap-10">
                <div className="  flex items-center   dark:bg-purple/20 w  slide-para font-lato z-30 text-base text-justify  sm:text-xl md:text-base p-6 sm:p-4  bg-white/30  backdrop-blur-lg drop-shadow-lg rounded-2xl relative ">
                  <p className="">{bio.description_part2}</p>
                </div>{" "}
              </div>
              <div className="mx-6 mt-6 flex items-center ">
                <div className=" flex  dark:bg-purple/20   slide-para font-lato z-30 text-base text-justify   sm:text-xl md:text-base p-6 sm:p-4  bg-white/30  backdrop-blur-lg drop-shadow-lg rounded-2xl relative ">
                  <p className="">{bio.description_part3}</p>
                </div>
              </div>
            </div>

            <div className=" slideLink-1 mt-8 flex justify-center flex-col  md:flex-row lg:justify-start w-2/4  md:w-auto lg:mx-6 gap-4 md:gap-8 ">
              <Button
                onChild
                onClick={downloadCV}
                role="button"
                aria-label="Télécharger mon CV"
                className="slideLink font-lato dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30 bg-purple/80   rounded-xl  text-white  dark:hover:bg-pale_pink/20 hover:bg-purple hover:bg-[#baa8bbc0] p-2 "
              >
                <Download
                  size="16"
                  id="download-cv"
                  alt="icône de téléchargement"
                />
                Télécharger mon CV
              </Button>
              <Button
                role="button"
                aria-label="M'envoyer un email"
                className="slideLink-2 font-lato dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30 dark:text-white bg-purple/30  dark:hover:bg-pale_pink/20 hover:bg-[#baa8bbc0] rounded-xl p-2 text-sm  text-[#313030] hover:text-[#ffff]   "
              >
                <MessagesSquare size="16" id="contact-me" className="mr-2" />
                <Email text="Contactez - moi" />
              </Button>
              <Email />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
