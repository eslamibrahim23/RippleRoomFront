// import React from 'react'
import {Link} from "react-router-dom"



function Home() {
  return (
    <div>


<div className="text-center space-y-5 px-4 md:px-0">
  <div className="md:flex md:flex-col md:items-center">
    <div>
      <span className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Welcome To</span> 
      <span className="text-purple-500 font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mx-1">Ripple</span>
      <span className="text-blue-500 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Room</span> 
    </div>
    <div className="text-base">
      Connect and chat with friends easier and faster around the world.
    </div>
    <Link to="/Msg">
      <button className="btn mt-5 border-0 w-40 sm:w-auto font-semibold text-base sm:text-lg bg-violet-500 text-white hover:bg-white hover:text-purple-600">Let's Start</button> 
    </Link>
  </div>
  </div>
  </div>


  )
}

export default Home
