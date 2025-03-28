import CardSupport from "./CardSupport";

export default function SupportFree() {
  return (
    <>
      <section className="flex flex-col gap-6">
        <h1 className="bg-free_yellow w-fit text-xl md:text-[2rem] font-semibold px-1">
          Un accompagnement personnalisé
        </h1>
        <p className=" ">
          Un suivi complet, même si vous n’êtes pas à l’aise avec le digital.
        </p>
      </section>
      <section className="flex justify-around flex-col flex-wrap md:flex-row gap-10 mx-auto mt-8">
        <CardSupport
          title="Echange réguliers"
          description="Suivi par maiol, visio, téléphone, selon vos préférence."
        />
        <CardSupport
          title="Formation simplifiée"
          description="Guide PDF ou vidéo pour vous aider à gérer votre site en toute autonomie."
        />
        <CardSupport
          title="Conseils personnalisés"
          description="Recommandations pour améliorer votre site et bosster votre visibilité."
        />
      </section>
    </>
  );
}
