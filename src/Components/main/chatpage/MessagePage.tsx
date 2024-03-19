// import React from 'react'

// import { Link } from "react-router-dom";
import { useState } from "react";
import Drawer from "../Drawer";
import Chat from "./Chat";
import Users from "./Users";
import WelcomeMessageScreen from "./WelcomeMessageScreen";

function MessagePage() {
  const [showChat, setShowChat] = useState(true);

  const handleClick = () => {
    setShowChat(false);

    const fetchUser = async () => {
      console.log("dd");

      // const getReceiverId=await axios.get('')
      // console.log(getUserById);
    };
    fetchUser();

    ///////////////////////////-create chat

    //1-sernder id from token
    //2-reciver id from users in message
  };

  return (
    <>
      <div className="h-screen w-full flex ">
        <div className="w-2/12">
          <Drawer />
        </div>
        <div
          onClick={handleClick}
          className="cursor-pointer w-4/12 flex items-center justify-center gap-10"
        >
          <Users />
        </div>
        <div className=" w-6/12 flex items-center justify-center gap-10">
          {showChat ? <WelcomeMessageScreen /> : <Chat />}
        </div>
      </div>
    </>
  );
}

export default MessagePage;
