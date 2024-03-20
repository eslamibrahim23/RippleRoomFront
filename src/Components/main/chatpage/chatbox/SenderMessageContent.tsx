import React from "react";

function SenderMessageContent(props) {
  const { msg } = props;

  console.log(msg);

  return (
    <>
      <div>
        <div className="i-user flex gap-5 p-5 ">
          <div className="icon ">
            <img
              className="img  w-14  rounded-full place-content-center"
              alt="Tailwind CSS chat bubble component"
              src={`https://rippleroomback.onrender.com/${msg.Image}`}
            />
          </div>

          <div className=" border w-72 p-1 border-violet-900 rounded-xl 	">
            <div className="text-2xl  text-violet-900 font-medium ">
              {msg.content}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SenderMessageContent;
