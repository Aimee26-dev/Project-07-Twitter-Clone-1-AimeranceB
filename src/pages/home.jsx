import React from 'react';
import Header from '../components/Header';
import TwittEditor from '../components/TwittEditor';
import Tweet from '../components/Tweets';


function Home() {
    return (
        <main className="timeline">
            <Header />
            <TwittEditor />
            <Tweet />
            
        </main>

    );
}

export default Home;