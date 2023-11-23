import tweetprofile from '../images/tweet-profile-photo.png'
import cnn from '../images/CNN.png'
import cnn1 from '../images/CNN1.png'
import m from '../images/M.png'
import tweettext from '../images/Tweet-Text.png'
function Tweet(){
    return(
        <div className='tweet'>
            <a href="#"><img src={tweetprofile} alt="image tweetprofil" /></a>
            <a href="#"><img src={cnn} alt="image cnn" /></a>
            <a href="#"><img src={cnn1} alt="image" /></a>
            <a href="#"><img src={m} alt="image m" /></a>
            <br />
            <a href="#"><img src={tweettext} alt="imagetext" /></a>
        </div>
    )
}
export default Tweet;