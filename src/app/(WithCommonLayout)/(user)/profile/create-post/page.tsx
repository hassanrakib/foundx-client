"use client";

import FXDatePicker from "@/components/form/FXDatePicker";
import FXInput from "@/components/form/FXInput";
import { dateToISO } from "@/utils/dateToISO";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

const CreatePost = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map(
        (question: { value: string }) => question.value
      ),
      dateFound: dateToISO(data.dateFound),
    };

    console.log(postData);
  };

  const handleFieldAppend = () => {
    append({ name: "question" });
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXInput type="text" name="title" label="Title" />
            </div>
            <div className="min-w-fit flex-1">
              <FXDatePicker name="dateFound" label="Found Date" />
            </div>
          </div>
          <Divider className="my-4" />
          <div className="flex justify-between items-center">
            <h1 className="text-xl">Owner verification questions:</h1>
            <Button onClick={() => handleFieldAppend()}>Append</Button>
          </div>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center my-2">
              <FXInput
                type="text"
                name={`questions.${index}.value`}
                label="Question"
              />
              <Button onClick={() => remove(index)}>Remove</Button>
            </div>
          ))}
          <Divider className="my-4" />
          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
