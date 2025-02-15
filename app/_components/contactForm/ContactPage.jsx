import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "../ContactForm";

export default function ContactPage() {
  return (
    <div className="flex justify-center">
      <Card className="border-none  text-purple dark:text-[#ffffff] ">
        <CardHeader>
          <CardTitle className=" text-[2rem] md:text-[2.5rem] mb-6 text-center">
            Envie de collaborer ?
          </CardTitle>
          <span className="wave-form relative flex justify-center "></span>
        </CardHeader>

        <CardContent className=" flex flex-col items-center justify-center ">
          <div className="font-poppins text-txt_black dark:text-white pt-2 md:pt-8 mb-12 md:mb-16 text-[1rem] md:text-[1.2rem] xl:px-10   flex flex-col items-center  gap-4 ">
            <p>
              Je suis à la recherche d'une{" "}
              <span className="font-bold text-[1.3rem] md:text-[1.5rem] text-purple dark:text-[#d29aec]">
                opportunité{" "}
              </span>
              en CDD, CDI en tant que{" "}
              <span className="font-bold text-[1.3rem] md:text-[1.5rem] text-purple dark:text-[#d29aec]">
                Développeuse Web.
              </span>
            </p>
            <p>Envie d'en savoir plus sur mon profil ? Contactez-moi !</p>
          </div>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  );
}
