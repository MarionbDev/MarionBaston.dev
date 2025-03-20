import { Card, CardContent, CardHeader } from "../../../components/ui/card";

export default function ProjectsFree() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="bg-free_yellow w-fit text-lg font-semibold px-1">
          Ils m'ont fait confiance
        </h1>
        <p>
          Un accompagnement structuré, du premier échange jusqu’à la mise en
          ligne, pour vous assurer un site web efficace et optimisé.
        </p>
      </div>
      <Card className="bg-free_purple border-none text-free_grey">
        <CardHeader className="mx-auto w-fit ">Image</CardHeader>
        <CardContent>
          Création d’un site web intuitif permettant aux visiteurs de découvrir
          facilement les hébergements, leurs tarifs et disponibilités, ainsi que
          les activités de la région. L’objectif : une présentation claire et
          attrayante des offres, avec une prise de contact simplifiée pour
          faciliter les réservations. Grâce à une interface d’administration
          intuitive, le client gère son contenu en toute autonomie et optimise
          sa visibilité pour attirer plus de visiteurs.
        </CardContent>
      </Card>
    </>
  );
}
