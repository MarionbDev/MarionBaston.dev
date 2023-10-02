import Image from "next/image";

export default function Projects() {
  return (
    <div className="text mt-10 sm:mt-56 flex justify-center">
      <div className="w-3/4 flex flex-col justify-center sm:justify-start ">
        <p className="text-xl font-bold sm:text-3xl w-44 text-center mb-28 border-b-2 pb-2 border-purple">
          Mes projets
        </p>
        <div className="grid grid-cols-3 gap-12">
          <div className="relative flex justify-center items-center bg-pale_purple/20 rounded-lg p-3">
            <div className=" absolute  text-sm font-medium p-1 bg-[#a990aa] rounded-sm shadow-sm shadow-[#756276] hover:scale-110 duration-100 ">
              <p> + d'infos</p>
            </div>
            <Image src="" alt="projet drawing and co" className="rounded-sm" />
          </div>
          <div className="relative flex justify-center items-center bg-pale_purple/20 rounded-lg p-3">
            <div className=" absolute  text-sm font-medium p-1 bg-[#a990aa] rounded-sm shadow-sm shadow-[#756276] hover:scale-110 duration-100 ">
              <p> + d'infos</p>
            </div>
            <Image
              src="/images/miniature_serenity.png"
              alt="projet serenity"
              width={600}
              height={600}
              className="rounded-sm"
            />
          </div>
          <div className="relative flex justify-center items-center bg-pale_purple/20 rounded-lg p-3 ">
            <div className=" absolute  text-sm font-medium p-1 bg-[#a990aa] rounded-sm shadow-sm shadow-[#756276] hover:scale-110 duration-100 ">
              <p> + d'infos</p>
            </div>
            <Image
              src="/images/miniature_universe.png"
              alt="projet universe"
              width={500}
              height={200}
              className="rounded-sm"
            />
          </div>
          <div className="relative flex justify-center items-center bg-pale_purple/20 rounded-lg p-3 ">
            <div className=" absolute  text-sm font-medium p-1 bg-[#a990aa] rounded-sm shadow-sm shadow-[#756276] hover:scale-110 duration-100 ">
              <p> + d'infos</p>
            </div>
            <Image
              src="/images/hack1.png"
              alt="projet hackathon 1"
              width={500}
              height={200}
              className="rounded-sm"
            />
          </div>
          <div className="relative flex justify-center items-center bg-pale_purple/20 rounded-lg p-3 ">
            <div className=" absolute  text-sm font-medium p-1 bg-[#a990aa] rounded-sm shadow-sm shadow-[#756276] hover:scale-110 duration-100 ">
              <p> + d'infos</p>
            </div>
            <Image
              src="/images/hack2.png"
              alt="projet hackathon 2"
              width={500}
              height={200}
              className="rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
