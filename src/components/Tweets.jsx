import { tweettab } from "./Datatweet";


function Tweets(){
    return(
        <div className='tweets'>
            {tweettab.map((element, index) => (
                <div key={index} className="tweet">
                    <aside className="tweet-avatar">
                        <img src={element.photoprofil} alt="" />
                    </aside>
                    <div className="tweet-content">
                        <div className="tweet-body">
                            <h2 className="tweet-title">
                                <span className="tweet-title-author">{element.name} </span>
                                <img className="tweet-title-author" src={element.iconecertifie} alt="" />
                                <span className="tweet-title-details">{element.mail} </span>
                                <span className="tweet-title-details">{element.temps} </span>
                            </h2>
                            <p className="tweet-text">{element.text} </p>
                            <div className="tweet-image">
                                <img src={element.phototweet} alt="" />
                            </div>
                        </div>
                        <div className="tweet-actions">
                            {element.iconelike.map((likes, id) => (
                                <div className="tweet-action" key={id}>
                                    <img src={likes.like} alt="" />
                                    <span>{likes.numberlike} </span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}
export default Tweets;