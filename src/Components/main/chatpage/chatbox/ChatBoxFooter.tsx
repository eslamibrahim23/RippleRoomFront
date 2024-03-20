import React, { useState } from "react";

// import { BsFillInfoCircleFill } from "react-icons/bs";
// import { FaCircle } from "react-icons/fa";

import { IoMdSend } from "react-icons/io";

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

// import { useEffect, useState } from "react";
import axios from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
("use client");

import { FaMicrophone } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ChatBoxFooter(props) {
  const { sender, reciver, chat } = props;

  const [data, setData] = useState({
    msg: "",
  });
  const onChaneHandler = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };

  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      const response = await axios.post(
        `https://rippleroomback.onrender.com/message/createMessage/${chat._id}`,
        { sender: `${sender._id}`, content: `${data.msg}` }
      );
      if (response) navigate(0);
    } catch (error) {
      console.error("msg request failed:", error);
    }
  };
  return (
    <>
      <div className="typing w-full">
        <div className="text-violet-900 flex items-end w-full">
          <div className="flex-grow overflow-y-auto p-4 w-full">
            <form className="p-4 flex items-center">
              <div className="flex gap-2 p-4 ">
                <FaMicrophone className="text-[1.7rem] text-violet-900  " />
                <BsEmojiSmile className="text-[1.7rem] text-violet-900  " />
              </div>
              <input
                onChange={onChaneHandler}
                name="msg"
                value={data.msg}
                type="text"
                placeholder="Type your message..."
                className="flex-grow border-2 border-violet-900 rounded-lg px-4 py-2"
              />
              {data.msg ? (
                <button
                  onClick={onSubmit}
                  type="submit"
                  className="ml-2 bg-violet-900 text-white px-4 py-2 rounded-lg"
                >
                  <IoMdSend className="text-[1.7rem] " />
                </button>
              ) : (
                <BsEmojiSmile className="text-[1.7rem] text-violet-900  " />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBoxFooter;
