import React from "react";
import { Checkbox } from "../ui/checkbox";

interface FilterCheckboxProps {
  text: string;
  value: string;
  endAdornment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
  name?: string;
}

const FilterCheckbox = ({
  text,
  value,
  endAdornment,
  onCheckedChange,
  checked,
  name,
}: FilterCheckboxProps) => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox
          id={`checkbox-${String(name)}-${String(value)}`}
          value={value}
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="rounded-[8px] w-6 h-6"
        />
        <label
          htmlFor={`checkbox-${String(name)}-${String(value)}`}
          className="leading-none cursor-pointer flex-1"
        >
          {text}
        </label>
        {endAdornment}
      </div>{" "}
    </>
  );
};

export default FilterCheckbox;
