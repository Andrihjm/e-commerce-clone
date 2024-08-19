import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface PizzaImageProps {
  className?: string;
  imageUrl: string;
  size: 20 | 30 | 40;
}

const PizzaImage = ({ className, imageUrl, size }: PizzaImageProps) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center flex-1 w-full",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt="product logo"
        width={size}
        height={size}
        className={cn(
          "relative left-2 top-2 h-full w-full object-cover transition-all duration-300 z-10",
          {
            "w-[300px] h-[300px]": size === 20,
            "w-[400px] h-[400px]": size === 30,
            "w-[500px] h-[500px]": size === 40,
          }
        )}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]" />
    </div>
  );
};

export default PizzaImage;
