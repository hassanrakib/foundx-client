"use client";
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type FormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};
type FXFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
} & FormConfig;

const FXForm = ({
  children,
  onSubmit,
  defaultValues,
  resolver,
}: FXFormProps) => {
  const formConfig: FormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
