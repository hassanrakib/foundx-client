import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { loginUser, registerUser } from "@/services/AuthService";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => {
      return await registerUser(userData);
    },
    onSuccess: () => {
      toast.success("User registration successful!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userCredentials) => await loginUser(userCredentials),
    onSuccess: () => {
      toast.success("User logged in successfully!");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};
