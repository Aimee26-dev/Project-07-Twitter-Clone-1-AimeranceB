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
import { Outlet, Link } from 'react-router-dom';

function Navsidebar(){
    return(
        <div className="sidebar">
            <ul className="sidebar-navbar">
                <li>
                        <Link to="/Iconetweet" className="sidebar-navbar-li"><img src={iconetweet} alt="image" /></Link>  
                </li>
                <li>
                    <Link to="/home" className="sidebar-navbar-li">
                      <img src={imagehometweet} alt="image" />Home </Link>
                 </li>
                <li>
                    <Link to="/Explore" className="sidebar-navbar-li">
                      <img src={iconeexploretweet} alt="image" />Explore </Link>
                 </li>
                 <li>
                    <Link to="/Notifications" className="sidebar-navbar-li">
                      <img src={iconenotificationtweet} alt="image" />Notifications </Link>
                 </li>
                 <li>
                    <Link to="/Messages" className="sidebar-navbar-li">
                      <img src={iconemessage} alt="image" />Messages </Link>
                 </li>
                 <li>
                    <Link to="/Bookmark" className="sidebar-navbar-li">
                      <img src={iconebook} alt="image" />Explore </Link>
                 </li>
                 <li>
                    <Link to="/Iconelists" className="sidebar-navbar-li">
                      <img src={iconelists} alt="image" />Lists </Link>
                 </li>
                 <li>
                    <Link to="/Profil" className="sidebar-navbar-li">
                      <img src={iconeprofile} alt="image" />Profil </Link>
                 </li>
                 <li>
                    <Link to="/More" className="sidebar-navbar-li">
                      <img src={iconemore} alt="image" />More </Link>
                 </li>
                 <div className="sidebar-button">
                  <Button/>
                  <Outlet/>
                 </div>
            </ul>
          </div>
    )
}

export default Navsidebar;