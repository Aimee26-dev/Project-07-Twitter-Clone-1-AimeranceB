import React, { useEffect } from 'react';
import Header from '../components/Header';
import Tweets from '../components/Tweets';
import Sidebar from './sidebar';
import Trend from './Trend'
import TweetEditor from '../components/TweetEditor';




function Home() {
    useEffect(() =>{
        window.scrollTo({
            top:0,
            left:0
        })
    },[])
    return (
        <>
        <main className="timeline">
            <Header />
            <TweetEditor/>
            <Tweets />
        </main>
        </>
    )
}

export default Home;