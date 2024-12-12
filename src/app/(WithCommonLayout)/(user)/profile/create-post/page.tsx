"use client";

import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

import FXDatePicker from "@/components/form/FXDatePicker";
import FXInput from "@/components/form/FXInput";
import { dateToISO } from "@/utils/dateToISO";
import FXSelect from "@/components/form/FXSelect";
import { allDistict } from "@bangladeshi/bangladesh-address";
import { useGetCategories } from "@/hooks/categories.hook";
import { ChangeEvent, useState } from "react";
import { Image } from "@nextui-org/image";
import FXTextArea from "@/components/form/FXTextArea";
import { useUser } from "@/contexts/user.provider";
import { useCreatePost } from "@/hooks/post.hook";
import Loading from "@/components/UI/Loading";
import { useRouter } from "next/navigation";

const options = allDistict()
  .sort()
  .map((district: string) => ({
    key: district,
    label: district,
  }));

const CreatePost = () => {
  const router = useRouter();
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);
  const [imagePreviews, setImagePreviews] = useState<string[] | []>([]);

  const { user } = useUser();
  const {
    mutate: handleCreatePost,
    isPending: createPostPending,
    isSuccess: createPostSuccess,
  } = useCreatePost();

  const {
    data: categories,
    isLoading: categoriesLoading,
    isSuccess: categorySuccess,
  } = useGetCategories();

  let categoryOptions: { key: string; label: string }[] = [];

  if (categories?.data && !categoriesLoading) {
    categoryOptions = categories.data.map(
      (category: { name: string; _id: string }) => ({
        key: category._id,
        label: category.name,
      })
    );
  }

  const methods = useForm();
  const { control, handleSubmit } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const formData = new FormData();

    const postData = {
      ...data,
      user: user?._id,
      questions: data.questions.map(
        (question: { value: string }) => question.value
      ),
      dateFound: dateToISO(data.dateFound),
    };

    formData.append("data", JSON.stringify(postData));
    for (const image of imageFiles) {
      formData.append("itemImages", image);
    }

    handleCreatePost(formData);
  };

  const handleFieldAppend = () => {
    append({ name: "question" });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setImageFiles((prevImgFiles) => [...prevImgFiles, file]);

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreviews((prevImages) => [
          ...prevImages,
          reader.result as string,
        ]);
      };

      reader.readAsDataURL(file);
    }
  };

  if (!createPostPending && createPostSuccess) {
    return router.push("/");
  }

  return (
    <>
      {createPostPending && <Loading />}
      <div>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Title" name="title" type="text" />
              </div>
              <div className="min-w-fit flex-1">
                <FXDatePicker label="Found Date" name="dateFound" />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXInput label="Location" name="location" type="text" />
              </div>
              <div className="min-w-fit flex-1">
                <FXSelect name="city" label="City" options={options} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 py-2">
              <div className="min-w-fit flex-1">
                <FXSelect
                  name="category"
                  label="Category"
                  options={categoryOptions}
                  disabled={!categorySuccess}
                />
              </div>
              <div className="min-w-fit flex-1">
                <label
                  className="border-2 border-gray-500 block w-full p-3 rounded cursor-pointer"
                  htmlFor="image"
                >
                  Upload image
                </label>
                <input
                  className="hidden"
                  multiple
                  type="file"
                  id="image"
                  onChange={handleImageUpload}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-x-2">
              {imagePreviews.map((imgUrl) => (
                <Image
                  key={imgUrl}
                  src={imgUrl}
                  height={60}
                  width={60}
                  className="rounded-xl border-1 border-dashed border-spacing-1"
                />
              ))}
            </div>
            <div>
              <FXTextArea name="description" label="Description" />
            </div>
            <Divider className="my-4" />
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Owner verification questions:</h1>
              <Button onClick={() => handleFieldAppend()}>Append</Button>
            </div>
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-center my-2">
                <FXInput
                  label="Question"
                  name={`questions.${index}.value`}
                  type="text"
                />
                <Button onClick={() => remove(index)}>Remove</Button>
              </div>
            ))}
            <Divider className="my-4" />
            <Button type="submit">Post</Button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default CreatePost;
