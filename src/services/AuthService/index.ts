"use server";

import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

import axiosInstance from "@/lib/AxiosInstance";

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

export const loginUser = async (userCredentials: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userCredentials);

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

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
  }

  return decodedToken;
};
