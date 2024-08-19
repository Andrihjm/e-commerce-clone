import { items } from "@/data/data-array/menu-filter";
import { cn } from "@/lib/utils";

export type Variant = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface GroupVariantProps {
  items: readonly Variant[];
  value?: Variant["value"];
  onClick?: (value: Variant["value"]) => void;
}

const GroupVariant = ({ items, value, onClick }: GroupVariantProps) => {
  return (
    <div className="flex justify-between p-1 rounded-3xl select-none bg-[#efeff1]">
      {items.map((variant) => (
        <button
          key={variant.name}
          onClick={() => onClick?.(variant.value)}
          className={cn(
            "h-[30px] flex items-center justify-center flex-1 px-5 text-sm rounded-3xl transition-all duration-700",
            {
              "bg-white": variant.value === value,
              "text-gray-500 pointer-events-none opacity-0": variant.disabled,
            }
          )}
        >
          {variant.name}
        </button>
      ))}
    </div>
  );
};

export default GroupVariant;
