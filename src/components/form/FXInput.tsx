"use client";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

type FXInputProps = {
  variant?: "bordered" | "flat" | "faded" | "underlined";
  size?: "md" | "sm" | "lg";
  required?: boolean;
  type: string;
  label: string;
  name: string;
};

const FXInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: FXInputProps) => {
  const { register } = useFormContext();

  return (
    <Input
      label={label}
      type={type}
      variant={variant}
      size={size}
      required={required}
      {...register(name)}
    />
  );
};

export default FXInput;
