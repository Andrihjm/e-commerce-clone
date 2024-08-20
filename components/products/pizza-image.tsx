import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface PizzaImageProps {
  className?: string;
  imageUrl: string;
  size: 300 | 370 | 450;
}

const PizzaImage = ({ className, imageUrl, size }: PizzaImageProps) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center flex-1 w-full",
        className
      )}
    >
      {/* <Image src={imageUrl} alt="product logo" width={300} height={300} /> */}

      <Image
        src={imageUrl}
        alt="product logo"
        width={size}
        height={size}
        className={cn(
          "h-full w-full object-cover rounded-full transition-all duration-300 z-10",
          {
            "w-[300px] h-[300px]": size === 300,
            "w-[370px] h-[370px]": size === 370,
            "w-[450px] h-[450px]": size === 450,
          }
        )}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-primary/50 w-[370px] h-[370px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-primary w-[450px] h-[450px]" />
    </div>
  );
};

export default PizzaImage;
