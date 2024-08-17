import { ApiClient } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";

interface UseFilterIngredientsProps {
  ingredients: Ingredient[];
  loading: boolean;
}

export const useFilterIngredients = (): UseFilterIngredientsProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setloading(true);
        const response = await ApiClient.ingredients.getAllIngredients();
        setIngredients(response);
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
      }
    }

    fetchIngredients();
  }, []);

  return { ingredients, loading };
};
