/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { useNavigate } from "react-router-dom";
import { cn } from "@/utils/cn";
/* eslint-disable @typescript-eslint/no-explicit-any */
("use client");

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../googleSign/firebaseConfig";
import Logo from "./Logo";
// import { useEffect, useState } from "react";
// import { log } from "console";
// import ChatPage from "./ChatPage";

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
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
    userName: yup.string().required().min(3),
    Email: yup.string().required().email(),
    Password: yup
      .string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    cPassword: yup
      .string()
      .required("Confirm Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters")
      .oneOf([yup.ref("Password")], "Passwords do not match"),
  })
  .required();

export default function SignupForm() {
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
    console.log(user);
    const fetchuser = await axios.post(
      "https://rippleroomback.onrender.com/signup",
      { ...user }
    );
    if (fetchuser) {
      navigate("/Login");
    }
  };

  // const [loading, setLoading] = useState(false);
  // const [value, setValue] = useState({});
  const handleclick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
      // setValue({ Email: data.user.email, userName: data.user.displayName });
      localStorage.setItem("email", data.user.email);
      const tt = async () => {
        const fetchuser = axios.post(
          "https://rippleroomback.onrender.com/signup",
          { Email: data.user.email, userName: data.user.displayName }
        );
        console.log(fetchuser);
        navigate("/ChatPage");
      };
      tt();
    });
  };

  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // });
  // if (value) {

  //   console.log(value);
  //    const tt = async()=>{

  //   tt()
  // }

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
        <Logo />

        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black  ">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to Ripple Room 😀
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Sign up to ripple to enjoy chatting with friends
          </p>

          <form className="w-50 my-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="userName">User name</Label>
                <Input
                  id="userName"
                  placeholder="user name"
                  type="text"
                  {...register("userName")}
                />
                <p className="text-red-500 text-md">
                  {errors.userName?.message}
                </p>
              </LabelInputContainer>
            </div>
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
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="cPassword">Confirm Password</Label>
                <Input
                  id="cPassword"
                  placeholder="user name"
                  type="password"
                  {...register("cPassword")}
                />
                <p className="text-red-500 text-md ">
                  {errors.cPassword?.message}
                </p>
              </LabelInputContainer>
            </div>

            <button
              className="bg-gradient-to-br relative group/btn from-purple-500 dark:from-zinc-900 dark:to-zinc-900 to-neutral-400 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)inset,0px-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up
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
  flex bg-gradient-to-br relative group/btn white-500 dark:from-zinc-900 dark:to-zinc-900 to-neutral-400 block dark:bg-zinc-800 w-full  rounded-md h-10 font-medium 
  shadow-md text-blue-500 dark:text-blue-500
  "
          >
            <div className="flex items-center">
              <FontAwesomeIcon
                className="text-purple-500"
                icon={faGoogle}
                style={{ fontSize: "35px" }}
              />
              <button
                onClick={handleclick}
                className="text-2xl text-blue-500 ml-2"
                type="submit"
              >
                oogle
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}