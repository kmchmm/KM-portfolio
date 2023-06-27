import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';


import '../App.css';

export const Header = () => {
    
    useEffect(() => {
        const menuBtn = document.querySelector('.menu-btn');
        let menuOpen = false;
        const menu = document.querySelector('.menu');
        const menuBrgBfr = document.querySelector('.menu-btn_burger-bfr');
        const menuBrgAft = document.querySelector('.menu-btn_burger-aft');
        menuBtn.addEventListener('click', () => {
            if(!menuOpen){
                menuBtn.classList.add('open');
                menuOpen = true;
                menu.style.display = "block";
                menuBrgBfr.style.backgroundColor = "#ffffff";
                menuBrgAft.style.backgroundColor = "#ffffff";
            } else {
                menuBtn.classList.remove('open');
                menuOpen = false;
                menu.style.display = "none";
                menuBrgBfr.style.backgroundColor = "#ffffff";
                menuBrgAft.style.backgroundColor = "#ffffff";
            }
        })
      }, []);   
    return (
        <div className='App'>
                <div class="menu">
                    <div className="d-flex align-items-center menu-content">
                        <ul className="navigation-links d-flex align-items-center">
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
                    </div>  
                </div>
            <div className='header d-flex justify-content-end align-items-center'>
                <header>
                    <nav className=" nav-container">
                        <div className="menu-btn">
                            <div className="menu-btn_burger-bfr"></div>
                            <div className="menu-btn_burger"></div>
                            <div className="menu-btn_burger-aft"></div>
                        </div>
                    </nav>        
                </header>
            </div>

        </div>
    );
}

export default Header;