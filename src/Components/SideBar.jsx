import { AiOutlineMessage } from "react-icons/ai";
import { FaChatPage, FaCog, FaBell, FaSignOutAlt } from "react-icons/fa";

function SideBar() {
  const remove = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
  };
  return (
    <div className={`sidebar-container`}>
      <h1 className={`logo`}>RippleRoom</h1>
      <div>
        <ul className="sidebar last:absolute bottom-10">
          <li className="mb-5">
            <a href="">
              <FaChatPage className="text-[1.3rem]" />
              <span className="pl-2">ChatPage</span>
            </a>
          </li>
          <li className="mb-5">
            <a href="">
              <AiOutlineMessage className="text-[1.3rem]" />
              <span className="pl-2">Messages</span>
            </a>
          </li>
          <li className="mb-5">
            <a href="">
              <FaBell className="text-[1.3rem]" />
              <span className="pl-2">Notifications</span>
            </a>
          </li>
          <li className="mb-5">
            <a href="">
              <FaCog className="text-[1.3rem]" />
              <span className="pl-2">Settings</span>
            </a>
          </li>
          <li className="mt-44" remove={remove}>
            <a href="/login">
              <FaSignOutAlt className="text-[1.3rem]" />
              <span className="pl-2">LogOut</span>
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
