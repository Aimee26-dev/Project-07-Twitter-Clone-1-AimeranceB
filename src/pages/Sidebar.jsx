
import { FaTwitter } from "react-icons/fa";import { RiHome7Fill } from "react-icons/ri";
import { SiSharp } from "react-icons/si";
import { IoMdNotifications } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { CiBookmark } from "react-icons/ci";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { CiCircleMore } from "react-icons/ci";

function Sidebar({props}){
  return(
    <div className="sidebar">
      <ul>
        <li><FaTwitter/></li>
        <li><RiHome7Fill/>Home</li>
        <li><SiSharp/>Explore</li>
        <li><IoMdNotifications/>Notification</li>
        <li><HiOutlineEnvelope/>Message</li>
        <li><CiBookmark/>Bookmarks</li>
        <li><RiFileList2Line/>Lists</li>
        <li><HiOutlineUser/>Profile</li>
        <li><CiCircleMore/>More</li>
        <button>Tweet</button>
      </ul>
    </div>
  )
}

export default Sidebar;