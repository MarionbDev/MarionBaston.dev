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
import { deleteType, getType, insertType } from "@/lib/api/types";

const InsertTypesFormSchema = yup.object().shape({
  title: yup
    .string("Vous devez renseigner un titre")
    .required("Un titre valide est requis"),
});

export default function TypesList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [types, setTypes] = useState([]);

  const form = useForm({ resolver: yupResolver(InsertTypesFormSchema) });

  const allTypes = async () => {
    try {
      const dataType = await getType();
      console.log("TypesList data:", dataType);

      if (dataType) {
        setTypes(dataType);
      } else {
        console.error("Error fetching TypesList");
      }
    } catch (error) {
      console.error(`Error fetching TypesList: ${error.message}`);
    }
  };

  useEffect(() => {
    // console.log("Inside useEffect");
    allTypes();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      const res = await insertType(formData);
      if (res) {
        console.log(`Data inserted successfully:`, res);
        setIsDialogOpen(false);
        allTypes();
      } else {
        console.error(`Error inserting data`);
      }
    } catch (error) {
      console.error(`Error inserting data: ${error.message}`);
    }
  };

  const handleDeleteType = async (typeId) => {
    try {
      console.log("Deleting type with ID:", typeId);
      const res = await deleteType(typeId);

      if (res && res.error) {
        console.error(`Error deleting type:`, res.error);
      } else {
        console.log(`Type with ID ${typeId} deleted successfully`);
        allTypes();
      }
    } catch (error) {
      console.error(`Error deleting type: ${error.message}`);
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
      <h3>Liste des types de projet</h3>
      <div>
        <ul className="grid grid-cols-7">
          {types.map((type) => (
            <li key={type.id} className="flex gap-2">
              <p>{type.title}</p>
              <button
                type="button"
                onClick={() => {
                  console.log("Delete button clicked!");
                  handleDeleteType(type.id);
                }}
              >
                X
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
                <DialogTitle>Ajout d'un type de projet</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <FormField
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titre du type de projet</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
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
