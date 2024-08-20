import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { CountButtonProps } from "./count-button";
import { cn } from "@/lib/utils";

interface CountIconButtonProps {
  size?: CountButtonProps["size"];
  disabled?: boolean;
  type?: "plus" | "minus";
  onClick: () => void;
}

const CountIconButton = ({
  size,
  disabled,
  type,
  onClick,
}: CountIconButtonProps) => {
  return (
    <Button
      variant={"outline"}
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "p-0 rounded-md hover:text-white hover:bg-primary disabled:bg-white disabled:border-gray-400 disabled:text-gray-400",
        size === "sm" ? "w-[30px] h-[30px]" : "w-[38px] h-[38px]"
      )}
    >
      {type === "plus" ? (
        <Plus className={size === "sm" ? "h-4" : "h-5"} />
      ) : (
        <Minus className={size === "sm" ? "h-4" : "h-5"} />
      )}
    </Button>
  );
};

export default CountIconButton;
