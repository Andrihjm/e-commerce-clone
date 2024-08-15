import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface FilterCheckboxProps {
  label: string;
  value: string;
  endAdorment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

const FilterCheckbox = ({
  label,
  value,
  endAdorment,
  onCheckedChange,
  checked,
}: FilterCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <Checkbox
        id={`checkbox-${String(value)}`}
        value={value}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="h-6 w-6 rounded-[8px]"
      />
      <Label
        htmlFor={`checkbox-${String(value)}`}
        className="flex-1 leading-none cursor-pointer"
      >
        {label}
      </Label>
      {endAdorment}
    </div>
  );
};

export default FilterCheckbox;
