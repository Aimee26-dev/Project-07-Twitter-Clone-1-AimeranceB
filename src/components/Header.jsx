import start from '../icones/Star.png'
function Header(){
    return(
        <div className='header'>
            <h2 className='page-title'>Home</h2>
            <a href="#"> <img src={start} alt="image start" className='top-tweets' /></a>
        </div>
    )
}

export default Header;