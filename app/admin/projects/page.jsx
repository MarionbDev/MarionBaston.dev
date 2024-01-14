// app/admin/projects/page.jsx
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
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import ButtonItem from "@/components/ui/buttonList/ButtonItem";
import { getProject, insertProject, deleteProject } from "@/lib/api/project";

const InsertProjectFormSchema = yup.object().shape({
  title: yup
    .string("Vous devez renseigner un email")
    .required("Un email valide est requis"),
  description: yup
    .string("Vous devez renseigner un mot de passe")
    .required("Un mot de passe est requis"),
});

export default function AddProject() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projects, setProjects] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);

  const form = useForm({ resolver: yupResolver(InsertProjectFormSchema) });

  const allProjects = async () => {
    try {
      const data = await getProject();
      if (data) {
        setProjects(data);
      } else {
        console.error("Error fetching projects");
      }
    } catch (error) {
      console.error(`Error fetching projects: ${error.message}`);
    }
  };

  useEffect(() => {
    console.log("Inside useEffect");
    allProjects();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      const res = await insertProject(formData);
      if (res) {
        console.log(`Data inserted successfully:`, res);
        setIsDialogOpen(false);
        allProjects();
      } else {
        console.error(`Error inserting data`);
      }
    } catch (error) {
      console.error(`Error inserting data: ${error.message}`);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      const res = await deleteProject(projectId);

      if (res) {
        console.log(`Project with ID ${projectId} deleted successfully`);
        allProjects();
      } else {
        console.error(`Error deleting project: ${res.status}`);
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
    <div>
      <h1>Mes projets</h1>
      <div>Mise à jour des projets</div>
      <p>mise a jour essaiu</p>
      <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
        <DialogTrigger asChild className="flex justify-start">
          <ButtonItem
            onClick={handleOpen}
            className="shadow-none border-purple/60 border-t-0 dark:hover:bg-purple/60 "
          >
            Ajouter
          </ButtonItem>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-white dark:shadow-inner dark:shadow-purple/60 shadow-purple/40 shadow-md border-none bg-purple/20 backdrop-blur-3xl drop-shadow-lg   overflow-y-auto ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="">
              <DialogHeader>
                <DialogTitle>Mise à jour de l'email</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <FormField
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Titre du projet</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description du projet</FormLabel>
                      <FormControl>
                        <Textarea
                          type="text"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Temps pour effectuer le projet</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="collaboration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Collaboration</FormLabel>
                      <FormControl>
                        <select type="text" {...field}>
                          <option value="">Choisir...</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="technos"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Technologies utilisées</FormLabel>
                      <FormControl>
                        <select type="text" {...field}>
                          <option value="">Choisir...</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="website_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lien site web</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="github_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lien Github</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="video_url"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lien video</FormLabel>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ajouter des images</FormLabel>
                      <FormControl>
                        <Input type="file" {...field} />
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
      </Dialog>
      <div>
        <ul>
          {projects.map((project) => (
            <li key={project.id} className="flex">
              <p>{project.title}</p>
              <p>{project.description}</p>
              <button
                type="button"
                onClick={() => {
                  console.log("Delete button clicked!");
                  handleDeleteProject(project.id);
                }}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
