import { IInput } from "@/types";

import { DatePicker } from "@nextui-org/date-picker";
import { Controller } from "react-hook-form";

interface FXDatePickerProps extends IInput {}

const FXDatePicker = ({ name, label }: FXDatePickerProps) => {
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker className="max-w-[284px]" label={label} {...fields} />
      )}
    />
  );
};

export default FXDatePicker;
