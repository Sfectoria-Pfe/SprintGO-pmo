import React,{ useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import sprintGo from '../../assets/sprintgo.png'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'

const Navbar = () => {
    const {logout}= useLogout()
    const [menuOpen , setMenuOpen]= useState(false)
    const {user}= useAuthContext()

    const handleClick =() => {
        logout()
    }
  return (
    <nav>
        
            <Link to="/" className='title'>
            <img src={sprintGo} alt="SprintGo" className='logo' onClick={() => window.scrollTo(0, 0)} />
                </Link>
            <div className='menu' onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open":""}>

            <li>

                <NavLink to="/about" className="nav-link" onClick={() => window.scrollTo(0, 0)}>About</NavLink>
            </li>
            <li>
                <NavLink to="/services" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Services</NavLink>
            </li>
            <li>
            <NavLink to="/contact" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Contact</NavLink>
            </li>
            <li>
            <NavLink to="/features" className="nav-link" onClick={() => window.scrollTo(0, 0)}>Features</NavLink>
            </li>
            
        </ul>
        {!user && (
             < div className="signin-signup">
                 <NavLink to="/login" className="button signin" onClick={() => window.scrollTo(0, 0)}>Sign in</NavLink>
                <NavLink to="/signup" className="button signup" onClick={() => window.scrollTo(0, 0)}>Sign up</NavLink>
                </div>
            )}
        {user && (
                 <div>
                   {/*<span>{user.email}</span> */}
                 <button onClick={handleClick}>Log out</button>
        </div>
            )}
    </nav>
  )
}

export default Navbar