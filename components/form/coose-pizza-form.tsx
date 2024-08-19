import Image from "next/image";
import { Button } from "../ui/button";
import PizzaImage from "../products/pizza-image";

interface CoosePizzaFormProps {
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  ingredients: any[];
  items: any[];
  onClickAdd: VoidFunction;
}

const CoosePizzaForm = ({
  name,
  imageUrl,
  description,
  price,
  ingredients,
  items,
  onClickAdd,
}: CoosePizzaFormProps) => {
  return (
    <div className="flex flex-1">
      <PizzaImage imageUrl={imageUrl} size={20} />

      <div className="w-[490px] p-7 bg-[#f7f6f5]">
        <h1 className="mb-1 line-clamp-2 font-extrabold">{name}</h1>

        <p title={description} className="line-clamp-4 text-gray-700">
          {description}
        </p>

        <Button className="h-[55px] w-full px-10 mt-10 text-base rounded-md">
          Total belanjaanmu cok {price}
        </Button>
      </div>
    </div>
  );
};

export default CoosePizzaForm;
