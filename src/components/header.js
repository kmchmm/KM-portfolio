import { Link } from 'react-router-dom';

import logo from './images/logo.png';
import '../App.css';

export const Header = () => {   
    return (
        <div className='App'>
            <header>
                <nav className="d-flex justify-content-between align-items-center">
                    <div className="nav-image-container">
                        <img src={logo} alt="lordicon" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center navigation">
                        <ul className="d-flex justify-content-between navigation-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <ul className="hamburger">
                            <li className="">
                                <div className="bar"></div>
                                <div className="bar"></div>
                                <div className="bar"></div>
                            </li>
                        </ul>
                    </div>
                </nav>        
            </header>
        </div>
    );
}

export default Header;