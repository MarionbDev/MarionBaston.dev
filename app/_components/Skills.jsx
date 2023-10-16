"use client";

import Image from "next/image";
import javascriptPng from "../../public/logos/javascript.png";
import gitPng from "../../public/logos/git.png";
import reactPng from "../../public/logos/react.png";
import tailwindPng from "../../public/logos/tailwind.png";
import scrumPng from "../../public/logos/agileScrum.png";
import nodePng from "../../public/logos/node.png";
import expressPng from "../../public/logos/express.png";
import mysqlPng from "../../public/logos/mysql.png";
import figmaPng from "../../public/logos/figma.png";
import githubPng from "../../public/logos/github.png";
import { useState } from "react";

export default function Skills() {
  const [showLabel, setShowLabel] = useState(false);
  return (
    <div className="flex flex-col items-center justify-centers ">
      <div className="w-3/4">
        <p className="text-xl font-bold  sm:text-3xl w-full text-start mb-20 border-b-2 pb-2 border-[#3b0764]/50 ">
          Mes compétences
        </p>
        <div className="grid grid-cols-5 gap-y-12 gap-x-2  ">
          <div className="flex justify-center items-center col-start-1">
            <div
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
              className="image-container  "
            >
              {showLabel && <div className="label">React</div>}
              <Image src={reactPng} alt="logo react" width={56} height={56} />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-2">
            <div
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
              className="image-container  "
            >
              {showLabel && <div className="label">Javascript</div>}
              <Image
                src={javascriptPng}
                alt="logo javascript"
                width={56}
                height={56}
              />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-3">
            <div
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
              className="image-container    "
            >
              {showLabel && <div className="label">Node</div>}
              <Image src={nodePng} alt="logo node" width={56} height={56} />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-4">
            <div
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
              className="image-container  "
            >
              {" "}
              {showLabel && <div className="label">Express</div>}
              <Image
                src={expressPng}
                alt="logo express"
                width={56}
                height={56}
              />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-5">
            <div
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
              className="image-container  "
            >
              {showLabel && <div className="label">MySQL</div>}
              <Image src={mysqlPng} alt="log mySql" width={56} height={56} />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-1 ">
            <div
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
              className="image-container  "
            >
              {" "}
              {showLabel && <div className="label">Git</div>}
              <Image src={gitPng} alt="logo git" width={56} height={56} />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-2">
            <div
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
              className="image-container  "
            >
              {" "}
              {showLabel && <div className="label">GiHub</div>}
              <Image src={githubPng} alt="logo github" width={56} height={56} />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-3">
            <div
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
              className="image-container  "
            >
              {" "}
              {showLabel && <div className="label">Tailwind</div>}
              <Image
                src={tailwindPng}
                alt="logo tailwind"
                width={56}
                height={56}
              />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-4">
            <div
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
              className="image-container  "
            >
              {" "}
              {showLabel && <div className="label">Méthode Agile/Scrum</div>}
              <Image
                src={scrumPng}
                alt="logo agile-scrum"
                width={56}
                height={56}
              />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-5">
            <div
              onMouseEnter={() => setShowLabel(true)}
              onMouseLeave={() => setShowLabel(false)}
              className="image-container  "
            >
              {" "}
              {showLabel && <div className="label">Figma</div>}
              <Image src={figmaPng} alt="logo figma" width={56} height={56} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
