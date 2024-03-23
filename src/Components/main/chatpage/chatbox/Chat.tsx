import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxFooter from "./ChatBoxFooter";
import ChatBoxBody from "./ChatBoxBody";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { io } from "socket.io-client";

function Chat(props) {
  const socket = useRef();
  const { reciever, sender } = props;
  const recieverId = reciever._id;

  const [chat, setChat] = useState();
  useEffect(() => {
    console.log(sender._id);
    console.log(recieverId);
    const fetchChat = async () => {
      const createChat = await axios.post(
        `https://rippleroomback.onrender.com/chat/getorCreateChat/${sender._id}`,
        { userId: `${recieverId}` }
      );
      const chat = createChat.data;
      setChat(chat);
    };
    fetchChat();
  }, [recieverId]);
  console.log(reciever);

  useEffect(() => {
    if (sender) {
      socket.current = io("http://localhost:3000");
      socket.current.emit("add-user", sender._id);
    }
  }, [sender]);
  return (
    <>
      <div className="container h-full">
        <div className="w-full h-full bg-slate-300 flex flex-col justify-between ">
          <ChatBoxHeader reciever={reciever} />
          <ChatBoxBody reciever={reciever} sender={sender} chat={chat} />
          <ChatBoxFooter reciever={reciever} sender={sender} chat={chat} socket={socket} />
        </div>
      </div>
    </>
  );
}

export default Chat;
