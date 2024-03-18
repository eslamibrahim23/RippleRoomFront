import React from "react";
import Drawer from "../chatpage/Drawer";
import EditProfile from "./EditProfile";

function EditProfilePage() {
  return (
    <>
      <div className="h-screen w-full flex ">
        <div className="w-2/12">
          <Drawer />
        </div>
        <div className="h-screen w-10/12 flex items-center justify-center gap-10">
          <EditProfile />
        </div>
      </div>
    </>
  );
}

export default EditProfilePage;
