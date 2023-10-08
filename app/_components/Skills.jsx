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

export default function Skills() {
  return (
    <div
      className="text flex flex-col items-center justify-center  "
      id="skills"
    >
      <div className="w-3/4">
        <p className="text-xl font-bold text-center sm:text-3xl w-72 mb-20 border-b-2 pb-2 border-purple ">
          Mes compétences
        </p>
        <div className="grid grid-cols-5 gap-y-10 gap-x-10  ">
          <div className="flex justify-center items-center ">
            <Image src={reactPng} alt="logo react" width={80} height={80} />
          </div>
          <div className="flex justify-center items-center   ">
            <Image
              src={javascriptPng}
              alt="logo javascript"
              width={80}
              height={80}
            />
          </div>
          <div className="flex justify-center items-center  ">
            <Image src={nodePng} alt="logo node" width={80} height={80} />
          </div>
          <div className="flex justify-center items-center ">
            <Image src={expressPng} alt="logo express" width={80} height={80} />
          </div>
          <div className="flex justify-center items-center   pb-5">
            <Image src={mysqlPng} alt="log mySql" width={80} height={80} />
          </div>
          <div className="flex justify-center items-center col-start-1 ">
            <div className=" flex justify-center items-center ">
              <Image src={gitPng} alt="logo git" width={80} height={80} />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-2">
            <div className=" flex justify-center items-center ">
              <Image src={githubPng} alt="logo github" width={80} height={80} />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-3">
            <div className=" flex justify-center items-center ">
              <Image
                src={tailwindPng}
                alt="logo tailwind"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-4">
            <div className=" flex justify-center items-center ">
              <Image
                src={scrumPng}
                alt="logo agile-scrum"
                width={80}
                height={80}
              />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-5">
            <div className=" flex justify-center items-center ">
              <Image src={figmaPng} alt="logo figma" width={80} height={80} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
