import profil from '../images/profile-photo.png'
import media from '../icones/Media.png'
import vector from '../icones/Vector.png'
import poll from '../icones/Poll.png'
import emoji from '../icones/Emoji.png'
function TweetEditor (){
    return(
        <section>
            <a href="#" ><img src={profil} alt="image profil" className='avatar'/></a>
            <div>
                <input type="text" placeholder="What's happening" />
            </div>
            <div>
                <form action="tweet-editor-form"></form>
            </div>
            <div>
                <a href="#"><img src={media} alt="image media" /></a>
            </div>
            <div>
                <a href="#"><img src={vector} alt="image vector" /></a>
            </div>
            <div>
                <a href="#"><img src={poll} alt="image poll" /></a>
            </div>
            <div>
                <a href="#"><img src={emoji} alt="image emoji" /></a>
            </div>
        </section>
    )
}
export default TweetEditor;