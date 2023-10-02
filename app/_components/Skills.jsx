import Image from "next/image";

export default function Skills() {
  return (
    <div className="text mt-10 sm:mt-48 flex justify-center bg-[#f2f3f3] py-28 ">
      <div className="w-3/4">
        <p className="text-xl font-bold text-center sm:text-3xl w-64 mb-28 border-b-2 pb-2 border-purple">
          Mes compétences
        </p>
        <div className="grid grid-cols-5 gap-y-10 gap-x-10  ">
          <div className="flex justify-center items-center bg-white rounded-full w-40 h-40">
            <Image
              src="/logos/react.png"
              alt="logo react"
              width={120}
              height={120}
            />
          </div>
          <div className="flex justify-center items-center  bg-white rounded-full w-40 h-40 ">
            <Image
              src="/logos/javascript.png"
              alt="logo javascript"
              width={100}
              height={100}
            />
          </div>
          <div className="flex justify-center items-center  bg-white rounded-full w-40 h-40">
            <Image
              src="/logos/node.png"
              alt="logo node"
              width={130}
              height={130}
            />
          </div>
          <div className="flex justify-center items-center bg-white rounded-full w-40 h-40">
            <Image
              src="/logos/express1.png"
              alt="logo express"
              width={140}
              height={140}
            />
          </div>
          <div className="flex justify-center items-center  bg-white rounded-full w-40 h-40 pb-5">
            <Image
              src="/logos/mysql.png"
              alt="log mySql"
              width={600}
              height={600}
            />
          </div>
          <div className="flex justify-center items-center col-start-1 col-span-2 ">
            <div className=" flex justify-center items-center bg-white rounded-full w-40 h-40">
              <Image
                src="/logos/git.png"
                alt="logo git"
                width={140}
                height={140}
              />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-3 row-start-2">
            <div className=" flex justify-center items-center bg-white rounded-full w-40 h-40">
              <Image
                src="/logos/github1.png"
                alt="logo github"
                width={180}
                height={180}
              />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-4 col-span-2 row-start-2">
            <div className=" flex justify-center items-center bg-white rounded-full w-40 h-40">
              <Image
                src="/logos/tailwind.png"
                alt="logo taimwind"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
