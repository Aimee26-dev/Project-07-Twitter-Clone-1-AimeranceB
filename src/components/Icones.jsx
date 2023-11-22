import Media from '../icones/Media.png'
import Gf from '../icones/Gf.png'
import Tweet from '../icones/Tweet.png'
import Emoji from '../icones/Emoji.png'
import Top from '../icones/Top.png'

function Icone(){
    return(
        <div className="tweet-editor-actions">
            <a href="#"><img src={Media} alt="image media" /></a>
                <a href="#"><img src={Gf} alt="image gf" /></a>
                <a href="#"><img src={Tweet} alt="image tweet" /></a>
                <a href="#"><img src={Emoji} alt="image emoji" /></a>
                <a href="#"><img src={Top} alt="image top" /></a>
        </div>
    )
}

export default Icone;