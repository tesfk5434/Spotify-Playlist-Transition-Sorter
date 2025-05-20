import './login.css'
import Spotify_logo from '../assets/Spotify_logo.png'
import generateToken from '../utils/generateToken';
function LoginPage(){
    return (
        <div className='content-div'>

            <div className="login-div">
                <div className='logo-div'>
                    <img src={Spotify_logo} alt='spotify-logo' className='logo-img'></img>
                </div>
                <div className='button-div'>
                    <h1>Spotify Playlist Transition Sorter</h1>
                    <h2 className='button-description'>Login With Spotify</h2>
                    <button className="spotify-login-botton" onClick={generateToken}>Login</button>
                </div>
            </div>
        </div>
    )
}
export default LoginPage;