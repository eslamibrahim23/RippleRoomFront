/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { LoginForm } from "./Components/main/LoginForm";
// import { SignupForm } from "./components/main/SignupForm";

import { WavyBackground } from "./Components/ui/wavy--background";
import ErrorPage from "./Components/main/ErrorPage";

import ChatPage from "./Components/main/chatpage/ChatPage";
import MessagePage from "./Components/main/chatpage/MessagePage";
import ChatBoxPage from "./Components/main/chatpage/chatbox/ChatBoxPage";
import EditProfilePage from "./Components/main/edituser/EditProfilePage";

import { TypewriterEffectDemo } from "./Components/main/TypewriterEffectDemo";
import Profile from "./Components/main/profile/Profile";
import LoginForm from "./Components/main/LoginForm";
import SignupForm from "./Components/main/SignupFrom";
import Logooooooooooooooooooo from "./Components/main/Logooooooooooooooooooo";

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
    path: "profile",
    element: <Profile />,
  },
  {
    path: "editprofile",
    element: <EditProfilePage />,
  },
  {
    path: "test",
    element: <Logooooooooooooooooooo />,
  },
]);
function App() {
  return (
    <>
      <WavyBackground className="w-full mx-auto p-auto">
        <RouterProvider router={router} />
      </WavyBackground>
    </>
  );
}
export default App;
