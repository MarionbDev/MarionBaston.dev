import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogStepProject({ project }) {
  return (
    <Dialog className="">
      <DialogTrigger asChild>
        <Button className="dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30 bg-purple/80   rounded-xl text-xs sm:text-sm text-white  dark:hover:bg-pale_pink/20 hover:bg-[#baa8bbc0]">
          Voir plus...
        </Button>
      </DialogTrigger>
      <DialogContent className=" overflow-y-scroll  sm:max-w-[668px] dark:shadow-inner dark:shadow-purple/60 shadow-purple/40 shadow-md border-none bg-purple/20 backdrop-blur-3xl drop-shadow-lg">
        <DialogTitle>Description du projet</DialogTitle>
        <DialogDescription>
          {project.project_steps &&
            project.project_steps.map((step) => (
              <li
                className="mb-4 text-sm sm:text-md"
                key={step.step_description}
              >
                {step.step_description}
              </li>
            ))}
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
