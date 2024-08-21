import { CartDTO } from "@/services/DTO/cart.dto";
import { calcCartTotalPrice } from "./calc-cart-total-price";

export type CartStateItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
  disabled?: boolean;
  pizzaSize?: number | null;
  pizzaType?: number | null;
  ingredients: Array<{ name: string; price: number }>;
};

interface GetCartDetailsProps {
  items: CartStateItem[];
  totalAmount: number;
}

export const getCartDetails = (data: CartDTO): GetCartDetailsProps => {
  const items = data.items?.map((item) => ({
    id: item.id,
    name: item.productItem.product.name,
    quantity: item.quantity,
    price: calcCartTotalPrice(item),
    imageUrl: item.productItem.product.imageUrl,
    disabled: false,
    pizzaSize: item.productItem.size,
    pizzaType: item.productItem.pizzaType,
    ingredients: item.ingredients.map((ingredient) => ({
      name: ingredient.name,
      price: ingredient.price,
    })),
  })) as CartStateItem[];

  return {
    items,
    totalAmount: data.totalAmount,
  };
};
