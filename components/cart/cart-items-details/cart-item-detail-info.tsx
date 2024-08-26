import { cn } from "@/lib/utils";

interface Props {
  name: string;
  details: string;
  className?: string;
}

export const CartItemInfo = ({ name, details, className }: Props) => {
  return (
    <div>
      <div className={cn("flex items-center justify-between", className)}>
        <h3 className="mb-1 text-lg font-bold flex-1 leading-6">{name}</h3>
      </div>
      {details && <p className="text-xs text-gray-600 w-[90%]">{details}</p>}
    </div>
  );
};
