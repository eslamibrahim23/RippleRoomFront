import { FaHome, FaBell, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to="/login" className="flex start-10 py-8 fixed top-0 w-full ">
        <a href="/Signup">
          <span className="text-purple-500 sm:text-xl md:text-3xl lg:text-5xl font-bold text-center mr-3">
            Ripple
          </span>
          <span className="text-blue-500 sm:text-lg md:text-3xl lg:text-3xl font-bold text-center">
            Room
          </span>
        </a>
      </Link>
    </>
  );
}

export default Logo;
