"use client";

import CollaborationsList from "./_components/Collaborations";
import PicturesList from "./_components/PicturesProjects";
import ProjectsList from "./_components/Projects";
import TechnosList from "./_components/Technos";

export default function PageProjects() {
  return (
    <div className="flex flex-col gap-10">
      <ProjectsList />
      <TechnosList />
      <CollaborationsList />
      <PicturesList />
    </div>
  );
}
