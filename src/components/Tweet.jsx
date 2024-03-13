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
          <div className="tweet-actions">
            <div className="tweet-action">
                <button className="twwet-action-button"><img src={tweets.Reply} alt="" /></button>
                <p>{tweets.numberReply}</p>
            </div>
            <div className="tweet-action">
                <button className="twwet-action-button"><img src={tweets.Retweet} alt="" /></button>
                <p>{tweets.numberRetweet}</p>
            </div>
            <div className="tweet-action">
                <button className="twwet-action-button"><img src={tweets.React} alt="" /></button>
                <p>{tweets.numberReact}</p>
            </div>
            <div className="tweet-action">
                <button className="twwet-action-button"><img src={tweets.Share} alt="" /></button>
            </div>

          </div>
        </div>
        </div>
        </div>
    )
}

export default Tweet;