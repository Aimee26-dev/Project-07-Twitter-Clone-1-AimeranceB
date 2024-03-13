import React from 'react';
import Header from '../components/Header';
import Tweets from '../components/Tweets';
import Sidebar from './sidebar';
import Trend from './Trend'
import TweetEditor from '../components/TweetEditor';




function Home() {
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