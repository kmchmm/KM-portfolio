import React from 'react';

import '../App.css';

function Footer(){
    return (
        <div className='App'>
            <footer>
                <div className="footer">
                    <div className="d-flex justify-content-between align-items-center footer-divs">
                        <div>
                            <ul className="d-flex justify-content-between footer-privacy">
                                <li>Privacy Policy</li>
                                <li>Terms & Condition</li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <p>&copy; Copyright Kim Miculob 2023. All rights reserved.</p>
                            </div>
                        </div> 
                        <div>
                            <ul className="d-flex justify-content-around footer-logos">
                                <li><i class='bx bxl-facebook-circle' ></i></li>
                                <li><i class='bx bxl-instagram' ></i></li>
                                <li><i class='bx bxl-linkedin-square' ></i></li>
                                <li><i class='bx bxl-twitter' ></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;