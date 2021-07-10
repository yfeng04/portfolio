import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';


function NavLinks() {
    return (
    <ul className="menu-items">
        <li><NavLink to='/work'>Work</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li>
            <Link 
                className="contact-link" 
                to="contact" 
                smooth={true} 
                duration={1000} >
                Contact
            </Link>
        </li>
    </ul>
       
    )
}

export default NavLinks;
