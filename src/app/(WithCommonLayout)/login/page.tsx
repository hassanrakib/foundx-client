"use client";
import { Button } from "@nextui-org/button";
import Link from "next/link";

import FXForm from "@/components/form/FXForm";
import FXInput from "@/components/form/FXInput";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginValidationSchema } from "@/schemas/login.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";

/* eslint-disable react/jsx-sort-props */
const Login = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="shadow-lg rounded-lg p-8 w-full max-w-sm mx-auto mt-5">
      <h2 className="text-2xl font-bold text-gray-100 text-center mb-6">
        FoundX Login
      </h2>
      <FXForm onSubmit={onSubmit} resolver={zodResolver(loginValidationSchema)}>
        <div className="mb-4">
          <FXInput label="Email" name="email" type="email" />
        </div>

        <div className="mb-6">
          <FXInput label="password" name="password" type="password" />
        </div>
        <div>
          <Button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
          >
            Login
          </Button>
        </div>
        <p className="text-sm text-gray-500 text-center mt-4">
          Do not have an account?
          <Link href="/register" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </FXForm>
    </div>
  );
};

export default Login;
