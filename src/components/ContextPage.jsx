import { createContext, useState } from "react";
import Tweets, { tweettab } from "./Tweets";

export const Pagecontext= createContext();
function ContextPage({children}) {
    const[texte, setText]= useState("");
    const[data, setData]= useState(tweettab);

    const newTweet= () => {
      
    }
    return(
      <Pagecontext.Provider>
        {children}
      </Pagecontext.Provider>
    )
}

export default ContextPage;