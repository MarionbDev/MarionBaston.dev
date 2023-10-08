"use client";

import { Download, MessagesSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import myPhoto from "../../public/images/myPicture.png";

import Link from "next/link";
export default function AboutMe() {
  const emailAddress = "marionbaston84@gmail.com";

  return (
    <>
      <div
        className="text flex flex-col items-center justify-center py-6 to-[#f3def3c0] bg-gradient-to-t from-[#FFFFFF] to-transparent"
        id="aboutme"
      >
        <div className="w-3/4 ">
          <div className="grid grid-cols-14 grid-rows-">
            <div className=" col-start-1 col-span-11 row-start-2 row-span-6 ">
              <h3 className="text-base sm:text-2xl mb-3 ">Bonjour, je suis</h3>
              <h2 className="text-purple font-semibold text-2xl sm:text-6xl mb-2">
                Marion Baston
              </h2>
              <p className="text-xl font-semibold sm:text-4xl mb-6">
                Développeuse Web Junior
              </p>
              <div className="text-base md:text-md p-8 border bg-white/50 backdrop-blur-lg drop-shadow-sm rounded-2xl relative ">
                <p>
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
            <div className=" col-start-10 col-span-4 row-start-1 row-span-6 ">
              <Image
                className=" rounded-full w-48 2xl:w-60 shadow-2xl "
                src={myPhoto}
                alt="ma photo de profil"
                width={300}
              />
            </div>
          </div>
          <div className="mt-8 flex gap-6">
            <Button className="gap-2" type="button" asChild id="download-cv">
              <Link
                href="/MarionBaston.pdf"
                target="_blank"
                className="flex gap-2"
                aria-labelledby="download-cv"
              >
                <Download size="16" />
                Télécharger mon CV
              </Link>
            </Button>
            <Link href={`mailto:${emailAddress}`} aria-labelledby="contact-me">
              <Button
                className="gap-2 hover:bg-[#d18fcd]/60"
                type="button"
                variant="secondary"
                id="contact-me"
              >
                <MessagesSquare size="16" />
                Contactez-moi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
