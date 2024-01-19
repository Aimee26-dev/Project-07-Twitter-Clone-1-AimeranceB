import start from '../icones/Star.png'
function Header(){
    return(
        <div className='header'>
            <h2 className='page-title'>Home</h2>
            <img src={start} alt="image start" className='top-tweets'/>
        </div>
    )
}

export default Header;