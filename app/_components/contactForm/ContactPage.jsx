import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "../ContactForm";

export default function ContactPage() {
  return (
    <div className="flex justify-center">
      <div className="font-poppins  mt-16  w-72 md:w-3/4 xl:w-3/5  ">
        <Card className="dark:shadow-purple/80 dark:shadow-inner shadow-none dark:bg-purple/10 dark:border-purple/50 border-none  rounded-xl  text-purple dark:text-[#ffffff] ">
          <CardHeader>
            <CardTitle className=" text-[2.5rem] mb-6 text-center">
              Prêt à travailler ensemble ou à discuter d'opportunités ?
            </CardTitle>
          </CardHeader>
          <CardContent className=" flex justify-center">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
