import { NavLink } from 'react-router-dom'
import './Header.css'

export default function Header(): JSX.Element {

    return (
        <div className='Header'>
            <div>
                <img alt='Logo' />
            </div>
            <div>
                <nav>
                    <NavLink to="/profile">Profile</NavLink>
                    <NavLink to="/feed">Feed</NavLink>

                </nav>
            </div>

        </div>
    )
}