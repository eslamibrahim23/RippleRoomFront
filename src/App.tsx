/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginForm } from "./Components/main/LoginForm";
// import { SignupForm } from "./components/main/SignupForm";
import { TypewriterEffectDemo } from "./Components/main/TypewriterEffectSmooth";
import SignupForm from "./Components/main/SignupForm";
import EditProfile from './Components/main/EditProfile'
import { WavyBackground } from "./Components/ui/wavy-background";

// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

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
  {
    path: "/profile/:id",
    element: <EditProfile/>,
  },
]);
function App() {
  return (
    <>
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          if (typeof credentialResponse.credential === "string") {
            const credentialResponseDecoded = jwtDecode(
              credentialResponse.credential
            );
            // Now you can access the decoded JWT contents
            console.log(credentialResponseDecoded);
          }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      /> */}
      <WavyBackground className=" w-full mx-auto p-auto">
        <div className="flex start-10 py-8 fixed top-0 w-full ">
          <a href="/Signup">
            <span className="text-purple-500 sm:text-xl md:text-3xl lg:text-5xl font-bold text-center mr-3">
              Ripple
            </span>
            <span className="text-blue-500 sm:text-lg md:text-3xl lg:text-3xl font-bold text-center">
              Room
            </span>
          </a>
        </div>
        <RouterProvider router={router} />
      </WavyBackground>
    </>
  );
}
export default App;
