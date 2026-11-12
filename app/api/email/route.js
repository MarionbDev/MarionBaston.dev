import EmailTemplate from "@/app/_components/emailTemplate/EmaileTemplate";
import { resend } from "@/lib/resend";
import { NextResponse } from "next/server";

const EMAIL_TO = "contact@marionbaston.fr";
const MIN_FILL_TIME_MS = 3000; // en dessous de 3 s, c'est un robot

// Réponse "OK" factice : le robot croit que son message est passé
const fakeSuccess = () =>
  NextResponse.json({ message: "Email envoyé avec succès." }, { status: 200 });

// Détecte un lien dans le message (http://, www., ou domaine suivi d'un chemin)
const LINK_REGEX = /(https?:\/\/|www\.|\b[a-z0-9-]+\.[a-z]{2,}\/)/i;

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { firstname, lastname, email, message, company, elapsed } = body;

    // 🛡️ 1. Honeypot : réponse silencieuse
    if (company && company.trim() !== "") {
      return fakeSuccess();
    }

    // 🛡️ 2. Formulaire rempli trop vite : réponse silencieuse
    if (typeof elapsed !== "number" || elapsed < MIN_FILL_TIME_MS) {
      return fakeSuccess();
    }

    // 🛡️ 3. Pas de lien dans le message
    // (réponse explicite : un vrai visiteur peut corriger son message)
    if (LINK_REGEX.test(message || "")) {
      return NextResponse.json(
        {
          message:
            "Pour des raisons de sécurité, les liens ne sont pas acceptés dans le message.",
        },
        { status: 400 },
      );
    }

    // 🛠️ Validation des champs
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ message: "Email invalide." }, { status: 400 });
    }
    if (!firstname?.trim() || !lastname?.trim() || !message?.trim()) {
      return NextResponse.json(
        { message: "Champs obligatoires manquants." },
        { status: 400 },
      );
    }

    // Envoi de l'email via Resend
    const { error } = await resend.emails.send({
      from: "marionbaston.fr <noreply@marionbaston.fr>",
      to: [EMAIL_TO],
      replyTo: email, // "Répondre" dans ta boîte répond directement au visiteur
      subject: "Vous avez reçu un nouveau message",
      react: EmailTemplate({ firstname, lastname, email, message }),
    });

    if (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      return NextResponse.json(
        { message: "Erreur lors de l'envoi de l'email." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "Email envoyé avec succès." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Erreur dans la requête POST:", error);
    return NextResponse.json(
      { message: "Une erreur est survenue." },
      { status: 500 },
    );
  }
};
