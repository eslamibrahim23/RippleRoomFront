// import React, { useEffect, useMemo, useState } from "react";

// // import { BsFillInfoCircleFill } from "react-icons/bs";
// // import { FaCircle } from "react-icons/fa";

// // import { IoMdSend } from "react-icons/io";

// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable no-unused-vars */

// // import { useEffect, useState } from "react";
// // import axios from "axios";

// /* eslint-disable @typescript-eslint/no-explicit-any */
// ("use client");

// import { FaMicrophone } from "react-icons/fa";
// import { BsEmojiSmile } from "react-icons/bs";
// // import { useNavigate } from "react-router-dom";

// import { io } from "socket.io-client";
// import { log } from "console";

// function ChatBoxFooter(props) {
//   // console.log(props);

//   const { sender, reciever, chat } = props;

//   const socket = useMemo(() => io("http://localhost:3000"), []);

//   const [message, setMessage] = useState("");
//   const [receiverID, setReceiverID] = useState("");
//   const [senderID, setSenderID] = useState("");
//   const [messages, setMessages] = useState([]);
//   // console.log(messages);

//   // console.log(reciever);

//   useEffect(() => {
//     setReceiverID("i3-jZjDqThbSaRB0AAA-");
//     // setReceiverID(reciever._id);
//   }, []);
//   // console.log(receiverID);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     socket.emit("message", { message, receiverID });
//     setMessage("");
//   };

//   // const onSubmit = async () => {
//   //   try {
//   //     const response = await axios.post(
//   //       `https://rippleroomback.onrender.com/message/createMessage/${chat._id}`,
//   //       { sender: `${sender._id}`, content: `${data.msg}` }
//   //     );

//   //   } catch (error) {
//   //     console.error("msg request failed:", error);
//   //   }
//   // };

//   useEffect(() => {
//     setSenderID(socket.id);
//     socket.on("connect", () => {
//       console.log("connected", socket.id);
//     });
//     // socket.on("welcome", (s) => console.log(s));
//     socket.on("receive-message", (data) => {
//       setMessages((messages) => [...messages, data]);
//     });
//     // return () => {
//     //   socket.disconnect();
//     // };
//   }, []);

//   return (
//     <>
//       <h1>{senderID}</h1>

//       <div className="typing w-full">
//         <div className="text-violet-900 flex items-end w-full">
//           <div className="flex-grow overflow-y-auto p-4 w-full">
//             <form className="p-4 flex items-center" onSubmit={handleSubmit}>
//               <div className="flex gap-2 p-4 ">
//                 <FaMicrophone className="text-[1.7rem] text-violet-900  " />
//                 <BsEmojiSmile className="text-[1.7rem] text-violet-900  " />
//               </div>
//               <input
//                 name="msg"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 type="text"
//                 placeholder="Type your message..."
//                 className="flex-grow border-2 border-violet-900 rounded-lg px-4 py-2"
//               />
//               {/* {data.msg ? (
//                 <button

//                   type="submit"
//                   className="ml-2 bg-violet-900 text-white px-4 py-2 rounded-lg"
//                 >
//                   <IoMdSend className="text-[1.7rem] " />
//                 </button>
//               ) : (
//                 <BsEmojiSmile className="text-[1.7rem] text-violet-900  " />
//               )} */}
//               <button type="submit">f</button>
//             </form>

//             {messages.map((m, i) => {
//               return <div key={i}>{m}</div>;
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ChatBoxFooter;

// // import React, { useState } from "react";

// // // import { BsFillInfoCircleFill } from "react-icons/bs";
// // // import { FaCircle } from "react-icons/fa";

// // import { IoMdSend } from "react-icons/io";

// // /* eslint-disable react-hooks/rules-of-hooks */
// // /* eslint-disable no-unused-vars */

// // // import { useEffect, useState } from "react";
// // import axios from "axios";

