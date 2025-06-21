"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type ImageCardProps = {
  title: string;
  image: string;
  department: string;
};

const ImageCard: React.FC<ImageCardProps> = ({ title, image, department }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${department}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="relative group cursor-pointer overflow-hidden rounded-xl transition-shadow hover:shadow-xl aspect-[4/3] sm:aspect-[16/9]"
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover w-full h-full group-hover:brightness-90 transition-all duration-300"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Text & Animated Arrow */}
      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <ArrowRight
          className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2}
        />
      </div>
    </Card>
  );
};

export default ImageCard;
