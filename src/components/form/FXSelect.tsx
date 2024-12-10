"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { useFormContext } from "react-hook-form";

import { IInput } from "@/types";

interface FXSelectProps extends IInput {
  options: { key: string; label: string }[];
}

const FXSelect = ({ name, label, options, disabled }: FXSelectProps) => {
  const { register } = useFormContext();

  return (
    <Select
      {...register(name)}
      className="max-w-xs"
      label={label}
      isDisabled={disabled}
    >
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
