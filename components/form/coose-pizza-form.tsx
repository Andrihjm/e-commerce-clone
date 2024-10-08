"use client";

import { Button } from "../ui/button";
import PizzaImage from "../products/pizza-image";
import GroupVariant from "../shared/group-variant";
import {
  mapPizzaType,
  PizzaSizes,
  pizzaSizes,
  PizzaTypes,
  pizzaTypes,
} from "@/constants/pizza";
import { useEffect, useState } from "react";
import { Ingredient, ProductItem } from "@prisma/client";
import IngredientsItems from "../shared/ingredients-items";
import { useSet } from "react-use";
import { calcTotalPizzaPrice } from "@/lib/calc-total-pizza-price";
import { getAvailablePizzaSize } from "@/lib/get-available-pizza-size";

interface ChoosePizzaFormProps {
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  loading?: boolean;
  items?: ProductItem[];
  currentItemId?: number;
  onClickAddCart: (itemId: number, ingredient: number[]) => void;
  ingredients: Ingredient[];
}

const ChoosePizzaForm = ({
  name,
  imageUrl,
  description,
  price,
  loading,
  items,
  onClickAddCart,
  ingredients,
}: ChoosePizzaFormProps) => {
  const [size, setSize] = useState<PizzaSizes>(20);
  const [type, setType] = useState<PizzaTypes>(1);
  const [isAddToCart, setIsAddToCart] = useState(false);

  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );

  const currentItemId = items?.find(
    (item) => item.pizzaType === type && item.size === size
  )?.id;

  const selectedIngredientsNames = Array.from(selectedIngredients)
    .map((id) => ingredients.find((ingredient) => ingredient.id === id)?.name)
    .filter((name) => name)
    .join(", ");

  const textDetails = `${size} cm, ${selectedIngredientsNames} ,${mapPizzaType[type]}`;

  const totalPrice = calcTotalPizzaPrice(
    type,
    size,
    items,
    ingredients,
    selectedIngredients
  );

  const availablePizzasSizes = getAvailablePizzaSize(type, items);

  useEffect(() => {
    const isAvailableSize = availablePizzasSizes.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const availableSize = availablePizzasSizes.find((item) => !item.disabled);

    if (!isAvailableSize && availableSize) {
      setSize(Number(availableSize.value) as PizzaSizes);
    }
  }, [availablePizzasSizes, type, size]);

  const handleOnClickAddToCart = async () => {
    if (currentItemId) {
      setIsAddToCart(true);
      await onClickAddCart(currentItemId, Array.from(selectedIngredients));
      setIsAddToCart(false);
    } else {
      alert(
        "Pilihan pizza tidak tersedia untuk ukuran dan tipe ini. Silakan pilih kombinasi lain."
      );
    }
  };

  return (
    <div className="flex flex-1">
      <PizzaImage imageUrl={imageUrl} size={size} />

      <div className="w-[490px] p-7 bg-[#f7f6f5]">
        <h1 className="mb-1 line-clamp-2 font-extrabold">{name}</h1>

        <p title={description} className="line-clamp-4 text-gray-700">
          {textDetails}
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

        <Button
          disabled={loading || isAddToCart}
          onClick={handleOnClickAddToCart}
          className="h-[55px] w-full px-10 mt-10 text-base rounded-md"
        >
          {isAddToCart
            ? "Menambahkan ke Keranjang..."
            : `Total belanja Anda Rp.${totalPrice.toLocaleString()}.-`}
        </Button>
      </div>
    </div>
  );
};

export default ChoosePizzaForm;
