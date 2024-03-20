// import React from 'react'

// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Drawer from "../Drawer";
import Chat from "./chatbox/Chat";
import Users from "./user/Users";
import WelcomeMessageScreen from "./WelcomeMessageScreen";
import axios from "axios";

function MessagePage() {
  const [user, setUserData] = useState([]);
  useEffect(() => {
    const fetchAllUsers = async () => {
      const getAllAsers = await axios.get(
        "https://rippleroomback.onrender.com/user/users"
      );
      setUserData(getAllAsers.data);
    };
    fetchAllUsers();
  }, []);

  const senderId = localStorage.getItem("userId");
  const sender = user.filter((f) => f._id === senderId)[0];

  // console.log(sender);

  const [reciever, setReciever] = useState();
  // const getReciverId = currentUser._id;

  // const [showChat, setShowChat] = useState(true);
  const handleClick = () => {
    // setShowChat(false);
    // console.log(senderId);
    // console.log(getReciverId);
    // const fetchUser = async () => {
    // };
    // fetchUser();
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
          <Users user={user} setReciever={setReciever} />
        </div>
        <div className=" w-6/12 flex items-center justify-center gap-10 h-full">
          {reciever ? <Chat reciever={reciever} sender={sender}/> : <WelcomeMessageScreen />}
        </div>
      </div>
    </>
  );
}

export default MessagePage;
