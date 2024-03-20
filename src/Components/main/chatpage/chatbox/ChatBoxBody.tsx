import axios from "axios";
import React, { useEffect, useState } from "react";

import RecieverMessageContent from "./RecieverMessageContent";
import SenderMessageContent from "./SenderMessageContent";

function ChatBoxBody(props) {
  const { sender, chat } = props;
  // console.log(chat);
  const [allMsg, setAllMsg] = useState();
  // console.log(sender);
  // console.log(reciever);
  useEffect(() => {
    console.log(chat);
    const fetchChat = async () => {
      const getAllMsgInChat = await axios.get(
        `https://rippleroomback.onrender.com/message/messagesChatId/${chat._id}`
      );
      console.log(getAllMsgInChat);
      const allMsgInChat = getAllMsgInChat.data;
      setAllMsg(allMsgInChat);
    };
    fetchChat();
  }, [chat]);


  return (
    <>
      <div className="content h-fixed overflow-auto">
        {allMsg
          ? allMsg.map((m) => {
              return (
                <>
                  <div>
                    {(m.sender._id === sender._id )? (
                      <SenderMessageContent msg={m} />
                    ) : (
                      <RecieverMessageContent msg={m} />
                    )}
                  </div>
                </>
              );
            })
          : "loading"}
 
      </div>
    </>
  );
}

export default ChatBoxBody;
