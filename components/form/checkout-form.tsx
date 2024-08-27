import { useFormContext } from "react-hook-form";
import { ClearButton } from "../shared/clear-button";
import ErrorText from "../shared/error-text";
import RequiredSymbol from "../shared/required-symbol";
import { Input } from "../ui/input";

interface CheckoutFormProps {
  name: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
}

const CheckoutForm = ({
  name,
  label,
  required,
  placeholder,
  ...props
}: CheckoutFormProps) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const handleClearButton = () => {
    setValue(name, "");
  };

  return (
    <div>
      {label && (
        <p className="mb-2 font-medium">
          {label} {required && <RequiredSymbol />}
        </p>
      )}

      <div className="relative">
        <Input
          {...register(name)}
          {...props}
          placeholder={placeholder}
          className="h-10 text-md"
        />

        {value && <ClearButton onClick={handleClearButton} />}
      </div>

      {errorText && <ErrorText text="This field is required" />}
    </div>
  );
};

export default CheckoutForm;
