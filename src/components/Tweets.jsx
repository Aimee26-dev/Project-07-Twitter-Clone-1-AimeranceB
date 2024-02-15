import React, { createContext, useState } from "react";
import tweettab from "../models/Data";

export const PageContext = createContext();

function Tweets({children}){
 const[texte, setText]= useState("");
 const[data, setData]= useState(tweettab);

 const newTweet= () => {
      if(texte !== ""){
        const texteValue = data;
        texteValue.unshift(
          {
            id:texteValue.length+1,
            photoprofil:profilephoto,
            name:iconeprivate,
            nametweet:"@bradley..",
            btn: {
              Reply:Reply,
              numberReply:0,
        
              Retweet:Retweet,
              numberRetweet:0,
        
              React:React,
              numberReact:0,
        
              Share:Share,
            },
          }
        )
        setData(texteValue)
        setText("");
      }
    }
    return(
     <PageContext.Provider value={{data, newTweet, texte, setText}}>
      {children}
     </PageContext.Provider>
    )
}

export default Tweets;
