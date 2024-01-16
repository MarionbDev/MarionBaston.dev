"use client";

import AddProject from "./_components/Projects";
import AddTechno from "./_components/Technos";
import AddCollaborations from "./_components/Collaborations";
import AddPictures from "./_components/PicturesProjects";

export default function PageProjects() {
  return (
    <div className="flex flex-col gap-10">
      <AddProject />
      <AddTechno />
      <AddCollaborations />
      <AddPictures />
    </div>
  );
}
