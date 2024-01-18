import React from 'react';
import Header from '../components/Header';
import TweetEditor from '../components/TweetEditor';
import Tweets from '../components/Tweets';
import Sidebar from './sidebar';
import Trend from './Trend'




function Home() {
    return (
        <>
        <aside className="left-sidebar">
        <Sidebar/> 
        </aside>
        <main className="timeline">
            <Header />
            <TweetEditor />
            <Tweets />
        </main>
        <aside className="right-sidebar">
           <Trend/> 
        </aside>
        </>

    );
}

export default Home;