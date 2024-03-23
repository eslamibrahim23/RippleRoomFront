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
      <div className="h-full bg-violet-900 ">
        <ul className="p-1 h-full menu  bg-gray-100 text-base-content rounded-r-3xl	">
          <div className="mb-36">
            <span className="text-violet-900	 font-medium text-2xl ">
              Ripple
            </span>
            <span className="text-blue-500 font-medium text-2xl">Room</span>
          </div>

          <li className="mt-5 text-lg font-medium text-violet-900   ">
            <div className="px-1  py-1 flex  items-center gap-4 hover:bg-violet-200 rounded-lg">
              <FaHome className="text-[1.3rem] text-violet-900	" />
              <Link className="text-[1.3rem]" to="/ChatPage">
                ChatPage
              </Link>
            </div>
          </li>
          <li className="mt-5 text-lg font-medium text-violet-900	">
            <div className="px-1  py-1 flex  items-center gap-4 hover:bg-violet-200 rounded-lg">
              <AiOutlineMessage className="text-[1.3rem]  text-violet-900	" />
              <Link to="/msg">Messages</Link>
            </div>
          </li>
          <li className="mt-5 text-lg font-medium text-violet-900	  ">
            <div className="px-1  py-1 flex  items-center gap-4 hover:bg-violet-200 rounded-lg">
              <FaUserEdit className="text-[1.3rem]  text-violet-900	" />
              <Link to="/profile">Profile</Link>
            </div>
          </li>
          <li className="mt-5 mb-60 text-lg font-medium text-violet-900	 ">
         
          </li>

          <li className="text-lg font-medium text-violet-900	 ">
            <div className="bg-gray-400 via-neutral-300 dark:via-neutral-700 to-transparent my-6 h-[1px] w-56" />
            <div className="flex justify-center items-center gap-3">
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
