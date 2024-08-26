import { cn } from "@/lib/utils";

interface Props {
  value: number;
  className?: string;
}

export const CartItemDetailsPrice = ({ value, className }: Props) => {
  return <h3 className={cn("font-bold", className)}>$ {value}</h3>;
};
