import { Outlet, NavLink } from 'react-router-dom';
import iconetweet from '../icones/iconetweet.png';
import imagehometweet from '../images/imagehometweet.png';
import iconeexploretweet from '../icones/iconexplore.png';
import iconenotificationtweet from '../icones/iconenotification.png';
import iconemessage from '../icones/iconemessage.png';
import iconebook from '../icones/iconebook.png';
import iconelists from '../icones/iconelists.png';
import iconeprofile from '../icones/iconeprofile.png';
import iconemore from '../icones/iconemore.png';
import Button from '../components/Button';
import profilephoto from '../images/profile-photo.png';
import iconeprivate from '../icones/iconeprivate.png';

function Sidebar({props}){
  return(
    <div className="sidebar">
           <ul className="sidebar-navbar">
          <li>
      <NavLink to="/Iconetweet" className="sidebar-navbar-li">
            <img src={iconetweet} alt="image" />
          </NavLink>
          </li>
          <li>
          <NavLink to="/" className="sidebar-navbar-li">
           <img src={imagehometweet} alt="image" />Home
          </NavLink>
          </li>
          <li>
          <NavLink to="/Explore" className="sidebar-navbar-li">
           <img src={iconeexploretweet} alt="image" />Explore
          </NavLink>
          </li>
          <li>
          <NavLink to="/Notifications" className="sidebar-navbar-li">
           <img src={iconenotificationtweet} alt="icone" />Notifications
          </NavLink>
          </li>
          <li>
          <NavLink to="/Messages" className="sidebar-navbar-li">
            <img src={iconemessage} alt="icone" />Messages
          </NavLink>
          </li>
          <li>
          <NavLink to="/Bookmark" className="sidebar-navbar-li">
           <img src={iconebook} alt="icone" />Bookmarks
          </NavLink>
          </li>
          <li>
          <NavLink to="/Iconelists" className="sidebar-navbar-li">
           <img src={iconelists} alt="icone" />Lists
          </NavLink>
          </li>
          <li>
          <NavLink to="/Profil" className="sidebar-navbar-li">
            <img src={iconeprofile} alt="icone" />Profil
          </NavLink>
          </li>
          <li>
          <NavLink to="/More" className="sidebar-navbar-li">
           <img src={iconemore} alt="icone" />More
          </NavLink>
          </li>
          <div className="sidebar-button"> 
          <Button/>
          </div>
          </ul>
          
          <div className="avatar-div">
            <NavLink to="/Profil"><img src={profilephoto} alt="imageprofil" /></NavLink>
              <div className="ortizdiv">
                  <div>
                  <h3>Bradley Ortiz</h3>
                  <span>
                      <img src={iconeprivate} alt="icone private" />
                  </span>
                  </div>
              <span className="namefollow-span" id="@bradley">@bradley ..</span>
              </div>
          </div>
          <Outlet/> 
    </div>
  )
}

export default Sidebar;