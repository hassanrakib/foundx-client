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
  const {
    register,
    formState: { errors },
  } = useFormContext();

  console.log(errors);

  return (
    <Input
      {...register(name)}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
      isInvalid={!!errors[name]}
      label={label}
      type={type}
      variant={variant}
      size={size}
      required={required}
    />
  );
};

export default FXInput;
