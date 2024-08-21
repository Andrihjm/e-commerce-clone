import { CartDTO } from "../DTO/cart.dto";
import { axiosInstance } from "../instance";

export const fetchCartItemsService = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>("/cart")).data;
};
