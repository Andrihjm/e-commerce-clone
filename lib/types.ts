export interface Items {
  label: string;
  value: string;
  endAdorment?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}
