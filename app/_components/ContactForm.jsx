"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [lastname, setLatsName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [acceptedPrivacyPolicy, setAcceptedPrivacyPolicy] = useState(false);

  const handleSubmitFormContact = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      if (!acceptedPrivacyPolicy) {
        toast.warning("Veuillez accepter la politique de confidentialté.");
        setIsLoading(false);
        return;
      } else {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/email/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              lastname,
              firstname,
              email,
              message,
              company,
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (data && data.message) {
          const promise = () =>
            new Promise((resolve) =>
              setTimeout(() => {
                resolve({ name: "Sonner" });
              }, 400)
            );

          toast.promise(promise, {
            success: (data) => {
              return `Votre message à bien été envoyé !`;
            },
            error: "Error",
          });

          setLatsName("");
          setFirstname("");
          setEmail("");
          setMessage("");
          setAcceptedPrivacyPolicy(false);
        } else {
          toast.error("Une erreur s'est produite ! Veuillez réessayer !");
        }
      }
    } catch (error) {
      console.error("Error :", error);
    } finally {
      setIsLoading(false);
    }
  };

  const capitalizeFirstLetter = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  return (
    <div className=" text-txt_black dark:text-white  ">
      <Card className="w-[23rem] md:w-[31rem]  border tracking-wide ">
        <form onSubmit={handleSubmitFormContact}>
          <CardHeader>
            <CardDescription className=" text-[1rem] font-medium ">
              Remplissez le formulaire ci-dessous et je vous répondrai dans les
              plus brefs délais.{" "}
              <span className=" text-[0.7rem]">(Mentions obligatoires *)</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex  flex-col gap-3 ">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="space-y-2 ">
                <Label
                  htmlFor="first-name"
                  className="text-text_color text-[1rem] "
                >
                  Nom*
                </Label>
                <Input
                  id="first-name"
                  placeholder="Votre nom"
                  required
                  value={lastname}
                  onChange={(e) =>
                    setLatsName(capitalizeFirstLetter(e.target.value))
                  }
                  className="custom-placeholder border-purple/40"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="last-name"
                  className="text-text_color text-[1rem] "
                >
                  Prénom*
                </Label>
                <Input
                  id="last-name"
                  placeholder="Votre prénom"
                  required
                  value={firstname}
                  onChange={(e) =>
                    setFirstname(capitalizeFirstLetter(e.target.value))
                  }
                  className="custom-placeholder border-purple/40"
                />
              </div>
            </div>
            <div className=" ">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-text_color text-[1rem] ">
                  E-mail*
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Votre e-mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="custom-placeholder border-purple/40 "
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-text_color text-[1rem] ">
                Message*
              </Label>
              <Textarea
                id="message"
                placeholder="Votre message"
                className="custom-placeholder border-purple/40 min-h-[120px] "
                required
                value={message}
                onChange={(e) =>
                  setMessage(capitalizeFirstLetter(e.target.value))
                }
              />
            </div>
            <div>
              <Label className=" flex items-start ">
                <Input
                  type="checkbox"
                  id="acceptedPrivacyPolicy"
                  checked={acceptedPrivacyPolicy}
                  onChange={(e) => setAcceptedPrivacyPolicy(e.target.checked)}
                  className=" w-12 "
                />
                <span className=" text-[0.87rem] ml-2">
                  * En soumettant ce formulaire, j'accepte que mes données
                  personnelles soient utilisées pour me recontacter. Aucun autre
                  traitement ne sera effectué avec mes informations.
                  <Link
                    href={"/legal-notice"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:text-blue-700 italic"
                  >
                    &nbsp;Politique de confidentialité
                  </Link>
                </span>
              </Label>
            </div>
          </CardContent>
          <div
            style={{
              position: "absolute",
              left: "-9999px",
              top: "auto",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
          >
            <label htmlFor="company">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              autoComplete="off"
              aria-hidden="true"
              tabIndex={-1}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <CardFooter>
            <Button
              type="submit"
              disabled={isLoading}
              className=" bg-purple text-white rounded-full py-2 px-4 shadow-inner shadow-free_grey hover:text-free_purple dark:text-free_grey hover:bg-purple/10 duration-300  text-[1rem] ml-auto gap-2"
            >
              {isLoading ? (
                <Loader className="animate-spin" size="16" />
              ) : (
                <Send size={16} />
              )}
              Envoyer
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
