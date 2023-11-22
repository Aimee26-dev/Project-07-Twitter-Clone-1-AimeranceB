import profile from '../images/profile-photo.png'

function TwittEditor(){
    return(
        <section className='TwittEditor'>
            <div>
           <a href="#"><img src={profile} alt="image profile" className='avatar'/></a> 
            </div>
            <div>
                <input type="text" placeholder="What's happening" className='tweet-editor-input' />
            </div>
            <div>
                <form action="" className='tweet-editor-form'></form>
            </div>
        </section>
    )
}

export default TwittEditor;