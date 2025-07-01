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
      className={`relative flex justify-between  border-t-[1px] border-x-[1px]  border-b-[3px]  rounded-3xl p-6 w-full h-[200px] max-w-[400px] md:h-[210px] ${bgColor}`}
    >
      <div className={`flex flex-col justify-between h-full ${className}`}>
        <div className="">
          <h2
            className={`w-fit rounded-md px-2 font-semibold ${bgText} ${className}`}
          >
            {title_1}
          </h2>
          <h2
            className={`w-fit rounded-md px-2 font-semibold ${bgText} ${className}`}
          >
            {title_2}
          </h2>
        </div>
        <p className={`text-[1rem] ${colorText} ${className}`}>
          En savoir plus
        </p>
      </div>
      <div className="relative flex justify-end items-center">
        <Image
          src={image}
          width={600}
          height={300}
          alt=""
          className={`h-auto ${classNameImage}`}
        />
      </div>
    </Card>
  );
}
