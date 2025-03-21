import Image from "next/image";
import { Card } from "../../../components/ui/card";

export default function CardServicesFree({
  title_1,
  title_2,
  className,
  bgColor,
  bgText,
  colorText,
  image,
  classNameImage,
}) {
  return (
    <Card
      className={`relative flex justify-between border-t-[2px] border-x-[2px] border-t-[#442c74]  border-x-[#442c74]  border-b-4 rounded-3xl p-6 w-full h-[200px] max-w-[570px] md:h-[310px] ${bgColor} `}
    >
      <div className={`flex flex-col justify-between h-full  ${className}`}>
        <div className=" ">
          <h2
            className={`absolute w-fit rounded-md px-2 font-semibold ${bgText} ${className} `}
          >
            {title_1}
          </h2>
          <h2
            className={`absolute z-10 mt-[1.50rem] w-fit  rounded-md px-2 font-semibold ${bgText} ${className}`}
          >
            {title_2}
          </h2>
        </div>
        <p className={` ${colorText} ${className}`}>En savoir plus</p>
      </div>
      <div className=" relative right-0 z-0 flex justify-end items-center">
        <Image
          src={image}
          width={600}
          height={300}
          alt=""
          className={` h-auto  ${classNameImage} `}
        />
      </div>
    </Card>
  );
}
