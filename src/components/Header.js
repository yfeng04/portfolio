import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import logo from '../images/logo-small.png';

function Header() {
    
    return (
        <header>
            <Link className="logo-image" to='/'><img src={logo} alt="Site logo" /></Link>
            
            <NavBar />
        </header>
    )
}

export default Header;
