import {useState } from "react";




function Tweet ({photoprofil,name, iconecertifie, mail, temps,text,phototweet,Reply,Retweet,React,Share,numberReply,numberRetweet,numberReact}) {
  const [count, setCount]= useState(0);
  const [count1, setCount1]= useState(0);
  const [count2, setCount2]= useState(0);
 
  const like=()=>{
    if (count===0){
      setCount(count+1)
    }
    else if (count >= 1){
      setCount(count-1)
    }
  }
  const like1=()=>{
    if (count1===0){
      setCount1(count1+1)
    }
    else if (count1 >= 1){
      setCount1(count1-1)
    }
  }
  const like2=()=>{
    if (count2===0){
      setCount2(count2+1)
    }
    else if (count2 >= 1){
      setCount2(count2-1)
    }
  }
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
                <button className="twwet-action-button"><img src={Reply} alt="" onClick={()=>like()}/></button>
                <p>{numberReply+count}</p>
            </div>
            <div className="tweet-action">
                <button className="twwet-action-button"><img src={Retweet} alt="" onClick={()=>like1()} /></button>
                <p>{numberRetweet+count1}</p>
            </div>
            <div className="tweet-action">
                <button className="twwet-action-button"><img src={React} alt="" onClick={()=>like2()}/></button>
                <p>{numberReact+count2}</p>
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

