import * as React from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { X } from "lucide-react";
import ErrorMessage from "../shared/error-message";

interface IFormInputProps {
  label?: string;
  placeholder: string;
  isRequired: boolean;
  type: string;
  name: string
  className?: string;
}

const FormInput: React.FunctionComponent<IFormInputProps> = ({
  label,
  placeholder,
  isRequired,
  type,
  name,
  className,
}) => {
  const { register, formState: { errors }, watch, setValue } = useFormContext();

  const errorText = errors[name]?.message as string;
  const value = watch(name)

  return (
    <div>
      <label className={cn("grid gap-1", className)}>
        <p className="text-[#9e9e9e]">
          {label} {isRequired && <span className="text-[#FF6633]">*</span>}
        </p>
        <div className="flex items-center bg-[#f5f5f7] rounded-xl">
          <Input
            {...register(name)}
            type={type}
            className="bg-[#F5F5F7] border-[#F5F5F7] focus-within:border-none"
            placeholder={placeholder}
          />

          {value && (
            <X
              size={20}
              onClick={() => setValue(name, "", { shouldValidate: true })}
              className="cursor-pointer mr-3"
            />
          )}
        </div>
      </label>
      {errorText && <ErrorMessage errorText={errorText} />}
    </div>
  );
};

export default FormInput;
