import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { formmaterCurrency } from "@/utils/formatter-currency";
import { Ingredient } from "@prisma/client";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  imageUrl,
  ingredients,
}: ProductProps) => {
  return (
    <div className="rounded-md hover:-translate-y-4 transition-all duration-500">
      <Link href={`/product-detail/${id}`}>
        <div className="h-[260px] w-full flex justify-center rounded-lg bg-secondary">
          <Image
            src={imageUrl}
            alt={name}
            width={215}
            height={215}
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>

        <div className="flex flex-col gap-1.5 p-3">
          <h3 title={name} className="text-xl line-clamp-2 font-bold">
            {name}.
          </h3>

          <p title={description} className="text-sm line-clamp-3 text-gray-300">
            {ingredients.map((ingredient) => ingredient.name).join(", ")}
          </p>

          <div className="flex items-center justify-between mt-4">
            <p className="flex items-center gap-2 text-sm text-gray-300">
              OT{" "}
              <span className="text-[20px] font-bold">
                {formmaterCurrency(price, "en-US", "USD")}
              </span>
            </p>

            <Button variant={"default"} className="text-base font-bold">
              <Plus size={16} />
              Add to cart
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
