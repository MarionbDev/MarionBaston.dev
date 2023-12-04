import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import useSession from "@/app/hooks/useSession";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ButtonItem from "@/components/ui/buttonList/ButtonItem";

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
  console.log("UpdateEmailButton rendered");
  const { user, loading } = useSession();

  const form = useForm({ resolver: yupResolver(UpdateEmailFormSchema) });

  return (
    <Dialog>
      <DialogTrigger asChild className="flex justify-start">
        <ButtonItem
          isLoading={loading}
          value={user?.email}
          className="shadow-none border border-t-0"
        >
          Email
        </ButtonItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <Form {...form}>
          <DialogHeader>
            <DialogTitle>Mise à jour de l'email</DialogTitle>
            <DialogDescription></DialogDescription>
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
                    <Input placeholder="********" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <DialogFooter>
            <Button>Save changes</Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
