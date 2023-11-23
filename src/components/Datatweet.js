import tweetprofil from '../images/Profile.png'
import verified from '../icones/Verified.png'
import Reply from '../icones/Reply.png'
import Retweet from '../icones/Retweet.png'
import Reactpng from '../icones/React.png'
import Share from '../icones/Share.png'
import image1 from '../images/image 1.png'
import tweetimage from '../images/tweet-image.png'
import tweetphoto from '../images/tweet-photo.png'
import tweetimage from '../images/Tweet2.png'

export const tweettab = [
    {
        photoprofil:tweetprofil,
        name:"CNN",
        iconecertifie:verified,
        mail:"@CNN .",
        temps:"7m",
        text:"President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a major breakthrough that would serve to both strengthen the US steel industry and combat the global climate crisis.",
        phototweet:null,
        iconelike:[
            {
                like:Reply,
                numberlike:57
            },
            {
                like:Retweet,
                numberlike:144
            },
            {
                like:Reactpng,
                numberlike:184
            },
            {
                like:Share
            }
        ]
    },
    {
        photoprofil:image1,
        name:"The New York Times",
        iconecertifie:verified,
        mail:"@nytimes .",
        temps:"2h",
        text:" Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
        phototweet:tweetimage,
        iconelike:[
            {
                like:Reply,
                numberlike:19
            },
            {
                like:Retweet,
                numberlike:48
            },
            {
                like:Reactpng,
                numberlike:482
            },
            {
                like:Share
            }
        ]
    },
    {
        photoprofil:tweetphoto,
        name:"Tweetter",
        iconecertifie:verified,
        mail:"@Tweeter .",
        temps:"oct 29",
        text:"BIG NEWS lol jk still Twitter.",
        phototweet:null,
        iconelike:[
            {
                like:Reply,
                numberlike:6.8 + 'k'
            },
            {
                like:Retweet,
                numberlike:36.6 + 'k'
            },
            {
                like:Reactpng,
                numberlike:267.1 + 'k'
            },
            {
                like:Share
            }
        ]
    },
    {
        photoprofil:tweetimage,
        name:"Tweetter",
        iconecertifie:verified,
        mail:"@Tweeter .",
        temps:"oct 4",
        text:"hello literally everyone.",
        phototweet:null,
        iconelike:[
            {
                like:Reply,
                numberlike:118.7 + 'k'
            },
            {
                like:Retweet,
                numberlike:785.4 + 'k'
            },
            {
                like:Reactpng,
                numberlike:3.3 + 'm'
            },
            {
                like:Share
            }
        ]
    }
]