"use client";

import CollaborationsList from "./_components/Collaborations";
import PicturesList from "./_components/PicturesProjects";
import ProjectsList from "./_components/Projects";
import TechnosList from "./_components/Technos";
import TypesList from "./_components/TypesList";

export default function PageProjects() {
  return (
    <div className="flex flex-col gap-8">
      <div className=" border p-4 mx-4 mt-20">
        <ProjectsList />
      </div>
      <div className=" border p-4 mx-4">
        <TechnosList />
      </div>
      <div className=" border p-4 mx-4">
        <CollaborationsList />
      </div>
      <div className=" border p-4 mx-4">
        <TypesList />
      </div>
      <div className=" border p-4 mx-4">
        <PicturesList />
      </div>
    </div>
  );
}
