import React from "react";

function WelcomeMessageScreen() {
  return (
    <>
      <div className="text-center	space-y-5 ">
        <div>
          <span className="font-bold text-3xl">Welcome To</span>
          <span className="text-purple-500 font-bold text-3xl mx-1">
            Ripple
          </span>
          <span className="text-blue-500 font-bold text-3xl">Room</span>
        </div>
        <div className="text-base text-xl">Start chat with friends</div>
      </div>
    </>
  );
}

export default WelcomeMessageScreen;