// // /* eslint-disable @typescript-eslint/no-explicit-any */
// // ("use client");

// // import { FaMicrophone } from "react-icons/fa";
// // import { BsEmojiSmile } from "react-icons/bs";
// // import { useNavigate } from "react-router-dom";

// // function ChatBoxFooter(props) {
// //   const { sender, reciever, chat, socket } = props;
// // const[messages,setMessage]=useState([])
// //   const [data, setData] = useState({
// //     msg: "",
// //   });
// //   const onChaneHandler = (e) => {
// //     const newData = { ...data };
// //     newData[e.target.name] = e.target.value;
// //     setData(newData);
// //   };

// //   const onSubmit = async (data.msg) => {
// //     try {
// //       const response = await axios.post(
// //         `https://rippleroomback.onrender.com/message/createMessage/${chat._id}`,
// //         { sender: `${sender._id}`, content: `${data.msg}` }
// //       );

// //       socket.current.emit("send-msg", {
// //         to:reciever._id;
// //         from:sender._id;
// //         message:data.msg
// //       });

// //       const msgs=[...messages]
// //       data.msg.push()
// //     } catch (error) {
// //       console.error("msg request failed:", error);
// //     }
// //   };
// //   return (
// //     <>
// //       <div className="typing w-full">
// //         <div className="text-violet-900 flex items-end w-full">
// //           <div className="flex-grow overflow-y-auto p-4 w-full">
// //             <form className="p-4 flex items-center">
// //               <div className="flex gap-2 p-4 ">
// //                 <FaMicrophone className="text-[1.7rem] text-violet-900  " />
// //                 <BsEmojiSmile className="text-[1.7rem] text-violet-900  " />
// //               </div>
// //               <input
// //                 onChange={onChaneHandler}
// //                 name="msg"
// //                 value={data.msg}
// //                 type="text"
// //                 placeholder="Type your message..."
// //                 className="flex-grow border-2 border-violet-900 rounded-lg px-4 py-2"
// //               />
// //               {data.msg ? (
// //                 <button
// //                   onClick={onSubmit}
// //                   type="submit"
// //                   className="ml-2 bg-violet-900 text-white px-4 py-2 rounded-lg"
// //                 >
// //                   <IoMdSend className="text-[1.7rem] " />
// //                 </button>
// //               ) : (
// //                 <BsEmojiSmile className="text-[1.7rem] text-violet-900  " />
// //               )}
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default ChatBoxFooter;

// // // ChatComponent.js
// // import React, { useState, useEffect } from 'react';
// // import {io} from 'socket.io-client';

// // const ENDPOINT = 'http://localhost:3000';

// // const ChatBoxFooter = () => {
// //   const [messages, setMessages] = useState([]);
// //   const [input, setInput] = useState('');
// //   const socket = io(ENDPOINT);

// //     const [receiverID, setReceiverID] = useState("");

// //       useEffect(() => {
// //     setReceiverID(receiverID);
// //     // setReceiverID(reciever._id);
// //   }, []);

// //   console.log(receiverID);

// //   useEffect(() => {

// //     // Listen for incoming chat messages from the server
// //     socket.on('chatMessage', (message,receiverID) => {
// //       setMessages((prevMessages) => [...prevMessages, message]);
// //     });

// //     return () => {
// //       socket.disconnect(); // Clean up socket connection when component unmounts
// //     };
// //   }, [socket]);

// //   const handleMessageSubmit = (e) => {
// //     e.preventDefault();
// //     // Send the message to the server
// //     socket.emit('chatMessage', input);
// //     setInput('');
// //   };

// //   return (
// //     <div>
// //       <h2>Chat Component</h2>
// //       <ul>
// //         {messages.map((message, index) => (
// //           <li key={index}>{message}</li>
// //         ))}
// //       </ul>
// //       <form onSubmit={handleMessageSubmit}>
// //         <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
// //         <button type="submit">Send</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ChatBoxFooter;


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