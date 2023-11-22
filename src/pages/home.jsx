import React from 'react';
import Header from '../components/Header';
import TwittEditor from '../components/TwittEditor';
import TweetEditorButton from '../components/TweetEditorButton';

function Home() {
    return (
        <main className="timeline">
            <Header />
            <TwittEditor />
            <TweetEditorButton />
        </main>

    );
}

export default Home;