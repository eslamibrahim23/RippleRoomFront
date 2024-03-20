import React from "react";

function RecieverMessageContent(props) {
  const { msg } = props;

  console.log(msg);

  return (
    <>
    <div>
          <div className="i-user flex flex-row-reverse gap-5 p-5 ">
            <div className="icon ">
              <img
                className="img  w-14  rounded-full place-content-center"
                alt="Tailwind CSS chat bubble component"
                src={`https://rippleroomback.onrender.com/${msg.Image}`}
              />
            </div>
            <div className=" txt-info border w-72 p-1 pl-5 border-violet-900 rounded-xl	">
              <div className="text-2xl  text-violet-900 font-medium ">
              {msg.content}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default RecieverMessageContent;
