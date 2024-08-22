import { CartDTO, CreateCartItemValues } from "../DTO/cart.dto";
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

export const deleteItemsCartService = async (id: number): Promise<CartDTO> => {
  return (await axiosInstance.delete<CartDTO>(`/cart/${id}`)).data;
};

export const addItemCartService = async (
  values: CreateCartItemValues
): Promise<CartDTO> => {
  return (await axiosInstance.post<CartDTO>("/cart", values)).data;
};
