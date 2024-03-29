/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";
/* eslint-disable @typescript-eslint/no-explicit-any */
("use client");

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../googleSign/firebaseConfig";
import { useEffect, useState } from "react";
import Logo from "./Logo";
// import ChatPage from "./ChatPage";

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      <Logo />
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    </>
  );
};
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const schema = yup
  .object({
    Email: yup.string().required().email(),
    Password: yup
      .string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
  })
  .required();

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });
  // const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const onSubmit = async (user) => {
    try {
      const response = await axios.post(
        "https://rippleroomback.onrender.com/login",
        { ...user }
      );

      if (response.data.token && response.data.user) {
        localStorage.setItem("token", response.data.token);
        const userId = response.data.user._id;
        localStorage.setItem("userId", userId);
        navigate("/ChatPage");
      } else {
        // Handle error if token or userId is missing
        console.error("Token or userId is missing in response");
      }
    } catch (error) {
      // Handle error if login request fails
      console.error("Login request failed:", error);
    }
  };







//google
  const [value, setValue] = useState("");
  const handleclick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  }; 
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  const navigatee = useNavigate();
  if (value) navigatee("/ChatPage");

  return (
    <>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black  ">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome Back 😀
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Login to ripple to enjoy chatting with friends
        </p>

        <form className="w-50 my-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="Email">Email</Label>
              <Input
                id="Email"
                placeholder="Email"
                type="text"
                {...register("Email")}
              />
              <p className="text-red-500 text-md">{errors.Email?.message}</p>
            </LabelInputContainer>
          </div>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="Password">Password</Label>
              <Input
                id="Password"
                placeholder="Password"
                type="password"
                {...register("Password")}
              />
              <p className="text-red-500 text-md ">
                {errors.Password?.message}
              </p>
            </LabelInputContainer>
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-purple-500 dark:from-zinc-900 dark:to-zinc-900 to-neutral-400 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Login
            <BottomGradient />
          </button>
        </form>

        <div className="flex flex-row items-center space-y-2 md:space-y-0 md:space-x-2 mb-2 w-full">
          <div className="bg-gray-200 via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-32" />
          <p className="text-neutral-600 text-xs max-w-sm  dark:text-neutral-300 text-center">
            OR CONTINUE WITH
          </p>
          <div className="bg-gray-200 via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-32" />
        </div>

        <div
          className="
        justify-center
        items-center
        flex bg-gradient-to-br relative group/btn from-sky-500 dark:from-zinc-900 dark:to-zinc-900 to-neutral-400 block dark:bg-zinc-800 w-full  rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        >
          <div className="">
            <img
              className="w-8 h-8 mx-auto"
              src="src/assets/images/google-svgrepo-com.svg"
              alt=""
            />
          </div>
          <button onClick={handleclick} className="text-2xl" type="submit">
            oogle
          </button>
        </div>
      </div>
    </>
  );
}
