import TweetEditorForm from '../components/TweetEditorForm';
import TweetEditorButton from './TweetEditorButton';

function TwittEditor(){
    return(
        <main className='TwittEditor'>
            <div className="tweet-editor-form">
            <TweetEditorForm />
            <TweetEditorButton />
            </div>
            
        </main>
    )
}

export default TwittEditor;