import useSession from "@/app/hooks/useSession";
import { Button } from "@/components/ui/button";
import ButtonItem from "@/components/ui/buttonList/ButtonItem";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { getBio, insertBio, updateBio } from "@/lib/api/bio";

import { yupResolver } from "@hookform/resolvers/yup";
import { Loader2, Save } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const UpdateBioFormSchema = yup.object().shape({
  title_business: yup
    .string("Vous devez renseigner un titre")
    .required("Un titre est requis"),
  description_part1: yup
    .string("Vous devez renseigner une description")
    .required("Une description est requiss"),
  description_part2: yup
    .string("Vous devez renseigner une description")
    .required("Une description est requiss"),
  description_part3: yup
    .string("Vous devez renseigner une description")
    .required("Une description est requiss"),
});

export function UpdateBioButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bio, setBio] = useState({});
  const { user } = useSession();

  console.log("Bio before useForm:", bio);
  const form = useForm({
    resolver: yupResolver(UpdateBioFormSchema),
    defaultValues: {
      title_business: bio.title_business || "",
      description_part1: bio.description_part1 || "",
      description_part2: bio.description_part2 || "",
      description_part3: bio.description_part3 || "",
    },
  });

  const getUserBio = async () => {
    try {
      const dataBio = await getBio();
      console.log("Bio after set:", bio);
      console.log("Data GetBio:", dataBio);

      if (dataBio) {
        setBio(dataBio);
      } else {
        console.error("Error fetching biographie");
      }
    } catch (error) {
      console.error(`Error fetching biographie : ${error.message}`);
    }
  };

  const insertUserBio = async (formData) => {
    try {
      const dataBio = await insertBio(formData, user.id);

      if (dataBio !== null) {
        setBio(dataBio);
      } else {
        console.error("Error fetching biographie");
      }
    } catch (error) {
      console.error(`Error fetching biographie : ${error.message}`);
    }
  };

  const updateUserBio = async (formData) => {
    try {
      const dataBio = await updateBio(formData, user.id);

      if (dataBio !== null) {
        setBio(dataBio);
      } else {
        console.error("Error fetching biographie");
      }
    } catch (error) {
      console.error(`Error fetching biographie : ${error.message}`);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      // Vérifie si la bio existe déjà
      const existingBio = await getBio();

      if (existingBio) {
        // Si la bio existe, utilise updateBio
        await updateUserBio(formData);
      } else {
        // Sinon utilise insertBio
        await insertUserBio(formData);
      }

      setIsDialogOpen(false);
    } catch (error) {
      console.error(`Error updating/inserting data: ${error.message}`);
    }
  };

  const handleOpenChange = (isOpen) => {
    setIsDialogOpen(isOpen);
  };

  const handleOpen = async () => {
    try {
      setIsLoading(true);
      await getUserBio();
    } catch (error) {
      console.error(`Error fetching biographie : ${error.message}`);
    } finally {
      setIsLoading(false);
      setIsDialogOpen(true);
    }
  };

  useEffect(() => {
    getUserBio();
  }, []);

  return (
    <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild className="flex justify-start">
        <ButtonItem
          onClick={handleOpen}
          className="shadow-none border-purple/60 border-t-0 dark:hover:bg-purple/60 "
        >
          Biographie
        </ButtonItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:shadow-inner dark:shadow-purple/60 shadow-purple/40 shadow-md border-none bg-purple/20 backdrop-blur-3xl drop-shadow-lg ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <DialogHeader>
              <DialogTitle>Mise à jour de la biographie</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="title_business"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titre métier </FormLabel>
                    <FormControl>
                      <Input
                        type="title_business"
                        {...field}
                        defaultValue={bio.title_business || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description_part1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description partie 1</FormLabel>
                    <FormControl>
                      <Input type="description_part1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description_part2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description partie 2</FormLabel>
                    <FormControl>
                      <Input type="description_part2" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description_part3"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description partie 3</FormLabel>
                    <FormControl>
                      <Input type="description_part3" {...field} />
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
