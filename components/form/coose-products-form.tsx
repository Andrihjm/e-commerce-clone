import Image from "next/image";
import { Button } from "../ui/button";

interface CooseProductFormProps {
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  onClickAddCart?: () => void;
}

const CooseProductForm = ({
  name,
  imageUrl,
  description,
  price,
  onClickAddCart,
}: CooseProductFormProps) => {
  return (
    <div className="flex flex-1">
      <div className="relative flex flex-1 items-center justify-center">
        <Image
          src={imageUrl}
          alt={name}
          width={80}
          height={80}
          className="relative left-2 top-2 w-full h-full object-cover transition-all duration-300 z-10"
        />
      </div>

      <div className="w-[490px] p-7 bg-[#f7f6f5]">
        <h1 className="mb-1 line-clamp-2 font-extrabold">{name}</h1>

        <p title={description} className="line-clamp-4 text-gray-700">
          {description}
        </p>

        <Button
          onClick={onClickAddCart}
          className="h-[55px] w-full px-10 mt-10 text-base rounded-md"
        >
          Total belanjaan anda Rp.{price.toLocaleString()}.-
        </Button>
      </div>
    </div>
  );
};

export default CooseProductForm;
