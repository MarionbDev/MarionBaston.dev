"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import { useEffect, useState } from "react";
import ButtonItem from "@/components/ui/buttonList/ButtonItem";
import { deleteTechno, getTechno, insertTechno } from "@/lib/api/technos";

const InsertTechnoFormSchema = yup.object().shape({
  title: yup
    .string("Vous devez renseigner un titre")
    .required("Un titre valide est requis"),
  image_url: yup
    .string("Vous devez renseigner une image")
    .required("Une image est requise"),
});

export default function AddTechno() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [technos, setTechnos] = useState([]);

  const form = useForm({ resolver: yupResolver(InsertTechnoFormSchema) });

  const allTechnos = async () => {
    try {
      const data = await getTechno();
      if (data) {
        setTechnos(data);
      } else {
        console.error("Error fetching projects");
      }
    } catch (error) {
      console.error(`Error fetching projects: ${error.message}`);
    }
  };

  useEffect(() => {
    // console.log("Inside useEffect");
    allTechnos();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      const res = await insertTechno(formData);
      if (res) {
        console.log(`Data inserted successfully:`, res);
        setIsDialogOpen(false);
        allTechnos();
      } else {
        console.error(`Error inserting data`);
      }
    } catch (error) {
      console.error(`Error inserting data: ${error.message}`);
    }
  };

  const handleDeleteTechno = async (technoId) => {
    try {
      console.log("Deleting project with ID:", technoId);
      const res = await deleteTechno(technoId);

      if (res && res.error) {
        console.error(`Error deleting project:`, res.error);
      } else {
        console.log(`Project with ID ${technoId} deleted successfully`);
        allTechnos();
      }
    } catch (error) {
      console.error(`Error deleting project: ${error.message}`);
    }
  };

  const handleOpenChange = (isOpen) => {
    // refreshSession();
    setIsDialogOpen(isOpen);
  };

  const handleOpen = () => {
    form.reset();
    setIsDialogOpen(true);
  };

  return (
    <div className="flex flex-col gap-10">
      <h3>Liste des technos</h3>
      <div>
        <ul>
          {technos.map((techno) => (
            <li key={techno.id} className="flex gap-2">
              <p>Nom : {techno.title}</p>
              <p>{techno.image_url}</p>
              <button
                type="button"
                onClick={() => {
                  console.log("Delete button clicked!");
                  handleDeleteTechno(techno.id);
                }}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild className="flex justify-start">
          <ButtonItem
            onClick={handleOpen}
            className="shadow-none border-purple/60 border-t-0 dark:hover:bg-purple/60 w-fit "
          >
            Ajouter
          </ButtonItem>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white dark:shadow-inner dark:shadow-purple/60 shadow-purple/40 shadow-md border-none bg-purple/20 backdrop-blur-3xl drop-shadow-lg   overflow-y-auto ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="">
              <DialogHeader>
                <DialogTitle>Ajout d'une techno</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <FormField
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom de la techno</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="image_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input type="text" className="resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button
                  // disabled={isLoading}
                  className="gap-2 dark:hover:bg-pale_pink/20  hover:bg-[#baa8bbc0] dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/20 rounded-xl"
                >
                  {/* {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Save size="16" />
                  )} */}
                  Sauvegarder
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>{" "}
    </div>
  );
}
