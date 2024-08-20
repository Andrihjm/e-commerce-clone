import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import Image from "next/image";

interface IngredientsItemsProps {
  name: string;
  price: number;
  imageUrl: string;
  active?: boolean;
  onClick?: () => void;
}

const IngredientsItems = ({
  name,
  price,
  imageUrl,
  active,
  onClick,
}: IngredientsItemsProps) => {
  return (
    <div
      className={cn(
        "w-32 relative flex flex-col items-center rounded-md shadow-md bg-white cursor-pointer",
        { "border border-primary": active }
      )}
      onClick={onClick}
    >
      {active && (
        <CircleCheck className="absolute right-2 top-2 text-primary" />
      )}
      <Image
        src={imageUrl}
        alt={name}
        width={110}
        height={110}
        className="w-full h-full object-cover"
      />

      <p className="text-sm">{name}</p>
      <p className="mb-2 font-bold">${price}</p>
    </div>
  );
};

export default IngredientsItems;
