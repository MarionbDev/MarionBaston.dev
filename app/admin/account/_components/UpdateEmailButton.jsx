import useSession from "@/app/hooks/useSession";
import { Button } from "@/components/ui/button";
import ButtonItem from "@/components/ui/buttonList/ButtonItem";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { updateUserEmail } from "@/services/auth.services";
import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2, Save } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const UpdateEmailFormSchema = yup.object().shape({
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

export function UpdateEmailButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { user, loading, refreshSession } = useSession();

  const form = useForm({ resolver: yupResolver(UpdateEmailFormSchema) });

  console.log("data user:", user);

  const handleSubmit = async (updateEmailFormValues) => {
    try {
      setIsLoading(true);
      await updateUserEmail(updateEmailFormValues.email, {
        email: user?.email,
        password: updateEmailFormValues.password,
      });
      setIsDialogOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChange = (isOpen) => {
    refreshSession();
    setIsDialogOpen(isOpen);
  };

  const handleOpen = () => setIsDialogOpen(true);

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild className="flex justify-start">
        <ButtonItem
          onClick={handleOpen}
          isLoading={loading}
          value={user?.email}
          className="shadow-none border-purple/60 border-t-0 dark:hover:bg-purple/60 "
        >
          Email
        </ButtonItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:shadow-inner dark:shadow-purple/60 shadow-purple/40 shadow-md border-none bg-purple/20 backdrop-blur-3xl drop-shadow-lg ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <DialogHeader>
              <DialogTitle>Mise à jour de l'email</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
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
                      <Input
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button
                disabled={isLoading}
                className="gap-2 dark:hover:bg-pale_pink/20  hover:bg-[#baa8bbc0] dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/20 rounded-xl"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Save size="16" />
                )}
                Sauvegarder
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
