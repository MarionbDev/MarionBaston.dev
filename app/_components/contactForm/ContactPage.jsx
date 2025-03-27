import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import ContactForm from "../ContactForm";

export default function ContactPage() {
  const sectionTitle = {
    hide: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
      },
    },
  };
  const sectionText = {
    hide: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.4,
      },
    },
  };
  return (
    <div className="flex justify-center">
      <Card className="border-0 rounded-none pt-20 border-t-2 border-purple/50 shadow-none  text-purple dark:text-[#ffffff] ">
        <motion.section
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={sectionTitle}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CardHeader>
              <CardTitle className=" text-[2rem] md:text-[2.5rem] mb-6 text-center name-form-gradient ">
                Envie de collaborer ?
              </CardTitle>
              <span className="wave-form relative flex justify-center "></span>
            </CardHeader>
          </motion.div>
        </motion.section>
        <CardContent className=" flex flex-col items-center justify-center ">
          <motion.section
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={sectionText}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {" "}
              <div className="font-poppins text-txt_black dark:text-white pt-2 md:pt-8 mb-12 md:mb-16 text-[1rem] md:text-[1.2rem] xl:px-10   flex flex-col items-center   gap-4 ">
                <p className="text-center text-pretty">
                  Je suis à la recherche d'une{" "}
                  <span className="relative inline-block px-2 font-bold text-[1.1rem] md:text-[1.5rem] text-purple">
                    <span className="absolute inset-0 h-[82%] top-1/2 -translate-y-1/2  -rotate-2 bg-free_yellow -z-10 "></span>
                    opportunité
                  </span>{" "}
                  en CDI en tant que{" "}
                  <span className="relative inline-block px-2 font-bold text-[1.1rem] md:text-[1.5rem] text-purple">
                    <span className="absolute inset-0 h-[82%] top-1/2 -translate-y-1/2  -rotate-2 bg-free_yellow -z-10 "></span>
                    Développeuse Frontend
                  </span>{" "}
                </p>
                <p>Envie d'en savoir plus sur mon profil ? Contactez-moi !</p>
              </div>
            </motion.div>
          </motion.section>
          <motion.section
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={sectionText}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </motion.section>
        </CardContent>
      </Card>
    </div>
  );
}
