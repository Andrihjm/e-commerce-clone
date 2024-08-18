import { ApiClient } from "@/services/api-client";
import { Ingredient } from "@prisma/client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

interface UseFilterIngredientsProps {
  ingredients: Ingredient[];
  loading: boolean;
  selectedId: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (
  values: string[] = []
): UseFilterIngredientsProps => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setloading] = useState(true);

  const [selectedId, { toggle }] = useSet(new Set<string>(values));

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

  return { ingredients, loading, onAddId: toggle, selectedId };
};
