import * as React from "react";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { X } from "lucide-react";
import ErrorMessage from "../shared/error-message";
import { Textarea } from "./textarea";
import CheckoutClearInputValue from "../shared/checkout/checkout-clear-input-value";

interface IFormTextareaProps {
  label?: string;
  placeholder: string;
  name: string;
  className?: string;
  isRequired?: boolean;
}

const FormTextarea: React.FunctionComponent<IFormTextareaProps> = ({
  label,
  placeholder,
  name,
  className,
  isRequired,
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const errorText = errors[name]?.message as string;
  const value = watch(name);

  return (
    <div>
      <label className={cn("grid gap-1", className)}>
        <p className="text-[#9e9e9e]">{label} {isRequired && <span className="text-[#FF6633]">*</span>}</p>
        <div className="flex items-center bg-[#f5f5f7] rounded-xl">
          <Textarea
            {...register(name)}
            className="bg-[#F5F5F7] border-[#F5F5F7] focus-within:border-none"
            placeholder={placeholder}
            cols={5}
          />

          {value && <CheckoutClearInputValue setValue={setValue} name={name} />}
        </div>
      </label>
      {errorText && <ErrorMessage errorText={errorText} />}
    </div>
  );
};

export default FormTextarea;
