"use client";
import { Link } from "react-router-dom";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Logo from "./Logo";

// import Drawer from "./Drawer";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "To",
    },
     {
    text: "Ripple",
    className: "text-purple-600 dark:text-purple-600",
  },
  {
    text: "Room.",
    className: "text-blue-500 dark:text-blue-500",
  },
];


  return (
    <>
     
     {/* <Drawer /> */}
     <Link to="/login" style={{ cursor: "pointer" }}>
        <Logo />
      </Link>
      <div className="flex flex-col items-center justify-center h-full px-4">
        <p className="text-neutral-900 dark:text-neutral-200 text-base md:text-lg lg:text-xl xl:text-2xl text-center mb-10">
          You must be the change you wish to see in the world.
        </p>
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-10">
          <Link to={"/login"}>
            <button className="w-full md:w-40 h-10 rounded-xl bg-blue-500 border dark:border-white border-transparent text-white text-sm md:text-base">
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="w-full md:w-40 h-10 rounded-xl bg-white text-black border border-black text-sm md:text-base md:px-2">
              Signup
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
