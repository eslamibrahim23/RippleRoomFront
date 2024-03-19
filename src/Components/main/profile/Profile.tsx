import React from "react";
import Drawer from "../Drawer";
import ShowProfile from "./ShowProfile";

function Profile() {
  return (
    <>
      <div className="h-screen w-full flex ">
        <div className="w-2/12">
          <Drawer />
        </div>
        <div className=" w-10/12 flex items-center justify-center gap-10">
          <ShowProfile />
        </div>
      </div>
    </>
  );
}

export default Profile;
