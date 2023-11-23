import profile from '../images/profile-photo.png'

function TweetEditorForm(){
    return(
        <section className='tweet-editor'>
            <aside className='avatar'> <a href="#"><img src={profile} alt="image profile" /></a></aside>
            <div className='tweet-editor-form'> 
          <input type="text" placeholder="What's happening" className='tweet-editor-input' />
          <div className='tweet-editor-buttons'>

          </div>
          </div>
          </section>

    )
}
export default TweetEditorForm;