import React, { useEffect } from 'react';

import pixzel from './images/pixzel.jpg';
import dreamteam from './images/dreamteam.png';
import adviceB from './images/advice-brands.png';


import { Link } from 'react-router-dom';


import Typewriter from 'typewriter-effect';
import '../App.css';

export const Home = () => {

    useEffect(() => {
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the button that opens the modal
        var btn = document.getElementById("viewProfileBtn");
        
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];
        
        // When the user clicks the button, open the modal 
        btn.onclick = function() {
        modal.style.display = "block";
        }
        
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
        }
      }, []);
  return (
    <div className="App">
            <section id="home">
            <div className="sec-home text-justify">
                <div className="home-container d-flex justify-content-around">
                        <div className="home-container-left">
                            <div>
                                <h2>Hey there, I'm Kim</h2>
                            </div>
                            <div>
                                <h1><span className="auto-type">
                                <Typewriter
                                    options={{
                                        strings: ['WordPress Developer', 'Full-Stack Developer', 'Web Designer' ],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    />
                                  </span></h1>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut vitae deserunt, veritatis voluptas facilis quidem quas temporibus, quo laudantium perferendis, modi sint. Voluptatum reprehenderit, ducimus inventore doloremque excepturi consequuntur nesciunt?</p>
                            </div>
                            <div className="d-flex justify-content-between btn-wrapper">
                                <a href="#company"><button>EXPLORE WORK</button></a>
                                
                                <button id="viewProfileBtn">VIEW RESUME</button>
                               
                                <div id="myModal" className="modal">

                                    <div className="modal-content">
                                        <div className='resume-content'>
                                            <div className='gray-background'>
                                                <div className='d-flex justify-content-end'>
                                                    <span className="close">&times;</span>
                                                </div>
                                            </div>
                                            <div className='white-background'>
                                                <div className='name-header'>
                                                    <h2>KIM P. MICULOB</h2>
                                                    <h5>WEB DEVELOPER</h5>
                                                </div>
                                                <div className='user-contacts d-flex justify-content-between'>
                                                    <div className='d-flex align-content-center'>
                                                        <span><i class='bx bx-home'></i></span>
                                                        <span>Araneta Street, Población Iligan City, Lanao del Norte</span>
                                                    </div>
                                                    <div className='d-flex align-content-center'>
                                                        <span><i class='bx bx-phone' ></i></span>
                                                        <span>+639457416928</span>
                                                    </div>
                                                    <div className='d-flex align-content-center'>
                                                        <span><i class='bx bx-envelope' ></i></span>
                                                        <span>kimmiculob.official@gmail.com</span>
                                                    </div>
                                                </div>
                                                <div className='about-user'>
                                                    <div className='underline'></div>
                                                    <h6>ABOUT ME</h6>
                                                    <div className='aboutme-paragraph'>
                                                        Attentive to details, developed when working in a Quality Assurance company and has the skills for developing web pages demonstrated through the number of projects created. 
                                                    </div>
                                                </div>
                                                <div className='otheruser-infor d-flex'>
                                                    <div className='user-skills'>
                                                        <div className='user-skills-header'>SKILLS</div>
                                                        <ul>
                                                            <li>HTML, CSS, JavaScript</li>
                                                            <li>Bootstrap</li>
                                                            <li>ReactJs</li>
                                                            <li>nodeJs</li>
                                                            <li>PHP</li>
                                                            <li>MySQL</li>
                                                            <li>Laravel</li>
                                                            <li>Git</li>
                                                            <li>Python — Django</li>
                                                            <li>Java &#40;Basic&#41;</li>
                                                            <li>C# &#40;Basic&#41;</li>
                                                            <li>Research</li>
                                                            <li>Attention to Details</li>
                                                        </ul>
                                                        <div className='user-skills-header'>SEMINARS</div>
                                                            <div className='seminar-title'>DEVCON Summit 2018 and 2019</div>
                                                                <ul>
                                                                    <li>Capitol University, Cagayan de Oro City</li>
                                                                </ul>
                                                            <div className='seminar-title'>Search Engine Optimization and Web Application Development Seminar</div>
                                                                <ul>
                                                                    <li>St. Peter’s College</li>
                                                                </ul>
                                                    </div>
                                                    <div className='user-background'>
                                                        <div className='education'>
                                                            <div className='underline'></div>
                                                            <h6>EDUCATION</h6>
                                                            <div className='school-years'>
                                                                <div className='year'>
                                                                    <div>
                                                                        2018 - 2022
                                                                    </div>
                                                                    <div>
                                                                        Tertiary Level &#x2022;  Bachelor of Science in Computer Science &#x2022;  St. Peter’s College
                                                                    </div>
                                                                </div>
                                                                <div className='year'>
                                                                    <div>
                                                                        2010 - 2014
                                                                    </div>
                                                                    <div>
                                                                        Secondary Level &#x2022;  Corpus Christi Parochial School of Iligan
                                                                    </div>
                                                                </div>
                                                                <div className='year'>
                                                                    <div>
                                                                        2004 - 2010
                                                                    </div>
                                                                    <div>
                                                                        Primary Level &#x2022; Batch Salutatorian &#x2022; United Methodist Development Academy
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='experiences'>
                                                            <div className='underline'></div>
                                                            <h6>EXPERIENCE</h6>
                                                            <div className='experience-years'>
                                                                <div className='year'>
                                                                    <div>
                                                                        February 2022 - June 2022
                                                                    </div>
                                                                    <div>
                                                                        Front-end Developer • DreamTeam PH                                                                    
                                                                    </div>
                                                                </div>
                                                                <div className='year'>
                                                                    <div>
                                                                        December 2021 - January 2022
                                                                    </div>
                                                                    <div>
                                                                        Quality Assurance • Advice Brands
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='projects-created'>
                                                            <div className='underline'></div>
                                                            <h6>PROJECTS CREATED</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-between projects'>
                                                    <div className='project-lists d-flex justify-content-between'>
                                                            <div>
                                                                <ul>
                                                                    <li>Instagram Clone</li>
                                                                    <li>Slack Clone</li>
                                                                    <li>School Website</li>
                                                                    <li>Calculator</li>
                                                                </ul>
                                                            </div>
                                                            <div>
                                                                <ul>
                                                                    <li>Archiving System</li>
                                                                    <li>Camera Detection with message alert system</li>
                                                                    <li>Student enrollment with admin side system</li>
                                                                    <li>Simple Chat system</li>
                                                                </ul>
                                                            </div>
                                                    </div>
                                                    <div>
                                                        <button>Download Resume</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
    
                        <div className="home-container-right d-flex justify-content-center">
                            <div>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" overflow="hidden" xmlns="http://www.w3.org/2000/svg" alt="credits to CeramicSoda">
                                <use href="#cube" x="128" y="320" stroke-width="2"  opacity="0.3">
                                    <animate attributeName="stroke" dur="6s" repeatCount="indefinite"
                                            values="#FF9AA2;#FFB7B2;#FFDAC1;#E2F0CB;#B5EAD7;#C7CEEA;#FF9AA2"/>
                                </use>

                                <rect width="512" height="512" y="384" fill="url(#fade)"/>
                                <use href="#cube" x="128" y="128" stroke-width="2">
                                    <animate attributeName="stroke" dur="6s" repeatCount="indefinite"
                                            values="#FF9AA2;#FFB7B2;#FFDAC1;#E2F0CB;#B5EAD7;#C7CEEA;#FF9AA2"/>
                                </use>

                                <defs>
                                    <g id="cube">
                                        <use href="#cube_outline" stroke-linejoin="round" stroke-width="16" fill="url(#stars)"/>
                                        <use href="#cube_base" stroke-width=".5"/>
                                        <use href="#cube_outline" stroke-linejoin="round" stroke-width="6" stroke="#141417"/>
                                    </g>	

                                    <g id="cube_outline">
                                        <path>
                                            <animate attributeName="d" dur="1.5s" repeatCount="indefinite" calcMode="spline"
                                            keyTimes="0;0.5;0.5;1"
                                            keySplines="0.8 0.2 0.6 0.9; 
                                                        0.8 0.2 0.6 0.9; 
                                                        0.8 0.2 0.6 0.9"
                                            values="M10 64 L128 0 L246 64 L246 192 L128 256 L10 192Z;
                                                    M40 20 L216 20 L216 108 L216 236 L40 236 L40 172Z;
                                                    M216 20 L40 20 L40 108 L40 236 L216 236 L216 172Z;
                                                    M246 64 L128 0 L10 64 L10 192 L128 256 L246 192Z"/>
                                        </path>
                                    </g>

                                    <g id="cube_base">
                                        <path fill="#fff1"> 
                                        <animate attributeName="d" dur="1.5s" repeatCount="indefinite" calcMode="spline"
                                            keyTimes="0;0.5;1"
                                            keySplines="0.8 0.2 0.6 0.9; 
                                                        0.8 0.2 0.6 0.9"
                                            values="M10 64 L128 0 L246 64 L128 128Z;
                                                    M40 20 L216 20 L216 108 L40 108Z;
                                                    M128 0 L246 64 L128 128 L10 64Z"/>
                                        </path>
                                        <path> 
                                        <animate attributeName="d" dur="1.5s" repeatCount="indefinite" calcMode="spline"
                                            keyTimes="0;0.5;0.5;1"
                                            keySplines="0.8 0.2 0.6 0.9; 
                                                        0.8 0.2 0.6 0.9; 
                                                        0.8 0.2 0.6 0.9"
                                            values="M10 64 L128 128 L128 256 L10 192Z;
                                                    M40 20 L40 108 L40 236 L40 172Z;
                                                    M216 20 L216 108 L216 236 L216 172Z;
                                                    M246 64 L128 128 L128 256 L246 192Z"/>
                                        <animate attributeName="fill" dur="1.5s" repeatCount="indefinite" keyTimes="0;0.5;0.5;1"
                                            values="#fff0;#fff0;#fff2;#fff2"/>
                                        </path>
                                        <path fill="#407080">
                                        <animate attributeName="d" dur="1.5s" repeatCount="indefinite" calcMode="spline"
                                            keyTimes="0;0.5;1"
                                            keySplines="0.8 0.2 0.6 0.9; 
                                                        0.8 0.2 0.6 0.9"
                                            values="M246 64 L128 128 L128 256 L246 192Z;
                                                    M216 108 L40 108 L40 236 L216 236Z;
                                                    M128 128 L10 64 L10 192 L128 256Z"/>
                                            <animate attributeName="fill" dur="1.5s" repeatCount="indefinite" keyTimes="0;0.5;1"
                                                values="#fff2;#fff1;#fff0"/>
                                        </path>
                                    </g>
                                    <linearGradient id="fade" gradientTransform="rotate(90)">
                                        <stop offset="0" stop-color="#14141700"/>
                                        <stop offset="0.25" stop-color="#131313"/>
                                    </linearGradient>
                                    <linearGradient id="sky" gradientTransform="rotate(90)">
                                        <stop offset="0.5" stop-color="#141417"/>
                                        <stop offset="1" stop-color="#131313"/>
                                    </linearGradient>
                                
                                    
                                    <pattern id="stars" x="0" y="0" width="50%" height="50%" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                                        <rect width="256" height="256" fill="url(#sky)"/>
                                        <use href="#star01" x="24" y="32"  fill="white"/>
                                        <use href="#star01" x="64" y="96"  fill="#ad9dcb" transform="rotate(90 80 112)"/>
                                        <use href="#star01" x="224" y="102"  fill="#ad9dcb"/>
                                        <use href="#star01" x="192" y="112"  fill="#E0E8EA" transform="rotate(90 80 112)"/>
                                        <use href="#star02" x="16" y="64"  fill="#ad9dcb"/>
                                        <use href="#star03" x="96" y="16"  fill="#E0E8EA"/>
                                        <use href="#star04" x="64" y="64"  fill="white"/>
                                        <use href="#star04" x="8" y="16"  fill="#ad9dcb"/>
                                        <use href="#star04" x="110" y="96"  fill="#E0E8EA"/>
                                        <use href="#star02" x="160" y="24"  fill="#ad9dcb"/>
                                        <use href="#star03" x="196" y="60"  fill="#E0E8EA"/>
                                        <use href="#star04" x="64" y="212"  fill="white"/>
                                        <use href="#star04" x="218" y="216"  fill="#ad9dcb"/>
                                        <use href="#star03" x="228" y="220"  fill="#E0E8EA"/>
                                        <use href="#star02" x="140" y="128"  fill="#ad9dcb"/>
                                        <use href="#star03" x="24" y="140"  fill="#E0E8EA"/>
                                        <use href="#star04" x="95" y="160"  fill="white"/>
                                        <use href="#star04" x="180" y="128"  fill="#ad9dcb"/>
                                        <use href="#star03" x="200" y="136"  fill="#E0E8EA"/>
                                        <use href="#star10" x="120" y="120"  stroke="#E0E8EA"/>
                                        <use href="#star11" x="48" y="64"  stroke="#ad9dcb"/>
                                    </pattern>
                                    <path id="star01" transform="scale(0.5)">
                                        <animate attributeName="d" dur="3s" repeatCount="indefinite" calcMode="spline"
                                            keyTimes="0;0.5;1" keySplines="0.8 0.2 0.6 0.9; 0.8 0.2 0.6 0.9"
                                            values="M16 0 Q16 16 24 16 Q16 16 16 32 Q16 16 8 16 Q16 16 16 0Z;
                                                    M16 8 Q16 16 32 16 Q16 16 16 24 Q16 16 0 16 Q16 16 16 8Z;
                                                    M16 0 Q16 16 24 16 Q16 16 16 32 Q16 16 8 16 Q16 16 16 0Z"/>
                                    </path>
                                    <circle id="star02">
                                        <animate attributeName="r" dur="3s" repeatCount="indefinite" calcMode="spline"
                                            keyTimes="0;0.5;1" keySplines="0.8 0.2 0.6 0.9; 0.8 0.2 0.6 0.9"
                                            values="0;2;0"/>
                                    </circle>
                                    <circle id="star03">
                                        <animate attributeName="r" dur="6s" repeatCount="indefinite" calcMode="spline"
                                            keyTimes="0;0.5;1" keySplines="0.8 0.2 0.6 0.9; 0.8 0.2 0.6 0.9"
                                            values="3;1;3"/>
                                    </circle>
                                    <circle id="star04" r="1"/>

                                    <path id="star10" stroke-width="2">
                                        <animate attributeName="d" dur="5s" repeatCount="indefinite" 
                                            keyTimes="0;0.90;0.97;1"
                                            keySplines="0 0.4 1 0.2; 0 0.4 1 0.2; 0 0.4 1 0.2"
                                            values="M64 0 L64 0Z; M64 0 L64 0Z; M48 12 L0 48Z; M0 48 L0 48Z"/>
                                        <animate attributeName="opacity" dur="5s" repeatCount="indefinite"
                                            keyTimes="0;0.90;0.97;1"
                                            values="1; 1; 0.6; 0"/>
                                    </path>
                                    <path id="star11" stroke-width="3">
                                        <animate attributeName="d" dur="6s" repeatCount="indefinite" delay="3s"
                                            keyTimes="0;0.90;0.95;1"
                                            keySplines="0 0.4 1 0.2; 0 0.4 1 0.2; 0 0.4 1 0.2"
                                            values="M64 0 L64 0Z; M64 0 L64 0Z; M48 12 L0 48Z; M0 48 L0 48Z"/>
                                        <animate attributeName="opacity" dur="6s" repeatCount="indefinite" delay="3s"
                                            keyTimes="0;0.90;0.95;1"
                                            values="1; 1; 0.6; 0"/>
                                    </path>
                                </defs>
                                </svg>
                            </div>
                        </div>
                </div>
            </div>
        </section>

        <section id="company">
            <div className="sec-company">
                <div className="company-container">
                    <div className="text-center company-head-icon"><i class='bx bx-buildings' ></i></div>
                    <h4>I had the pleasure of working with these awesome companies</h4>
                    <div>
                        <ul className='company-logos d-flex justify-content-center'>
                            <li><img src={pixzel} alt='We Are Pixzel Logo'></img></li>
                            <li><img src={adviceB} alt='Advice Brands logo'></img></li>            
                            <li><img src={dreamteam} alt='DreamTeam PH logo'></img></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="project">
            <div className="sec-project">
                <div className="project-container">
                    <div className="text-center project-head-icon"><i className='bx bxl-graphql'></i></div>
                    <h1 className="text-center">Projects Created</h1>

                </div>
            </div>
        </section>

        <section id="reachOut">
            <div className="sec-reachOut">
                <div className="reachOut-container d-flex justify-content-between align-items-center">
                    <div className='reachOut-container-left'>
                        <div className='d-flex reachOut-container-typewrite'>
                            <span>I'm currently available for </span><span className="auto-type">
                                    <Typewriter
                                        options={{
                                            strings: [' Full Time Work!', ' Part Time Work!', ' Freelance!'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                        />
                                    </span>
                        </div>
                        <div className='reachOut-container-p'>
                            <p>If you're looking for a designer and developer that likes to get stuff done, let's talk.</p>
                        </div>
                        <div className='d-flex reachOut-container-contact'>
                            <span>Got a project in mind?</span> 
                            <span className='ahref'><Link to="/contact">Walk me through it!</Link></span>
                        </div>
                    </div>
                    
                    <div className='reachOut-container-right'>
                        <div>
                             <p>kimmiculob.official@gmail.com</p>
                             <p>(+63) 945 7416 928</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Home;
