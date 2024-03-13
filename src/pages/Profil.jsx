import { useParams } from "react-router-dom";
import { currentUser } from "../models/user";

function Profil(){

    const {userName} = useParams()
    
    const userFind = currentUser.find((user) => {
        return user.userName == userName
    })

    return(
        <div>
            <p>{userFind.userName}</p>
        </div>
    )
}

export default Profil;