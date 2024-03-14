import { Link, useParams } from "react-router-dom";
import { currentUser } from "../models/user";
import { useEffect, useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { RxLink2 } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { RiUserFollowFill } from "react-icons/ri";
import { tweettab } from "../components/Tweets";
import Tweet from "../components/Tweet";

function Profil(){

    useEffect(() =>{
        window.scrollTo({
            top:0,
            left:0
        })
    },[])

    const {userName} = useParams()
    
    const oneUser = currentUser.find((user) => {
        return user.userName == userName
    })

    const filterTweets = tweettab.filter((tweet) => {
        return tweet.userId === oneUser.userId
    })

    

    const [selected, setSelected] = useState("posts");

    const handleClick = (tab) => {
        setSelected(tab);
      };

      return oneUser ? (
        <div className="w-[800px] border-x-[1px] border-solid border-gray-700 relative">
          <div className="p-5 flex items-center gap-10 fixed z-10 bg-black w-[740px]">
            <Link to={"/"}>
              <GrLinkPrevious />
            </Link>
            <div>
              <h2 className="flex items-center gap-2">
                {oneUser?.userName} <img src={oneUser?.iconCertification} alt="" />
              </h2>
              <span className="text-gray-400 text-sm">{filterTweets.length} posts</span>
            </div>
          </div>
          <div className="max-h-[350px] max-w-full relative mt-[89px] ">
            <img className="w-full max-h-[350px] " src={oneUser?.banner} alt="" />
            <div className="absolute bottom-[-40px] pl-5 flex w-[150px] ">
              <img
                className="absolute bottom-[-40px] pl-50 flex rounded-full "
                src={oneUser?.avatar}
                alt=""
              />
              <div className="flex items-center gap-3 absolute bottom-[-35px] right-[-580px]">
                <p className="w-10 h-10 border border-white text-center rounded-full pt-[2px] ">
                  {oneUser?.points}{" "}
                </p>
                <button className="bg-white text-black px-5 py-2 text-xl rounded-full">
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div className="mt-[70px] p-5">
            <h2 className="flex items-center gap-2">
              {oneUser?.userName} <img src={oneUser?.iconCertification} alt="" />
            </h2>
            <span className="text-gray-400 text-sm">{oneUser?.lienProfil} </span>
          </div>
          <p className="px-5 text-justify">{oneUser?.description} </p>
          <div className="p-5 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <RxLink2 />
              <span className="text-[#1D9BF0] ">{oneUser?.linkWeb} </span>
            </div>
            <div className="flex items-center gap-1">
              <SlCalender />
              <span className="text-gray-400 text-sm">{oneUser?.dateCreated} </span>
            </div>
          </div>
          <div className="px-5 flex gap-8">
            <p>
              {oneUser?.abonnemets}{" "}
              <span className="text-gray-400 text-sm">abonnemets</span>
            </p>
            <p>
              {oneUser?.abonne}{" "}
              <span className="text-gray-400 text-sm">abonnés</span>
            </p>
          </div>
          <div className="p-5 flex items-center gap-2.5">
            <RiUserFollowFill />
            <span className="text-gray-400 text-sm">{oneUser?.suiviPar} </span>
          </div>
          <ul className="py-4 px-8 flex justify-between border-b border-gray-500 list-none">
            <li
              className={
                selected === "posts" ? "cursor-pointer active" : "cursor-pointer"
              }
              onClick={() => handleClick("posts")}
            >
              Posts
            </li>
            <li
              className={
                selected === "affilies" ? "cursor-pointer active" : "cursor-pointer"
              }
              onClick={() => handleClick("affilies")}
            >
              Affiliés
            </li>
            <li
              className={
                selected === "reponse" ? "cursor-pointer active" : "cursor-pointer"
              }
              onClick={() => handleClick("reponse")}
            >
              Réponses
            </li>
            <li
              className={
                selected === "media" ? "cursor-pointer active" : "cursor-pointer"
              }
              onClick={() => handleClick("media")}
            >
              Médias
            </li>
            <li
              className={
                selected === "aime" ? "cursor-pointer active" : "cursor-pointer"
              }
              onClick={() => handleClick("aime")}
            >
              J'aime
            </li>
          </ul>
          {selected === "posts" && (
            <div>
              {filterTweets.map((tweeter) =>(
                <Tweet key={tweeter.id} tweets={tweeter}/>
              ))}
            </div>
          )}
          {selected === "affilies" && (
            <div >
              <h1>Affilies</h1>
            </div>
          )}
          {selected === "reponse" && (
            <div >
              <h1>Reponse</h1>
            </div>
          )}
          {selected === "media" && (
            <div >
              <h1>Media</h1>
            </div>
          )}
          {selected === "aime" && (
            <div >
              <h1>Aime</h1>
            </div>
          )}
        </div >
      ) : (
        <div className="w-[800px] border-x-[1px] border-solid border-gray-700 ">
          <h1 className="text-6xl mt-16 ml-16">{"L'utilisateur saisie n'existe pas"}</h1>
        </div>
      );
}

export default Profil;