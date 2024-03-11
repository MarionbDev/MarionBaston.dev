"use client";

import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { signInUser } from "@/services/auth.services";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2, LogIn } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as yup from "yup";

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
  const [showPassword, setShowPassword] = useState(false);

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
                      autoComplete="username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage aria-live="polite" />
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
                    <Input
                      placeholder="********"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div
              className=" cursor-pointer hover:underline"
              onClick={() => setShowPassword(!showPassword)}
            >
              <p className=" text-sm italic">Afficher le mot de passe</p>
            </div>
          </CardContent>
          <CardFooter className="justify-center">
            <Button
              role="button"
              aria-label="se connecter"
              disabled={isLoading}
              className="gap-3 bg-purple hover:bg-purple/70 dark:bg-purple/60 rounded-lg dark:hover:bg-pale_pink/20  text-white"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size="16" />
              ) : (
                <LogIn size="16" />
              )}
              Se connecter
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
