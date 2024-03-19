


import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
// import { IoIosAttach } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa6";

function Chat() {
  return (
    <>
      <div className="chat w-full">
        <div className="user flex  justify-between border-b-2 p-2 border-violet-900">
          <div className="i-user flex gap-3 ">
            <div className="icon ">
              <img
                className="img  w-14  rounded-full place-content-center"
                alt="Tailwind CSS chat bubble component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
            <div className="name ">
              <div className="text-2xl  text-violet-900 font-medium ">
                Angela
              </div>
              <div className="flex gap-1 ">
                <div>
                  <FaCircle className="text-green-500 mt-1" />
                </div>
                <div className="text-green-500 text-xl mb-2">Active Now</div>
              </div>
            </div>
          </div>
          <div className="info ">
            <BsFillInfoCircleFill className="text-[1.7rem]  text-violet-900 mt-3" />
          </div>
        </div>

        <div className="content">
          <div>
            <div className="i-user flex gap-5 p-5 ">
              <div className="icon ">
                <img
                  className="img  w-14  rounded-full place-content-center"
                  alt="Tailwind CSS chat bubble component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
              <div className=" txt-info border w-72 p-1 pl-5 border-violet-900 rounded-xl	">
                <div className="text-2xl  text-violet-900 font-medium ">
                  Hello, my Dear <br />
                  How are You ??
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="i-user flex flex-row-reverse gap-5 p-5 ">
              <div className="icon ">
                <img
                  className="img  w-14  rounded-full place-content-center"
                  alt="Tailwind CSS chat bubble component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
              <div className=" txt-info border w-72 p-1 pl-5 border-violet-900 rounded-xl	">
                <div className="text-2xl  text-violet-900 font-medium ">
                  Hello, my Dear <br />
                  How are You ??
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="i-user flex gap-5 p-5 ">
              <div className="icon ">
                <img
                  className="img  w-14  rounded-full place-content-center"
                  alt="Tailwind CSS chat bubble component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
              <div className=" txt-info border w-72 p-1 pl-5 border-violet-900 rounded-xl	">
                <div className="text-2xl  text-violet-900 font-medium ">
                  Hello, my Dear <br />
                  How are You ??
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="i-user flex flex-row-reverse gap-5 p-5 ">
              <div className="icon ">
                <img
                  className="img  w-14  rounded-full place-content-center"
                  alt="Tailwind CSS chat bubble component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
              <div className=" txt-info border w-72 p-1 pl-5 border-violet-900 rounded-xl	">
                <div className="text-2xl  text-violet-900 font-medium ">
                  Hello, my Dear <br />
                  How are You ??
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="i-user flex gap-5 p-5 ">
              <div className="icon ">
                <img
                  className="img  w-14  rounded-full place-content-center"
                  alt="Tailwind CSS chat bubble component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
              <div className=" txt-info border w-72 p-1 pl-5 border-violet-900 rounded-xl	">
                <div className="text-2xl  text-violet-900 font-medium ">
                  Hello, my Dear <br />
                  How are You ??
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="typing">
          <div className="text-violet-900 flex items-end">
            <div className="flex-grow overflow-y-auto p-4">
              <form className="p-4 flex items-center">
                <div className="flex gap-2 p-4 ">
                  <FaMicrophone className="text-[1.7rem] text-violet-900  " />
                  <BsEmojiSmile className="text-[1.7rem] text-violet-900  " />
                  {/* <IoIosAttach className="text-[1.7rem]  text-blue-500 "/> */}
                </div>
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-grow border-2 border-violet-900 rounded-lg px-4 py-2"
                />

                <button
                  type="submit"
                  className="ml-2 bg-violet-900 text-white px-4 py-2 rounded-lg"
                >
                  <IoSend className="text-[1.7rem] " />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
