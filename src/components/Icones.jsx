import Media from '../icones/Media.png'
import Gf from '../icones/Gf.png'
import Tweet from '../icones/Tweet.png'
import Emoji from '../icones/Emoji.png'
import Top from '../icones/Top.png'

function Icone(){
    return(
        <div className="tweet-editor-actions">
            <img src={Media} alt="image media" />
            <img src={Gf} alt="image gf" />
            <img src={Tweet} alt="image tweet" />
            <img src={Emoji} alt="image emoji" />
            <img src={Top} alt="image top" />
        </div>
    )
}

export default Icone;