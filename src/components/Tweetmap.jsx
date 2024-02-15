import tweettab from "../models/Data"
// import Tweets from "./Tweets"

function Tweetmap(){
    const Tweetermap = tweettab.map((tweet)=>{
        return(
                <div>
                <p key={tweet.id}></p>
                <img src={tweet.photoprofil} alt="" />
                <p> {tweet.name} </p>
                <img src={tweet.iconecertifie} alt="" />
                <p>{tweet.mail}</p>
                <p>{tweet.temps}</p>
                <p>{tweet.text}</p>
                <img src={tweet.phototweet} alt="" />
                <img src={tweet.btn.Reply} alt="" />
                <p>{tweet.btn.numberReply}</p>
                <img src={tweet.btn.Retweet} alt="" />
                <p>{tweet.btn.numberRetweet}</p>
                <img src={tweet.btn.React} alt="" />
                <p className="text-">{tweet.btn.numberReact}</p>
                <img src={tweet.btn.Share} alt="" />
                </div>
        )
    }
    
    )
    return(
        <div className="tweets">
           {Tweetermap}
        </div>
    )
}

export default Tweetmap;
