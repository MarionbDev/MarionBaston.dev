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
              alt="react"
              width={600}
              height={600}
            />
          </div>
          <div className="flex justify-center items-center  bg-white rounded-full w-40 h-40 ">
            <Image
              src="/logos/javascript.png"
              alt="javascript"
              width={600}
              height={600}
            />
          </div>
          {/* <div className="flex justify-center items-center  bg-white rounded-full w-40 h-40">
            <Image src={node} alt="node" className="w-32 h-32" />
          </div>
          <div className="flex justify-center items-center bg-white rounded-full w-40 h-40">
            <Image src={express} alt="express" className="w-36 h-36 p-1" />
          </div>
          <div className="flex justify-center items-center  bg-white rounded-full w-40 h-40 pb-5">
            <Image src={sql} alt="sql" />
          </div>
          <div className="flex justify-center items-center col-start-1 col-span-2 ">
            <div className=" flex justify-center items-center bg-white rounded-full w-40 h-40">
              <Image src={git} alt="git" className="w-32 h-32 " />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-3 row-start-2">
            <div className=" flex justify-center items-center bg-white rounded-full w-40 h-40">
              <Image src={github} alt="react" className="w-40 h-40 " />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-4 col-span-2 row-start-2">
            <div className=" flex justify-center items-center bg-white rounded-full w-40 h-40">
              <Image src={tailwind} alt="taimwind" className="w-24 h-24" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
