import { Card } from "../../../components/ui/card";

export default function CardServicesFree({
  title_1,
  title_2,
  className,
  bgColor,
  bgText,
  colorText,
}) {
  return (
    <Card
      className={`flex justify-between border-t-[2px] border-x-[2px] border-t-[#442c74]  border-x-[#442c74]  border-b-4 rounded-3xl p-8 w-full h-[200px] max-w-[600px] md:h-[310px] ${bgColor} `}
    >
      <div className={`flex flex-col justify-between h-full  ${className}`}>
        <div>
          <h2
            className={` w-fit rounded-md px-2 font-semibold ${bgText} ${className} `}
          >
            {title_1}
          </h2>
          <h2
            className={`w-fit  rounded-md px-2 font-semibold ${bgText} ${className}`}
          >
            {title_2}
          </h2>
        </div>
        <p className={`${colorText} ${className}`}>En savoir plus</p>
      </div>
      <div className="flex justify-end items-center mr-4">
        <p>IMAGE</p>
      </div>
    </Card>
  );
}
