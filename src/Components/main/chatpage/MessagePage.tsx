// import React from 'react'

// import { Link } from "react-router-dom";
import { useState } from "react";
import Drawer from "../Drawer";
import Chat from "./Chat";
import Users from "./Users";
import WelcomeMessageScreen from "./WelcomeMessageScreen";

function MessagePage() {
  const [b, setb] = useState(true);
  //   setb('true');
  // console.log(b);
setTimeout(()=>{
setb(false)
},2000)
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
          {b ? <WelcomeMessageScreen /> : <Chat />}
        </div>
      </div>
    </>
  );
}

export default MessagePage;
