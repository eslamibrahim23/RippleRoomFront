// import React from 'react'

import { Link } from "react-router-dom";
import Drawer from "../main/Drawer";

function Home() {
  return (
    <>
      <div className="h-screen w-full flex ">
        <div className="w-2/12">
          <Drawer />
        </div>

        <div className=" w-10/12 flex items-center justify-center gap-10">
          <div className="text-center	space-y-5 ">
            <div>
              <span className="font-bold text-5xl">Welcome To</span>
              <span className="text-purple-500 font-bold text-5xl mx-1">
                Ripple
              </span>
              <span className="text-blue-500 font-bold text-5xl">Room</span>
            </div>
            <div className="text-base text-xl">
              Connect and chatting with friends easier and faster around the
              world.
            </div>
            <Link to="/Msg">
              <button className="btn py-3 mt-5 border-0 w-1/3 font-semibold text-xl bg-violet-500 text-white rounded-lg hover:bg-white hover:text-purple-600">
                Let's Start
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
