"use client";

import { Download, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import myPhoto from "../../public/images/photo1.png";

import Link from "next/link";
export default function AboutMe() {
  const emailAddress = "marionbaston84@gmail.com";

  return (
    <div className=" ">
      <div className="  flex flex-col items-center justify-center pt-20 pb-8 xl:py-20 to-[#f0f9ff] bg-gradient-to-t from-[#fae8ff] to-transparent shadow-md">
        <div className="slideContainer  md:w-3/4 flex flex-col  ">
          <div className="grid grid-cols-14 grid-rows-">
            <div className=" col-start-1 col-span-11 row-start-2 row-span-6 mx-6">
              <h3 className="slide-hello text-base sm:text-2xl sm:mb-3  ">
                Bonjour, je suis
              </h3>
              <h1 className="slide-name text-purple font-semibold text-2xl md:text-5xl lg:text-6xl sm:mb-2 ">
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
              <p className=" slide-name-dev text-xl font-semibold md:text-3xl lg:text-4xl mb-4 sm:mb-6">
                Développeuse Web Junior
              </p>
              <div className="slide-para z-30 text-sm md:text-base md:text-md  md:p-8 bg-white/30 backdrop-blur-lg drop-shadow-lg rounded-2xl relative ">
                <p className="">
                  Passionnée de développement web et autodidacte, j'ai acquis de
                  nombreuses compétences durant ma formation à la Wild Code
                  School, en Juillet 2023. Formation validée par l'obtention du
                  titre de{" "}
                  <span className="text-purple sm:text-xl font-medium">
                    "Développeur web et web mobile"
                  </span>{" "}
                  de niveau 5 reconnu par le RNCP, en Septembre 2023. Je suis
                  résolument engagée dans une démarche d'amélioration continue,
                  cherchant toujours à progresser davantage.
                </p>
                <p className="mt-5">
                  Mes objectifs de développement sont orientés vers
                  l'accessibilité et l'optimisation pour les moteurs de
                  recherche (SEO). Je suis déterminée à concevoir des
                  expériences web inclusives et à créer des sites web qui
                  offrent une excellente expérience utilisateur pour tous, tout
                  en veillant à ce qu'ils soient bien positionnés sur les
                  moteurs de recherche pour atteindre un public plus large.
                  J'apprécie le travail en équipe, le souci du détail et la
                  qualité du code.
                </p>
              </div>
            </div>
            <div className=" slide-picture picture z-0 lg:mt-12  xl:mt-8 lg:py-3 xl:py-3 lg:px-7 xl:px-6 col-start-8 col-span-3 row-start-1 row-span-3 md:col-start-9 md:col-span-3 md:row-start-1 md:row-span-3 lg:col-start-10 lg:col-span-3 lg:row-start-1 lg:row-span-5  2xl:col-start-10 2xl:col-span-4 2xl:row-start-1 2xl:row-span-4  lg:to-[#fae8ff]/20 lg:bg-gradient-to-t lg:from-[#c173d6]/60 to-transparent">
              <Image
                src={myPhoto}
                alt="ma photo de profil"
                width={300}
                className="  w-48 2xl:w-60 mb-9 shadow-lg border-2 border-[#c173d6]/60 lg:shadow-none lg:border-none  rounded-full  lg:rounded-r-full lg:rounded-l-3xl lg:ml-4 "
              />
            </div>
          </div>
          <div className=" slideLink-1 mt-8 flex justify-center lg:justify-start gap-3 md:gap-6 ">
            <Button
              type="button"
              asChild
              className="slideLink bg-[#000] rounded-xl text-white hover:bg-[#000] transition hover:scale-110 duration-300 p-2"
            >
              <Link
                href="/MarionBaston.pdf"
                target="_blank"
                aria-labelledby="download-cv"
                className="flex gap-1 md:gap-2 text-[10px]  sm:text-sm text-center "
              >
                <Download size="16" id="download-cv" />
                Télécharger mon CV
              </Link>
            </Button>
            <Button
              type="button"
              className="slideLink-2 bg-[#efc0f0c0] hover:bg-[#baa8bbc0] rounded-xl p-2 "
            >
              <Link
                href={`mailto:${emailAddress}`}
                aria-labelledby="contact-me"
                className="flex gap-1 md:gap-2 text-[10px] text-center sm:text-sm  "
              >
                <MessagesSquare size="16" id="contact-me" />
                Contactez-moi
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
