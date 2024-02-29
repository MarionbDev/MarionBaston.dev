"use client";

import useSession from "@/app/hooks/useSession";
import ButtonItem from "@/components/ui/buttonList/ButtonItem";
import ButtonList from "@/components/ui/buttonList/index";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect } from "react";
import { UpdateBioButton } from "./_components/UpdateBioButton";
import { UpdateEmailButton } from "./_components/UpdateEmailButton";
import { UpdatePasswordButton } from "./_components/UpdatePasswordButton";

export default function AccountPage() {
  const { user, refreshSession, loading, error } = useSession();

  console.log("user", user);

  useEffect(() => {
    refreshSession();
  }, []);

  if (loading) {
    return <p>Chargement en cours...</p>; // Peut-être afficher un spinner ou un message de chargement
  }

  if (error) {
    return <p>Une erreur s'est produite : {error.message}</p>; // Afficher un message d'erreur
  }

  return (
    <div className="container mx-auto px-44 py-8 flex flex-col space-y-8">
      <h1 className="text-xl font-bold">Compte</h1>
      <Card className="dark:shadow-inner dark:shadow-purple/60 shadow-purple/40 shadow-md border-none bg-purple/20 backdrop-blur-3xl drop-shadow-lg">
        <CardHeader>
          <CardTitle>Informations personnelles</CardTitle>
          <CardDescription>Gérer vos informations personnels</CardDescription>
        </CardHeader>
        <CardContent>
          <ButtonList>
            <ButtonItem className=" border-purple/60 dark:hover:bg-purple/60">
              Nom
            </ButtonItem>

            <UpdateBioButton />
            <UpdateEmailButton />
            <UpdatePasswordButton />
          </ButtonList>
        </CardContent>
      </Card>
    </div>
  );
}
