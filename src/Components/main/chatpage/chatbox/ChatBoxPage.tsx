// import React from 'react'

// import { Link } from "react-router-dom";
import Chat from "./Chat";
import Drawer from "../../Drawer";
import Users from "../user/Users";

function ChatBoxPage() {
  return (
    <>
      <div className="h-screen w-full flex ">
        <div className="w-2/12">
          <Drawer />
        </div>
        <div className=" w-4/12 flex items-center justify-center gap-10">
          <Users />
        </div>
        <div className=" w-6/12 flex items-center justify-center gap-10">
          <Chat />
        </div>
      </div>
    </>
  );
}

export default ChatBoxPage;
