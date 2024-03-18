import { FaHome, FaBell, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { Link } from "react-router-dom";

function Drawer() {
  return (
    <div className="w-full flex">
      <div className="drawer lg:drawer-open  w-2/12 bg-violet-600">
        <input  className="drawer-toggle" />

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4   min-h-full bg-gray-100 text-base-content rounded-r-2xl	">
            <div className="mt-10">
              <span className="text-violet-900	  font-medium text-3xl mr-1">
                Ripple
              </span>
              <span className="text-blue-500 font-medium text-2xl">Room</span>
            </div>

            <li className="text-lg font-medium text-violet-900	 mb-5 mt-28 ">
              <Link to="/home">
                <FaHome className="text-[1.3rem] text-violet-900	" />
                Home
              </Link>
            </li>
            <li className="text-lg font-medium text-violet-900	 mb-5 ">
              <Link to="/chat">
                <AiOutlineMessage className="text-[1.3rem]  text-violet-900	" />
                Messages
              </Link>
            </li>
            <li className="text-lg font-medium text-violet-900	 mb-5">
              <Link to="/profile">
                <FaUserEdit className="text-[1.3rem]  text-violet-900	" />
                Edit Profile
              </Link>
            </li>
            <li className="text-lg font-medium text-violet-900	 mb-5">
              <Link to="/alert">
                <FaBell className="text-[1.3rem]  text-violet-900	" />
                Notification
              </Link>
            </li>
            <li className="text-lg font-medium text-violet-900	 mt-44  ">
              <Link to="/login">
                <FaSignOutAlt className="text-[1.3rem]  text-violet-900	" />
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-4/12 bg-red-500 ">hakhflafl</div>
      <div className=" w-6/12 bg-violet-600 ">hakhflafl</div>
    </div>
  );
}

export default Drawer;