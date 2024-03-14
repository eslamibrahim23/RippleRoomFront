"use client";
import { WavyBackground } from "../src/components/ui/wavy-background";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginForm } from "./components/main/LoginForm";
import { SignupForm } from "./components/main/SignupForm";
import { TypewriterEffectDemo } from "./components/main/TypewriterEffectSmooth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TypewriterEffectDemo />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignupForm />,
  },
]);
function App() {
  return (
    <WavyBackground className="max-w-4xl mx-auto p-auto">
      <header className="flex start-10 py-8 fixed top-0 w-full ">
        <a href="">
          <span className="text-purple-500 sm:text-xl md:text-3xl lg:text-5xl font-bold text-center mr-3">
            Ripple
          </span>
          <span className="text-blue-500 sm:text-lg md:text-3xl lg:text-3xl font-bold text-center">
            Room
          </span>
        </a>
      </header>
      <RouterProvider router={router} />
    </WavyBackground>
  );
}
export default App;
