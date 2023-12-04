"use client";

import useSession from "@/app/hooks/useSession";
import ButtonList from "@/components/ui/buttonList/index";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UpdateEmailButton } from "./_components/UpdateEmailButton";
import ButtonItem from "@/components/ui/buttonList/ButtonItem";

export default function AccountPage() {
  const { user } = useSession();

  console.log("user", user);

  return (
    <div className="container mx-auto px-44 py-8 flex flex-col space-y-8">
      <h1 className="text-xl font-bold">Compte</h1>
      <Card>
        <CardHeader>
          <CardTitle>Informations personnelles</CardTitle>
          <CardDescription>Gérer vos informations personnels</CardDescription>
        </CardHeader>
        <CardContent>
          <ButtonList>
            <ButtonItem>Username</ButtonItem>
            <ButtonItem>Bio</ButtonItem>
            <UpdateEmailButton />
            <ButtonItem>Password</ButtonItem>
          </ButtonList>
        </CardContent>
      </Card>
    </div>
  );
}
