import profile from '../images/profile-photo.png'
function TweetEditorForm(){
    return(
        <section className='tweet-editor-form'> 
        <div>
          <a href="#"><img src={profile} alt="image profile" className='avatar'/></a>
          <input type="text" placeholder="What's happening" className='tweet-editor-input' />
          </div>
        </section>
    )
}
export default TweetEditorForm;