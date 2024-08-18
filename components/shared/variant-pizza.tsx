type VariantPizzaType = {
  name: string;
  value: string;
  disabled?: boolean;
};

interface GroupVariantTypePizzaProps {
  items: readonly VariantPizzaType[];
  defaultValue: string;
  onClick: (value: VariantPizzaType["value"]) => void;
  seledtedValue: VariantPizzaType["value"];
}

const GroupVariantSetails = ({
  items,
  defaultValue,
  onClick,
  seledtedValue,
}: GroupVariantTypePizzaProps) => {
  return (
    <div className="flex justify-between p-1 rounded-3xl select-none bg-[#F3F3F7]">
      {items.map((variant) => (
        <button
          key={variant.name}
          onClick={() => onClick(variant.value)}
          className="flex "
        ></button>
      ))}
    </div>
  );
};

export default GroupVariantSetails;
