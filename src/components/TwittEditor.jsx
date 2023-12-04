import TweetEditorForm from '../components/TweetEditorForm';
import TweetEditorButton from './TweetEditorButton';

function TwittEditor(){
    return(
        <main className='TwittEditor'>
            <TweetEditorForm />
            <TweetEditorButton />
            
        </main>
    )
}

export default TwittEditor;