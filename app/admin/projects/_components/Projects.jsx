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
import { getTechno } from "@/lib/api/technos";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const InsertProjectFormSchema = yup.object().shape({
  title: yup
    .string("Vous devez renseigner un titre")
    .required("Un titre valide est requis"),
  description: yup
    .string("Vous devez renseigner la description du projet")
    .required("Une description est requise"),
});

export default function ProjectList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [technos, setTechnos] = useState([]);
  const [selectedTechnos, setSelectedTechnos] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);

  const form = useForm({ resolver: yupResolver(InsertProjectFormSchema) });

  const allProjects = async () => {
    try {
      const data = await getProject();
      console.log("Projects data:", data);
      if (data) {
        setProjects(data);
      } else {
        console.error("Error fetching projects");
      }
    } catch (error) {
      console.error(`Error fetching projects: ${error.message}`);
    }
  };

  const allTechnos = async () => {
    try {
      const dataTechno = await getTechno();
      console.log("Technos data:", dataTechno);

      if (dataTechno) {
        setTechnos(dataTechno);
      } else {
        console.error("Error fetching projects");
      }
    } catch (error) {
      console.error(`Error fetching projects: ${error.message}`);
    }
  };

  useEffect(() => {
    // console.log("Inside useEffect");
    allProjects();
    allTechnos();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      const res = await insertProject(formData);
      if (res) {
        console.log(`Data inserted successfully:`, res);
        setIsDialogOpen(false);
        allProjects();
        allTechnos();
      } else {
        console.error(`Error inserting data`);
      }
    } catch (error) {
      console.error(`Error inserting data: ${error.message}`);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      console.log("Deleting project with ID:", projectId);
      const res = await deleteProject(projectId);

      if (res && res.error) {
        console.error(`Error deleting project:`, res.error);
      } else {
        console.log(`Project with ID ${projectId} deleted successfully`);
        allProjects();
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
    <div className="flex flex-col gap-10 overflow-hidden ">
      <h3> Liste des projets</h3>
      <div className="  ">
        <Table className="   ">
          <TableHeader>
            <TableRow className="">
              <TableHead className="">Nom du projet</TableHead>
              <TableHead className="">Description</TableHead>
              <TableHead>Durée effectuée</TableHead>
              <TableHead className="">Technos utilisées</TableHead>
              <TableHead className="">Collaborations</TableHead>
              <TableHead className="">Site web</TableHead>
              <TableHead className="">Lien Github</TableHead>
              <TableHead className="">Lien vidéo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => (
              <TableRow className="">
                <TableCell key={project.id} className="font-medium   ">
                  {project.title}
                </TableCell>
                <TableCell key={project.id} className="font-medium  ">
                  {project.description}
                </TableCell>
                <TableCell key={project.id} className="font-medium">
                  {project.time}
                </TableCell>
                <TableCell key={project.id} className="font-medium">
                  {project.techno}
                </TableCell>
                <TableCell key={project.id} className="font-medium">
                  ???
                </TableCell>
                <TableCell key={project.id} className="font-medium">
                  {project.website_url}
                </TableCell>
                <TableCell key={project.id} className="font-medium">
                  {project.github_url}
                </TableCell>

                <TableCell key={project.id} className="font-medium ">
                  {project.video_url && (
                    <Link
                      href={project.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.video_url}
                    </Link>
                  )}
                </TableCell>
                <TableCell>
                  <button
                    type="button"
                    onClick={() => {
                      console.log("Delete button clicked!");
                      handleDeleteProject(project.id);
                    }}
                  >
                    Supprimer
                  </button>{" "}
                </TableCell>
                {/* Ajouter un bouton permettant d'ouvri le form avec les données et de le mettre a jour si nécessaire, le faire pour chaque partie  de la page  */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
                <DialogTitle>Ajout d'un projte</DialogTitle>
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
                  control={form.control}
                  name="collaboration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Collaboration</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {technos.map((techno) => (
                            <SelectItem key={techno.id} value={techno.id}>
                              essai collab
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="technos"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Technologies utilisées</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisir" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-[#1f1d1d]">
                          {technos.map((techno) => {
                            return (
                              <SelectItem key={techno.id} value={techno.id}>
                                {techno.title}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
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
      </Dialog>{" "}
    </div>
  );
}
