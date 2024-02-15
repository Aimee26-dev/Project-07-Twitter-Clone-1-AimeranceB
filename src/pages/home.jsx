import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/Tweets';
import Sidebar from './sidebar';
import Trend from './Trend'
import Navsidebar from '../components/Navsidebar';
import Tweetmap from '../components/Tweetmap';



function Home() {
    return (
        <>
        <aside className="left-sidebar">
            <Navsidebar/>
        <Sidebar/> 
        </aside>
        <main className="timeline">
            <Header />
            <TweetEditor />
            <Tweets />
            <Tweetmap/>
        </main>
        <aside className="right-sidebar">
           <Trend/> 
        </aside>
        </>
    )
}

export default Home;