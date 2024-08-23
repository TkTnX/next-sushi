import * as React from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

interface IFormInputProps {
  label?: string;
  placeholder: string;
  isRequired: boolean;
  type: string;
  className?: string;
}

const FormInput: React.FunctionComponent<IFormInputProps> = ({
  label,
  placeholder,
  isRequired,
  type,
  className,
}) => {
  return (
    <label className={cn("grid gap-1", className)}>
      <p className="text-[#9e9e9e]">
        {label} {isRequired && <span className="text-[#FF6633]">*</span>}
      </p>
      <Input
        type={type}
        className="bg-[#F5F5F7] border-[#F5F5F7]"
        placeholder={placeholder}
      />
    </label>
  );
};

export default FormInput;
