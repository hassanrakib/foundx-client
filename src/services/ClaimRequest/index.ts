"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";

export const addClaimRequest = async (claimRequest: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/claim-request", claimRequest);

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
