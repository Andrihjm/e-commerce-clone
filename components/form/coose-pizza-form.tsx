"use client";

import { Button } from "../ui/button";
import PizzaImage from "../products/pizza-image";
import GroupVariant from "../shared/group-variant";
import {
  PizzaSizes,
  pizzaSizes,
  PizzaTypes,
  pizzaTypes,
} from "@/constants/pizza";
import { useState } from "react";
import { Ingredient, ProductItem } from "@prisma/client";
import IngredientsItems from "../shared/ingredients-items";
import { useSet } from "react-use";

interface CoosePizzaFormProps {
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  items?: ProductItem[];
  onClickAddCart?: VoidFunction;
  ingredients: Ingredient[];
}

const CoosePizzaForm = ({
  name,
  imageUrl,
  description,
  price,
  items,
  onClickAddCart,
  ingredients,
}: CoosePizzaFormProps) => {
  const [size, setSize] = useState<PizzaSizes>(300);
  const [type, setType] = useState<PizzaTypes>(1);

  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  return (
    <div className="flex flex-1">
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] p-7 bg-[#f7f6f5]">
        <h1 className="mb-1 line-clamp-2 font-extrabold">{name}</h1>

        <p title={description} className="line-clamp-4 text-gray-700">
          {description}
        </p>

        <div className="flex flex-col gap-4 mt-5">
          <GroupVariant
            items={pizzaSizes}
            value={String(size)}
            onClick={(value) => setSize(Number(value) as PizzaSizes)}
          />

          <GroupVariant
            items={pizzaTypes}
            value={String(type)}
            onClick={(value) => setType(Number(value) as PizzaTypes)}
          />
        </div>

        <div className="w-full max-h-[400px] mt-5 pb-2 rounded-md bg-gray-100 overflow-auto scrollbar">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient) => (
              <IngredientsItems
                key={ingredient.id}
                name={ingredient.name}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
                active={selectedIngredients.has(ingredient.id)}
                onClick={() => addIngredient(ingredient.id)}
              />
            ))}
          </div>
        </div>

        <Button className="h-[55px] w-full px-10 mt-10 text-base rounded-md">
          Total belanjaanmu cok {price}
        </Button>
      </div>
    </div>
  );
};

export default CoosePizzaForm;
