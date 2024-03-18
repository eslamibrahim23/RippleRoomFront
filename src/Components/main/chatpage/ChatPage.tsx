// import React from 'react'

// import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import WelcomeScreen from "./WelcomeScreen";

function ChatPage() {
  return (
    <>
      <div className="h-screen w-full flex ">
        <div className="w-2/12">
          <Drawer />
        </div>

        <div className=" w-10/12 flex items-center justify-center gap-10">
          <WelcomeScreen />
        </div>
      </div>
    </>
  );
}

export default ChatPage;
