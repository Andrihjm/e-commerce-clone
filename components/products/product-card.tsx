import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductCard = ({
  id,
  title,
  description,
  price,
  imageUrl,
}: ProductProps) => {
  return (
    <div className="rounded-md hover:-translate-y-4 transition-all duration-500">
      <Link href={`/product/${id}`}>
        <div className="h-[260px] w-full flex justify-center rounded-lg bg-secondary">
          <Image
            src={imageUrl}
            alt={title}
            width={215}
            height={215}
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>

        <div className="flex flex-col gap-1.5 p-3">
          <h3 className="h-12 text-xl line-clamp-2 font-bold">{title}</h3>

          <p className="text-sm line-clamp-3 text-gray-300">{description}</p>

          <div className="flex items-center justify-between mt-4">
            <p className="flex items-center gap-2 text-sm text-gray-300">
              OT <span className="text-[20px] font-bold">${price}</span>
            </p>

            <Button variant={"default"} className="text-base font-bold">
              <Plus size={16} />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
