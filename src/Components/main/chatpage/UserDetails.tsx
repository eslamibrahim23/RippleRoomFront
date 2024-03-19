import React from "react";
// import i from "../../../assets/images/R.png";

function UserDetails(props) {
  const { user } = props;
  return (
    <>
      <div className="container mt-5">
        <div className=" flex gap-4">
          <div className="">
            <img
              className="rounded-full w-16 h-16"
              src={`https://rippleroomback.onrender.com/${user.Image}`}
              alt=""
            />
          </div>
          <div>
            <h1 className="text-white font-bold text-xl">{user.userName}</h1>
            <p className="text-white">{user.Bio}</p>
          </div>
        </div>
        <div className="bg-gray-400 via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-11/12" />
      </div>
    </>
  );
}

export default UserDetails;
