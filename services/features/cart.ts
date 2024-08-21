import { CartDTO } from "../DTO/cart.dto";
import { axiosInstance } from "../instance";

export const fetchCartItemsService = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>("/cart")).data;
};

export const updateItemsQuantityService = async (
  id: number,
  quantity: number
): Promise<CartDTO> => {
  return (await axiosInstance.put<CartDTO>(`/cart/${id}`, { quantity })).data;
};
