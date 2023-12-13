"use client";

import { signInUser } from "@/services/auth.services";
import { Button } from "@/components/ui/button";
import { LogIn, Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useRouter } from "next-nprogress-bar";

const loginFormSchema = yup.object().shape({
  email: yup
    .string("Vous devez renseigner un email")
    .email("Un email valide est requis")
    .required("Un email valide est requis"),
  password: yup
    .string("Vous devez renseigner un mot de passe")
    .matches(
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      "Le mot de passe doit comporter au moins 8 caractères, une majuscule, une minuscule et un chiffre."
    )
    .required("Un mot de passe est requis"),
});

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const form = useForm({ resolver: yupResolver(loginFormSchema) });

  const handleLoginFormSubmit = async (values) => {
    try {
      setIsLoading(true);
      await signInUser(values);
      router.push("/admin");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      if (error.error_description) {
        toast.error(error.description);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleLoginFormSubmit)}
        className="h-screen w-screen flex justify-center items-center"
      >
        <Card>
          <CardHeader>
            <CardTitle>Connexion</CardTitle>
            <CardDescription>
              Se connecter à l'espace d'administration.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@example.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="justify-center">
            <Button
              disabled={isLoading}
              className="gap-3 bg-purple hover:bg-purple/70 dark:bg-purple/60 rounded-lg dark:hover:bg-pale_pink/20  text-white"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size="16" />
              ) : (
                <LogIn size="16" />
              )}
              Login
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
