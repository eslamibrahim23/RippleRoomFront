import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxBody from "./ChatBoxBody";
import { useEffect, useState } from "react";
import axios from "axios";

function Chat(props) {
  const { reciever, sender } = props;
  const recieverId = reciever._id;

  const[chat,setChat]=useState();
  useEffect(() => {
    console.log(sender._id);
    console.log(recieverId);
    const fetchChat = async () => {
      const createChat = await axios.post(
        `https://rippleroomback.onrender.com/chat/getorCreateChat/${sender._id}`,
        { "userId": `${recieverId}` }
      );
      const chat =createChat.data
      setChat(chat);
    };
    fetchChat();
  }, [recieverId]);
  return (
    <>
      <div className="container h-full">
        <div className="w-full h-full bg-slate-300 flex flex-col justify-between ">
          <ChatBoxHeader reciever={reciever} />
          <ChatBoxBody reciever={reciever} sender={sender} chat={chat} />
          <ChatBoxFooter  reciever={reciever} sender={sender} chat={chat}/>
        </div>
      </div>
    </>
  );
}

export default Chat;
