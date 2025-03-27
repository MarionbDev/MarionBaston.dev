import Image from "next/image";
import arrow from "../images/arrow1.png";
import desktop from "../images/mockup-desk.jpg";
import mobile from "../images/mockup-mob.jpeg";
import CustomLink from "./CustomLink";

export default function HeaderFree() {
  return (
    <div className=" xl:h-[100vh] flex flex-col xl:flex-row md:justify-between gap-20 xl:gap-0 2xl:gap-20 3xl:gap-32 mt-20  xl:mt-0 items-center">
      <section className=" flex flex-col gap-8 w-fit">
        <h1 className="text-[2rem] sm:pr-[8%] lg:pr-[20%] xl:pr-0 md:text-[3rem]  xl:text-[3.2rem] 2xl:text-[3.3rem]  leading-none sm:text-balance  ">
          <span className="relative inline-block px-2  ">
            <span className="absolute inset-0 h-[105%] top-1/2 -translate-y-1/2  -rotate-3 bg-free_yellow -z-10 "></span>
            Boostez
          </span>{" "}
          votre présence en ligne avec un site performant et moderne !
        </h1>
        <div className="relative w-full mt-10 xl:hidden ">
          <div>
            {/* <p className=" text-[#eade34] font-medium ">Ils l'ont fait !</p> */}
            <Image
              src={arrow}
              width={600}
              height={600}
              alt="illustration flèche"
              className="absolute z-10 -top-10  lg:-top-10 -right-2 md:-right-10  w-1/6 sm:2/3 md:w-1/5  rotate-90 "
            />
          </div>
          <Image
            src={desktop}
            width={1600}
            height={900}
            alt="Photo de présentation du site"
            className="w-[90%] md:w-[74%] lg:w-[75%] mx-auto h-auto rounded-md shadow-md"
          />
          <Image
            src={mobile}
            width={600}
            height={300}
            alt="Photo de présentation du site"
            className="absolute -bottom-2  md:-bottom-10 right-2 md:right-0 w-[25%] lg h-auto rounded-md border-l-2 border-t-2 border-[#ffff] shadow-md"
          />
        </div>
        <h2 className="mt-6 md:mt-14 text-[1.1rem] md:text-[1.5rem] text-pretty leading-7">
          Artisans, commerçants, entrepreneurs : je vous aide à gagner en
          visibilité et à attirer plus de clients grâce au marketing digital.
        </h2>
        <CustomLink href="/me-contacter" className="md:w-fit border-2  ">
          Discutons de votre projet !
        </CustomLink>
      </section>
      <div className="relative w-full hidden xl:flex">
        <div className=" ">
          {/* <p className=" text-[#eade34] font-medium ">Ils l'ont fait !</p> */}
          <Image
            src={arrow}
            width={600}
            height={600}
            alt="illustration flèche"
            className="absolute z-10  -top-14 xl:-left-8 2xl:-left-16 w-1/6  rotate-90 scale-y-[-1] "
          />
        </div>
        <Image
          src={desktop}
          width={1600}
          height={900}
          alt="Photo de présentation du site"
          className="w-4/5 md:w-[700px] lg:w-[80%] xl:w-[95%]  mx-auto lg h-auto rounded-md shadow-md"
        />
        <Image
          src={mobile}
          width={600}
          height={300}
          alt="Photo de présentation du site"
          className="absolute -bottom-10 -right-12 w-[30%] lg h-auto rounded-md border-l-2 border-t-2 border-[#ffff] shadow-md"
        />
      </div>
    </div>
  );
}
