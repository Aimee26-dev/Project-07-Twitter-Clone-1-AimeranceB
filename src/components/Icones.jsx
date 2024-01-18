import Media from '../icones/Media.png'
import Gf from '../icones/Gf.png'
import Tweet from '../icones/Tweet.png'
import Emoji from '../icones/Emoji.png'
import Top from '../icones/Top.png'
import { NavLink } from 'react-router-dom'

function Icone(){
    return(
        <div className="tweet-editor-actions">
            <NavLink to="/media"><img src={Media} alt="image media" /></NavLink>
            <NavLink to="/gf"><img src={Gf} alt="image gf" /></NavLink>
            <NavLink to="/tweet"><img src={Tweet} alt="image tweet" /></NavLink>
            <NavLink to="/emoji"><img src={Emoji} alt="image emoji" /></NavLink>
            <NavLink to="/top"><img src={Top} alt="image top" /></NavLink>
        </div>
    )
}

export default Icone;