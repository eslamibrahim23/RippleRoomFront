import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";
function Logooooooooooooooooooo() {
  // const socket = io("http://localhost:3000");

  const socket = useMemo(() => io("http://localhost:3000"), []);

  const [message, setMessage] = useState("");
  const [receiver, setReceiver] = useState("");
  const [senderID, setSenderID] = useState("");
  const [messages, setMessages] = useState([]);
  console.log(messages);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message, receiver });
    setMessage("");
  };

  useEffect(() => {
    setSenderID(socket.id);
    socket.on("connect", () => {
      console.log("connected", socket.id);
    });
    // socket.on("welcome", (s) => console.log(s));
    socket.on("receive-message", (data) => {
      setMessages((messages) => [...messages,data]);
    });
    // return () => {
    //   socket.disconnect();
    // };
  }, []);
  return (
    <>
      <h1>{senderID}</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
        />
        <input
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          type="text"
        />
        <button type="submit">add</button>
      </form>


      {
        messages.map((m,i)=>{
          return(
            <div key={i}>{m}</div>
          )
        })
      }
    </>
  );
}

export default Logooooooooooooooooooo;
