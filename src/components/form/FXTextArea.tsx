import { IInput } from "@/types";
import { Textarea } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

const FXTextArea = ({ name, label, variant = "bordered" }: IInput) => {
  const { register } = useFormContext();

  return (
    <Textarea {...register(name)} minRows={6} label={label} variant={variant} />
  );
};

export default FXTextArea;
