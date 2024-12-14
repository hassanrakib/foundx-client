"use server";

import { envConfig } from "@/config/envConfig";
import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const createPost = async (formData: FormData): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/items", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("posts");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getPost = async (itemId: string) => {
  let fetchOptions = {};

  fetchOptions = {
    store: "no-store",
  };

  const res = await fetch(`${envConfig.baseApi}/items/${itemId}`, fetchOptions);

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  return res.json();
};
