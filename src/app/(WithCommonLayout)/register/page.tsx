"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";

import FXForm from "@/components/form/FXForm";
import FXInput from "@/components/form/FXInput";
import { useUserRegistration } from "@/hooks/auth.hook";

/* eslint-disable react/jsx-sort-props */
const Register = () => {
  const {
    mutate: handleUserRegistration,
    data,
    isPending,
    isSuccess,
    isError,
  } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const newUser = {
      ...data,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    handleUserRegistration(newUser);
  };

  return (
    <div className="shadow-lg rounded-lg p-8 w-full max-w-sm mx-auto mt-5">
      <h2 className="text-2xl font-bold text-gray-100 text-center mb-6">
        FoundX Register
      </h2>
      <FXForm
        onSubmit={onSubmit}
        defaultValues={{
          name: "Rakib Hassan",
          email: "mailrakibhassan@gmail.com",
          password: "password123",
          mobileNumber: "01995069494",
        }}
      >
        <div className="mb-4">
          <FXInput label="Name" name="name" type="text" />
        </div>
        <div className="mb-4">
          <FXInput label="Email" name="email" type="email" />
        </div>

        <div className="mb-6">
          <FXInput label="password" name="password" type="password" />
        </div>
        <div className="mb-4">
          <FXInput label="Mobile No." name="mobileNumber" type="text" />
        </div>
        <div>
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
          >
            Register
          </Button>
        </div>
        <p className="text-sm text-gray-500 text-center mt-4">
          Have an account?
          <Link href="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
      </FXForm>
    </div>
  );
};

export default Register;
