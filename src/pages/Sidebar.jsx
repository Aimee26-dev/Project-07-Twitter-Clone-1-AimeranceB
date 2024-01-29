import {Link } from 'react-router-dom';
import profilephoto from '../images/profile-photo.png';
import iconeprivate from '../icones/iconeprivate.png';

function Sidebar({props}){
  return(
           <div className="avatar-div">
            <Link to="/Profil"><img src={profilephoto} alt="imageprofil" /></Link>
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
         

  )
}

export default Sidebar;