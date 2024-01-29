import Tweet from "../components/Tweet.jsx";
import tweetprofil from '../images/Profile.png'
import verified from '../icones/Verified.png'
import Reply from '../icones/Reply.png'
import Retweet from '../icones/Retweet.png'
import React from '../icones/React.png'
import Share from '../icones/Share.png'
import image1 from '../images/image 1.png'
import tweetimage from '../images/tweet-image.png'
import tweetphoto from '../images/tweet-photo.png'
import tweetimg from '../images/Tweet2.png'

export const tweettab = [
  {
      id:1,
      photoprofil:tweetprofil,
      name:"CNN",
      iconecertifie:verified,
      mail:"@CNN .",
      temps:"7m",
      text:"President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
      phototweet:null,
      Reply:Reply,
      Retweet:Retweet,
      React:React,
      Share:Share,
      numberReply:57,
      numberRetweet:144,
      numberReact:184,
      },
  {
      id:2,
      photoprofil:image1,
      name:"The New York Times",
      iconecertifie:verified,
      mail:"@nytimes .",
      temps:"2h",
      text:" Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
      phototweet:tweetimage,
      Reply:Reply,
      Retweet:Retweet,
      React:React,
      Share:Share,
      numberReply:19,
      numberRetweet:48,
      numberReact:482
      
  },
  {
      id:3,
      photoprofil:tweetphoto,
      name:"Tweetter",
      iconecertifie:verified,
      mail:"@Tweeter .",
      temps:"oct 29",
      text:"BIG NEWS lol jk still Twitter.",
      phototweet:null,
      Reply:Reply,
      Retweet:Retweet,
      React:React,
      Share:Share,
      numberReply:6.8 + 'k',
      numberRetweet:36.6 + 'k',
      numberShare:267.1 + 'k',
      numberReact:482

  },
  {
      id:4,
      photoprofil:tweetimg,
      name:"Tweetter",
      iconecertifie:verified,
      mail:"@Tweeter .",
      temps:"oct 4",
      text:"hello literally everyone.",
      phototweet:null,
      Reply:Reply,
      Retweet:Retweet,
      React:React,
      Share:Share,
      numberReply:118.7 ,
      numberRetweet:785.4 ,
      numberShare:3.3 ,
      numberReact:482

          }
      ]

function Tweets() {


  return (
    <div className='tweets'>
      {tweettab.map((tweet) => 
        <Tweet key={tweet.id}
        photoprofil={tweet.photoprofil}
        name={tweet.name}
        iconecertifie = {tweet.iconecertifie}
        mail = {tweet.mail}
        temp = {tweet.temps}
        text = {tweet.text}
        phototweet = {tweet.phototweet}
        Reply={tweet.Reply}
        Retweet={tweet.Retweet}
        React={tweet.React}
        Share={tweet.Share}
        numberReply={tweet.numberReply}
        numberRetweet={tweet.numberRetweet}
        numberReact={tweet.numberReact}

        />
      )}
    </div>
  )
}
export default Tweets;