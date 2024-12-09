"use client";
import { IInput } from "@/types";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface FXInputProps extends IInput {}

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
