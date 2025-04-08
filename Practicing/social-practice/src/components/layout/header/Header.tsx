import './Header.css'
import logoImage from '../../../assets/images/logo.webp'
import logInPlaceHolder from '../../../assets/images/log-in-placeholder.webp'
import { NavLink } from 'react-router-dom'

export default function Header(): JSX.Element {

    return (
        <div className='Header'>
           <div className="logo">
                <img src={logoImage} alt='Logo'></img>
            </div>
            <nav>
                <NavLink to="profile">Profile</NavLink>
                <NavLink to="feed">Feed</NavLink>
                <NavLink to="*">Search</NavLink>
            </nav>
            <div className="logIn">
                <img src={logInPlaceHolder} alt="Profile Photo"></img>
                <button>Log In</button>
            </div>
        </div>
    )
}