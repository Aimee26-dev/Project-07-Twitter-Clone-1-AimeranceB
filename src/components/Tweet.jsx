function Tweet ({photoprofil,name, iconecertifie, mail, temps,text,phototweet,Reply,Retweet,React,Share,numberReply,numberRetweet,numberReact}) {
    return(
        <div className="tweet">
            <div className="tweet-avatar">
                <a href="#"><img src={photoprofil} alt="photo profil"/></a>
            </div>
        <div className="tweet-content">
        <div className="tweet-body">
          <h2 className="tweet-title">
            <span className="tweet-title-author">{name} </span>
            <img className="tweet-title-author" src={iconecertifie} alt="" />
            <span className="tweet-title">{mail} </span>
            <span className="tweet-title-details">{temps} </span>
          </h2>
          <p className="tweet-text">{text} </p>
          <div className="tweet-image">
            <img src={phototweet} alt="" />
          </div>
          <div className="tweet-actions">
            <div className="tweet-action">
                <button className="twwet-action-button"><img src={Reply} alt="" /></button>
                <p>{numberReply}</p>
            </div>
            <div className="tweet-action">
                <button className="twwet-action-button"><img src={Retweet} alt="" /></button>
                <p>{numberRetweet}</p>
            </div>
            <div className="tweet-action">
                <button className="twwet-action-button"><img src={React} alt="" /></button>
                <p>{numberReact}</p>
            </div>
            <div className="tweet-action">
                <button className="twwet-action-button"><img src={Share} alt="" /></button>
            </div>

          </div>
        </div>
        </div>
        </div>
    )
}

export default Tweet;