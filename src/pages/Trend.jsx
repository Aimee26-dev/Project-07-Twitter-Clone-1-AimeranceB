import iconerecherche from '../icones/iconerecherche.png'
import iconeparametre from '../icones/iconeparametre.png'
import iconesquid from '../icones/iconesquid.png'
import { trends } from '../models/Trends';
import { tweettab } from '../components/Tweets';



function Trend(){
    return(
        <section className="Trend">
            <div className="Serach">
                 <img src={iconerecherche} alt="icone recherche" />
                 <input type="text" placeholder="Serach Twitter" />
            </div>
        <div className="trendsforyou">
            <div className="trendsforyou-div">
                <h2>Trends for you</h2>
                <img src={iconeparametre} alt="" />
            </div>
            <div className="trendmap">
                {trends.map((element, id) => (
                    <div  key={id}>
                        <div className="trendmap-div">
                        <span>{element.textTrending}</span>
                        <img src={element.icon} alt="" />
                        </div>
                        <p>{element.squid}</p>
                        <span>{element.number}</span>
                    </div>
                ))}
            </div>
            <p className="show-more">Show more</p>

        </div>
        <div className="trendsfollow">
            <h1>Who to follow</h1>
    
            {tweettab.slice(0,3).map((follow, index) => (
                        <div className="followmap" key={index}>
                            <div className="followdiv">
                                    <img src={follow.photoprofil} alt="" />
                                <div className="namefollow">
                                    <div>
                                         <span>{follow.name}</span>
                                         <img src={follow.iconecertifie} alt="" />
                                    </div>
                                    <span className="namefollow-span">{follow.mail}</span>
                                </div>
                            </div>
                            <button>Follower</button>
                        </div>
                    ))}

            
                <p className="show-more">Show more</p>
            </div>

            <span className="namefollow-span">Tems of Service  Privacy Policy  cookie Policy imprit Ads into More... @2021 Twitter. inc.</span>
                   
    
        </section>
    )
}

export default Trend;