import { createContext, useState } from 'react';
import profile from '../images/profile-photo.png'
import TweetEditorButton from './TweetEditorButton'

export const UserContext= createContext();

function TweetEditorForm(){ 
    return(
        <section className='tweet-editor'>
            <aside className='avatar'> <img src={profile} alt="image profile" /></aside>
            <div className='tweet-editor-form'> 
            <input type="text"  placeholder="What's happening" className='tweet-editor-input' />
          
             <TweetEditorButton />

          
          </div>
          </section>

    )
}
export default TweetEditorForm;