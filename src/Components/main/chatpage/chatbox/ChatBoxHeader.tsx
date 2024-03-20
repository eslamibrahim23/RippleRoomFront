import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";




function ChatBoxHeader(props) {
  const { reciever } = props;
//   console.log(reciever);



  return (
    <>
      <div className="user flex  justify-between border-b-2 p-2 border-violet-900">
        <div className="i-user flex gap-3 ">
          <div className="icon ">
            <img
              className="img  w-14  rounded-full place-content-center"
              alt="Tailwind CSS chat bubble component"
              src={`https://rippleroomback.onrender.com/${reciever.Image}`}
            />
          </div>
          <div className="name ">
            <div className="text-2xl  text-violet-900 font-medium ">{reciever.userName}</div>
            <div className="flex gap-1 ">
              <div>
                <FaCircle className="text-green-500 mt-1" />
              </div>
              <div className="text-green-500 text-xl mb-2">Active Now</div>
            </div>
          </div>
        </div>
        <div className="info ">
          <BsFillInfoCircleFill className="text-[1.7rem]  text-violet-900 mt-3" />
        </div>
      </div>
    </>
  );
}

export default ChatBoxHeader;
