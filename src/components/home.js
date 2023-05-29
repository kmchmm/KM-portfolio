import React from 'react';

import mouse from './images/mouse.gif';


import { Link } from 'react-router-dom';


import Typewriter from 'typewriter-effect';
import '../App.css';

export const Home = () => {

  return (
    <div className="App">
            <section id="home">
            <div className="sec-home text-justify">
                <div className="home-container d-flex justify-content-around">
                        <div className="home-container-left">
                            <div>
                                <h1><span className="auto-type">
                                <Typewriter
                                    options={{
                                        strings: ['WordPress Developer', 'Full-Stack Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    />
                                  </span></h1>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut vitae deserunt, veritatis voluptas facilis quidem quas temporibus, quo laudantium perferendis, modi sint. Voluptatum reprehenderit, ducimus inventore doloremque excepturi consequuntur nesciunt?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum voluptates iste molestiae obcaecati maiores velit quos a suscipit enim alias quo, nobis in repudiandae natus saepe dicta assumenda quod repellendus.</p>
                            </div>
                            <div className="d-flex justify-content-between btn-wrapper">
                                <a href="#company"><button>EXPLORE WORK</button></a>
                                <button>VIEW PROFILE</button>
                            </div>
                        </div>
    
                        <div className="home-container-right d-flex justify-content-center">
                            <div>
                                <img src={mouse} alt="lordicon" />
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
                <div className="reachOut-container">
                    <div>
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
                        <div>
                            If you're looking for a designer and developer that likes to get stuff done, let's talk.
                        </div>
                        <div>
                            Got a project in mind? <span className='ahref'><Link to="/contact">Let's Talk!</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Home;
