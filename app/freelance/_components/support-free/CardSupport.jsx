import Image from "next/image";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import image from "../../images/discussion.png";

export default function CardSupport({ title, description }) {
  return (
    <>
      <Card className="w-[350px] h-[300px] md:w-[350px] md:h-[300px]">
        <CardHeader className="flex flex-row items-center gap-4">
          <Image src={image} width={100} height={100} alt="" />
          <p>{title}</p>
        </CardHeader>
        <CardContent className="border-t-[1px] w-[85%] px-0 pt-6 mx-auto">
          {description}
        </CardContent>
      </Card>
    </>
  );
}
