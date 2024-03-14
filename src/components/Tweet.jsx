import { Link } from "react-router-dom";

function Tweet ({tweets}) {
  
    return(
        <div className="tweet">
            <div className="tweet-avatar">
              <Link to={`/${tweets.name}`}>
                <img src={tweets.photoprofil} alt="photo profil"/>
                </Link>
            </div>
        <div className="tweet-content">
        <div className="tweet-body">
          <h2 className="tweet-title">
            <span className="tweet-title-author">{tweets.name} </span>
            <img className="tweet-title-author" src={tweets.iconecertifie} alt="" />
            <span className="tweet-title">{tweets.mail} </span>
            <span className="tweet-title-details">{tweets.temps} </span>
          </h2>
          <p className="tweet-text">{tweets.text} </p>
          <div className="tweet-image">
            <img src={tweets.phototweet} alt="" />
          </div>
          
            <div className="flex gap-12">
            <button className="flex items-center justify-center gap-2.5 max-w-max group"><img className="p-2.5 rounded-xl group-hover:bg-blue-700" src={tweets.Reply} alt="" /><p className="group-hover:text-blue-700">{tweets.numberReply}</p></button>
                
                
                <button className="flex items-center justify-center gap-2.5 max-w-max group"><img className="p-2.5 rounded-xl group-hover:bg-green-300" src={tweets.Retweet} alt="" /><p className="p-2.5 rounded-xl group-hover:text-green-300">{tweets.numberRetweet}</p> </button>
            
            
                <button className="flex items-center justify-center gap-2.5 max-w-max group"><img className="p-2.5 rounded-xl group-hover:bg-pink-600" src={tweets.React} alt="" /><p className="p-2.5 rounded-xl group-hover:text-pink-600">{tweets.numberReact}</p></button>
                
            
            
                <button className="flex items-center justify-center gap-2.5 max-w-max group"><img className="p-2.5 rounded-xl group-hover:bg-blue-500" src={tweets.Share} alt="" /></button>
            
            </div>
                

          
        </div>
        </div>
        </div>
    )
}

export default Tweet;