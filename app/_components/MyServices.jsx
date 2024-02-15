import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { MessagesSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/images/arrow.svg";
import logoCode from "../../public/images/logo-code.svg";

export default function MyServices() {
  const emailAddress = "marionbaston84@gmail.com";

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-3/4 sm:w-10/12 ">
        <h2 className="font-roboto text-2xl font-semibold  sm:text-3xl w-full text-center lg:text-start border-b-2 mb-10 pb-2 border-purple ">
          Mes services
        </h2>
        <div className="flex flex-col items-center mt-2 ">
          <div className="font-lato flex flex-col md:flex-row items-center justify-around gap-10">
            <div className="dark:bg-purple/10 dark:shadow-purple/50 shadow-purple/40 shadow-md rounded-xl border-none w-72 h-72 px-6 py-4 gap-6 flex flex-col items-center justify-around">
              <h2 className=" text-base lg:text-lg text-center">
                DEVELOPPEMENT WEB FRONTEND
              </h2>
              <Image
                src={logoCode}
                alt="Logo d'un chevron"
                width={90}
                className="w-20 xl:w-28"
              />
              <HoverCard className=" flex flex-col items-center justify-centers ">
                <HoverCardTrigger asChild>
                  <Button
                    role="button"
                    variant="link"
                    className="dark:bg-purple/10 dark:shadow-purple/30 dark:shadow-inner  shadow-lg gap-4 w-full "
                  >
                    <p className=" text-sm">Voir plus</p>
                    <Image
                      src={arrow}
                      alt="Flèche"
                      width={24}
                      className="w-5"
                    />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="xl:w-[30rem] xl:h-44 overflow-y-scroll xl:translate-x-[21rem] xl:-translate-y-24 dark:shadow-inner dark:shadow-purple/60 shadow-purple/40 shadow-md border-none bg-purple/20 backdrop-blur-3xl drop-shadow-lg rounded-lg  ">
                  <div className="flex justify-between space-x-4">
                    <div className=" space-y-1 ">
                      <h4 className=" text-sm lg:text-base  font-semibold">
                        Developpement Web FrontEnd
                      </h4>
                      <p className=" text-sm mt-8">
                        Je développe l'interface visible de votre site web à
                        partir d'une maquette.
                      </p>
                      <ul className=" text-sm mt-8 list-disc pl-4 gap-1 flex flex-col">
                        <li>Interfaces utilisateurs interactives</li>
                        <li>
                          Accessibilité et amélioration de l'expérience
                          utilisateur (UX)
                        </li>
                        <li>Optimisation SEO</li>
                        <li>
                          Site web adaptable à tous les écrans (mobiles,
                          tablettes, ordinateurs)
                        </li>
                      </ul>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="font-lato  dark:bg-purple/10 dark:shadow-purple/50 shadow-purple/40 shadow-md rounded-xl border-none w-72 h-72 px-6 py-4 gap-6 flex flex-col items-center justify-around">
              <h2 className="text-base  lg:text-lg text-center">
                DEVELOPPEMENT WEB BACKEND
              </h2>
              <Image
                src={logoCode}
                alt="Logo d'un chevron"
                width={90}
                className="w-20 xl:w-28"
              />
              <HoverCard className="flex flex-col items-center justify-centers ">
                <HoverCardTrigger asChild>
                  <Button
                    role="button"
                    variant="link"
                    className="dark:bg-purple/10  dark:shadow-purple/30 dark:shadow-inner shadow-lg gap-4 w-full "
                  >
                    <p className=" text-sm">Voir plus</p>

                    <Image src={arrow} alt="arrow" width={24} className="w-5" />
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="xl:w-[30rem] xl:h-44 overflow-y-scroll xl:translate-x-[21rem] xl:-translate-y-24 dark:shadow-inner dark:shadow-purple/60 shadow-purple/40 shadow-md border-none bg-purple/20 backdrop-blur-3xl drop-shadow-lg rounded-lg ">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm lg:text-base  font-semibold">
                        Developpement Web BackEnd
                      </h4>
                      <div className="text-sm mt-8 ">
                        <p>
                          Je réponds au cahier des charges en développant toutes
                          les fonctionnalités invisibles à l'utilisateur et
                          nécessaire au fonctionnement de l'interface.
                        </p>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="font-lato mt-10 sm:mt-28 w-72 xl:w-3/5  ">
            <Card className="dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/10 shadow-purple/40 shadow-xl border-none bg-purple/90 rounded-xl  text-[#ffffff] ">
              <CardHeader>
                <CardTitle className=" text-lg sm:text-xl md:text-2xl text-center">
                  Prêt à travailler ensemble ou à discuter d'opportunités ?
                </CardTitle>
                <CardDescription className=" text-xl py-3 text-center">
                  Contactez-moi !
                </CardDescription>
              </CardHeader>
              <CardContent className=" flex justify-center">
                <Button
                  role="button"
                  className=" dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/10 bg-[#ffffff] dark:hover:bg-pale_pink/20  hover:bg-[#baa8bbc0] rounded-xl p-2 text-[#313030] hover:text-[#ffff]   shadow-xl"
                >
                  <Link
                    href={`mailto:${emailAddress}`}
                    aria-labelledby="contact-me"
                    className="flex gap-1 md:gap-2 text-sm text-center sm:text-sm dark:text-white text-purple "
                  >
                    <MessagesSquare size="16" id="contact-me" />
                    C'est ici et maintenant !
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
