import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface FilterCheckboxProps {
  label: string;
  value: string;
  endAdorment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

const FilterCheckbox = ({
  label,
  value,
  endAdorment,
  onCheckedChange,
  checked,
  name,
}: FilterCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <Checkbox
        id={`checkbox-${String(name)}-${String(value)}`}
        value={value}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="h-6 w-6 rounded-[8px]"
      />
      <Label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="flex-1 text-base leading-none cursor-pointer"
      >
        {label}
      </Label>
      {endAdorment}
    </div>
  );
};

export default FilterCheckbox;
