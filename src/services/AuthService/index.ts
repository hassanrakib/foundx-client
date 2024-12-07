"use server";

import axiosInstance from "@/lib/AxiosInstance";

import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (newUser: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", newUser);

    // if successful in creating a user
    if (data.success) {
      cookies().set("accessToken", data.data?.accessToken);
      cookies().set("refreshToken", data.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
