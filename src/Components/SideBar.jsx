
import {AiOutlineMessage} from 'react-icons/ai'
import { FaHome,FaCog,FaBell,FaSignOutAlt  } from 'react-icons/fa';

function SideBar() {
  return (
    <div className={`sidebar-container`}>
        <h1 className={`logo`}>RippleRoom</h1>
        <div>
        <ul className='sidebar last:absolute bottom-10'>
            <li className='mb-5'><a href=""><FaHome className='text-[1.3rem]'/><span className='pl-2'>Home</span></a></li>
            <li className='mb-5'><a href=""><AiOutlineMessage className='text-[1.3rem]'/><span className='pl-2'>Messages</span></a></li>
            <li className='mb-5'><a href=""><FaBell className='text-[1.3rem]'/><span className='pl-2'>Notifications</span></a></li>
            <li className='mb-5'><a href=""><FaCog className='text-[1.3rem]'/><span className='pl-2'>Settings</span></a></li>
            <li className='mt-44'><a href='/login'><FaSignOutAlt className='text-[1.3rem]'/><span className='pl-2'>SignOut</span></a> </li>
        </ul>
     
    </div>
    </div>
  )
}

export default SideBar
