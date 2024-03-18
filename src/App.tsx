/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { LoginForm } from "./Components/main/LoginForm";
// import { SignupForm } from "./components/main/SignupForm";

import SignupForm from "./Components/main/SignupForm";
import { WavyBackground } from "./Components/ui/wavy--background";
import ErrorPage from "./Components/main/ErrorPage";
import LoginForm from "./Components/main/LoginForm";
import ChatPage from "./Components/main/chatpage/ChatPage";
import MessagePage from "./Components/main/chatpage/MessagePage";
import ChatBoxPage from "./Components/main/chatpage/ChatBoxPage";
import EditProfilePage from "./Components/main/edituser/EditProfilePage";

import { TypewriterEffectDemo } from "./Components/main/TypewriterEffectDemo";

// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TypewriterEffectDemo />,
    errorElement: <ErrorPage />,
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
    path: "/ChatPage",
    element: <ChatPage />,
  },
  {
    path: "msg",
    element: <MessagePage />,
  },
  {
    path: "chatbox",
    element: <ChatBoxPage />,
  },
  {
    path: "editprofile",
    element: <EditProfilePage />,
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
        <RouterProvider router={router} />
      </WavyBackground>
    </>
  );
}
export default App;
