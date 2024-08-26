import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  src: string;
  name: string;
  className?: string;
}

export const CartItemDetailsImage = ({ src, name, className }: Props) => {
  return (
    <Image
      src={src}
      alt={name}
      width={60}
      height={60}
      className={cn("w-[60px] h-[60px]", className)}
    />
  );
};
