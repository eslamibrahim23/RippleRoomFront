import { FaHome, FaBell, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

function Drawer() {
  const navigatee = useNavigate();
  const logout = () => {
    localStorage.removeItem("email");
    navigatee("/");
  };

  return (
    <>
      {/* <input  className="drawer-toggle" /> */}
      <div className="h-full bg-violet-600">
        {/* <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label> */}
        <ul className="menu p-4  min-h-full bg-gray-100 text-base-content rounded-r-2xl	">
          <div className="mt-10">
            <span className="text-violet-900	  font-medium text-3xl mr-1">
              Ripple
            </span>
            <span className="text-blue-500 font-medium text-2xl">Room</span>
          </div>

          <li className="text-lg font-medium text-violet-900 mb-5 mt-28  ">
            <div className="flex justify-center items-center gap-4">
              <FaHome className="text-[1.3rem] text-violet-900	" />
              <Link to="/home">Home</Link>
            </div>
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
            <div className="flex justify-center items-center">
              <FaSignOutAlt className="text-[1.3rem]  text-violet-900	" />
              <span onClick={logout} className="cursor-pointer">
                Sign OUT
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Drawer;
