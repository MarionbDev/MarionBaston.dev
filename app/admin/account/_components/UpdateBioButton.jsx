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
  title: yup
    .string("Vous devez renseigner un titre")
    .required("Un titre est requis"),
  description: yup
    .string("Vous devez renseigner une description")
    .required("Une description est requiss"),
});

export function UpdateBioButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bio, setBio] = useState("");
  const { user, loading, refreshSession } = useSession();
  const [formData, setFormData] = useState([]);

  const form = useForm({ resolver: yupResolver(UpdateBioFormSchema) });

  const getUserBio = async () => {
    try {
      const dataBio = await getBio();

      if (dataBio) {
        setBio(dataBio);
      } else {
        console.error("Error fetching biographie");
      }
    } catch (error) {
      console.error(`Error fetching biographie : ${error.message}`);
    }
  };

  const insertUserBio = async () => {
    try {
      const dataBio = await insertBio(formData, user.id);
      console.log("InsertBio response:", dataBio);

      if (dataBio !== null) {
        setBio(dataBio);
      } else {
        console.error("Error fetching biographie");
      }
    } catch (error) {
      console.error(`Error fetching biographie : ${error.message}`);
    }
  };

  const updateUserBio = async () => {
    try {
      const dataBio = await updateBio(formData, user.id);
      console.log("UpdateBio response:", dataBio);

      if (dataBio !== null) {
        setBio(dataBio);
      } else {
        console.error("Error fetching biographie");
      }
    } catch (error) {
      console.error(`Error fetching biographie : ${error.message}`);
    }
  };

  useEffect(() => {
    updateUserBio();
    getUserBio();
    insertUserBio();
  }, []);

  // const handleSubmit = async () => {
  //   try {
  //     const formData = form.getValues();
  //     console.log("Form Data handlSubmit:", formData);
  //     setFormData(formData);
  //     // const res = await updateBio(formData, user.id);
  //     const res = await insertBio(formData, user.id);

  //     if (res) {
  //       console.log(`Data updated successfully:`, res);
  //       setIsDialogOpen(false);
  //     } else {
  //       console.error(`Error update data`);
  //     }
  //   } catch (error) {
  //     console.error(`Error update data: ${error.message}`);
  //   }
  // };

  const handleSubmit = async () => {
    try {
      const formData = form.getValues();
      console.log("Form Data handlSubmit:", formData);
      setFormData(formData);

      // Vérifie si la bioexiste déjà
      const existingBio = await getBio(formData);

      if (existingBio.length > 0) {
        // Si la bio existe, utilise updateBio
        const res = await updateBio(formData, user.id);

        if (res) {
          console.log(`Data updated successfully:`, res);
          setIsDialogOpen(false);
        } else {
          console.error(`Error updating data`);
        }
      } else {
        // Sinon utilise insertBio
        const res = await insertBio(formData, user.id);

        if (res) {
          console.log(`Data inserted successfully:`, res);
          setIsDialogOpen(false);
        } else {
          console.error(`Error inserting data`);
        }
      }
    } catch (error) {
      console.error(`Error updating/inserting data: ${error.message}`);
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
          //   isLoading={loading}
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
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Titre </FormLabel>
                    <FormControl>
                      <Input type="title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input type="description" {...field} />
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
