import CountIconButton from "./count-icon-button";

export interface CountButtonProps {
  value?: number;
  size?: "sm" | "lg";
  onClick?: (type: "plus" | "minus") => void;
}

const CountButton = ({ value = 1, size = "sm", onClick }: CountButtonProps) => {
  return (
    <div className="inline-flex items-center justify-between gap-3">
      <CountIconButton
        size={size}
        disabled={value === 1}
        type="minus"
        onClick={() => onClick?.("minus")}
      />

      <p className={size === "sm" ? "text-sm" : "text-md"}>{value}</p>

      <CountIconButton
        size={size}
        type="plus"
        onClick={() => onClick?.("plus")}
      />
    </div>
  );
};

export default CountButton;
