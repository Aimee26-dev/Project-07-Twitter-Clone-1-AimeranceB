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
      <NavLink to="/Iconetweet">
          <li>
            <img src={iconetweet} alt="image" />
          </li>
          </NavLink>
          <NavLink to="/">
          <li>
           <img src={imagehometweet} alt="image" />Home
          </li>
          </NavLink>
          <NavLink to="/Explore">
          <li>
           <img src={iconeexploretweet} alt="image" />Explore
          </li>
          </NavLink>
          <NavLink to="/Notifications">
          <li>
           <img src={iconenotificationtweet} alt="icone" />Notifications
          </li>
          </NavLink>
          <NavLink to="/Messages">
          <li>
            <img src={iconemessage} alt="icone" />Messages
          </li>
          </NavLink>
          <NavLink to="/Bookmark">
          <li>
           <img src={iconebook} alt="icone" />Bookmarks
          </li>
          </NavLink>
          <NavLink to="/Iconelists">
          <li>
           <img src={iconelists} alt="icone" />Lists
          </li>
          </NavLink>
          <NavLink to="/Profil">
          <li>
            <img src={iconeprofile} alt="icone" />Profil
          </li>
          </NavLink>
          <NavLink to="/More">
          <li>
           <img src={iconemore} alt="icone" />More
          </li>
          </NavLink>
          <div className="sidebar-button"> 
          <Button/>
          </div>
          </ul>
          
          <div className="avatar-div">
            <NavLink to="/Profilphoto"><img src={profilephoto} alt="imageprofil" /></NavLink>
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