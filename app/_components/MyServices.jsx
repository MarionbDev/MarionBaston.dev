import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessagesSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import arrow from "../../public/images/arrow.svg";
import logoCode from "../../public/images/logo-code.svg";

export default function MyServices() {
  const emailAddress = "marionbaston84@gmail.com";

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-3/4 ">
        <h2 className=" text-xl font-bold  sm:text-3xl w-full text-start border-b-2 pb-2 border-purple ">
          Mes services
        </h2>
        <p className="pt-0 md:pt-4 text-sm sm:text-base  ">
          Ce que je propose !
        </p>
        <div className="flex flex-col items-center mt-4 ">
          <div className=" shadow-purple/40 shadow-md  w-64 px-6 py-4 gap-6 flex flex-col items-center justify-center">
            <h2 className="  lg:text-lg text-center">Developpeuse FrontEnd</h2>
            <Image src={logoCode} alt="logo-code" width={90} />
            <HoverCard className="flex flex-col items-center justify-centers ">
              <HoverCardTrigger asChild>
                <Button variant="link" className=" shadow-lg gap-4 w-full ">
                  <p>Voir plus</p>
                  <Image src={arrow} alt="arrow" width={24} />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-96  translate-x-72 -translate-y-20 shadow-purple/40 shadow-md border-none bg-purple/50 backdrop-blur-sm drop-shadow-lg rounded-lg ">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="lg:text-base  font-semibold">
                      Developpeuse FrontEnd
                    </h4>
                    <ul className=" lg:text-sm mt-8">
                      <li>Responsive Web Design</li>
                      <li>Interfaces utilisateurs interactives</li>
                      <li>Optimisation SEO</li>
                      <li>
                        Accessibilité et amélioration de l'expérience
                        utilisateur (UX)
                      </li>
                    </ul>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="  mt-24 w-3/5  ">
            <Card className="shadow-purple/40 shadow-xl border-none bg-purple/90 rounded-xl  text-[#ffffff] ">
              <CardHeader>
                <CardTitle>
                  Prêt à démarrer un projet ou à discuter d'opportunités ?
                </CardTitle>
                <CardDescription className=" text-base py-3">
                  Contactez-moi dès maintenant pour discuter de vos idées et
                  besoins.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  type="button"
                  className="bg-[#ffffff]  hover:bg-[#baa8bbc0] rounded-xl p-2 text-[#313030] hover:text-[#ffff]  "
                >
                  <Link
                    href={`mailto:${emailAddress}`}
                    aria-labelledby="contact-me"
                    className="flex gap-1 md:gap-2 text-[10px] text-center sm:text-sm text-purple"
                  >
                    <MessagesSquare size="16" id="contact-me" />
                    Contactez-moi
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