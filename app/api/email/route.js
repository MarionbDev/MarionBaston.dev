import EmailTemplate from "@/app/_components/emailTemplate/EmaileTemplate";
import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";
// Fonction POST pour gérer l'envoi d'email
export const POST = async (request) => {
  try {
    // Parse les données du formulaire
    const body = await request.json();
    const { firstname, lastname, email, message, company } = body;

    const EMAIL_TO = "contact@marionbaston.fr";

    if (!EMAIL_TO) {
      throw new Error(
        `L'adresse email de destination ${EMAIL_TO} est introuvable.`
      );
    }

    // console.log("Envoi de l'email vers:", EMAIL_TO);

    // 🛡️ Anti-spam : honeypot
    if (company && company.trim() !== "") {
      return NextResponse.json({ error: "Spam détecté" }, { status: 403 });
    }

    // 🛠️ Validation simple de l'email
    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // Envoi de l'email via Resend
    const { error } = await resend.emails.send({
      from: " marionbaston.fr <noreply@marionbaston.fr>",
      to: [EMAIL_TO],
      subject: "Vous avez reçu un nouveau message",
      react: EmailTemplate({ firstname, lastname, email, message }),
    });

    if (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      return NextResponse.json(
        { message: "Erreur lors de l'envoi de l'email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email envoyé avec succès." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur dans la requête POST:", error);
    return NextResponse.json(
      { message: "Une erreur est survenue." },
      { status: 500 }
    );
  }
};
