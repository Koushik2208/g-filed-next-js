"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

type ImageCardProps = {
  title: string;
  image: string;
  routePrefix?: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ title, image }) => {
  const router = useRouter();

  const slugifiedTitle = title.toLowerCase().split(" ").join("-");
  const handleClick = () => {
    router.push(`/${slugifiedTitle}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
    >
      <CardContent className="p-0">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="object-cover w-full h-48"
        />
        <CardTitle className="p-4 text-lg font-semibold">{title}</CardTitle>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
