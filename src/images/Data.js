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


const tweettab = [
  {
      id:1,
      photoprofil:tweetprofil,
      name:"CNN",
      iconecertifie:verified,
      mail:"@CNN .",
      temps:"7m",
      text:"President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
      phototweet:null,
      btn: {
        Reply:Reply,
        numberReply:57,
  
        Retweet:Retweet,
        numberRetweet:144,
  
        React:React,
        numberReact:123,
  
        Share:Share,
      },
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
    btn: {
      Reply:Reply,
      numberReply:19,

      Retweet:Retweet,
      numberRetweet:48,

      React:React,
      numberReact:482,

      Share:Share,
    },
      
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
      btn: {
        Reply:Reply,
        numberReply:123,
  
        Retweet:Retweet,
        numberRetweet:123,
  
        React:React,
        numberReact:1234,
  
        Share:Share,
      },
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
      btn: {
        Reply:Reply,
        numberReply:1253,
  
        Retweet:Retweet,
        numberRetweet:1237,
  
        React:React,
        numberReact:1237,
  
        Share:Share,
      },

          }
      ]

      export default tweettab;