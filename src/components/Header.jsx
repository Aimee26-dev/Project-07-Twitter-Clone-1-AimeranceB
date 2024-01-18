import { NavLink } from 'react-router-dom';
import start from '../icones/Star.png'
function Header(){
    return(
        <div className='header'>
            <h2 className='page-title'>Home</h2>
            <NavLink to="/Start"><img src={start} alt="image start" className='top-tweets'/></NavLink>
        </div>
    )
}

export default Header;