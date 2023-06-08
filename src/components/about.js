import React from 'react';

import html from './images/html.png';
import css from './images/css.png';
import javascript from './images/javascript.png';
import bootstrap from './images/bootstrap.png';
import reactimg from './images/react.png';
import nodejsimg from './images/nodejs.png';
import php from './images/php.png';
import laravel from './images/laravel.png';
import python from './images/python.png';
import django from './images/django.png';
import java from './images/java.png';


import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';


import '../App.css';

export const About = () => {
    return (
        <div className='App'>
                <section id="about">
                <div className="sec-about">
                    <div className="about-container">
                        <div>
                            <h1>Hi! I'm Kim Miculob</h1>
                        </div>
                        <div className="text-center about-head-icon"><i className='bx bx-hive'></i></div>
                        <h1 className="text-center">Skills for Development</h1>
                        <div class="carousel-container">
                        <i id="left" className='bx bx-chevron-left arrows'></i>
                        <div className="about-carousel snap-inline">
                            <div className="carousel-element" id="element1">
                                <img src={html} alt="Icons8" />
                                <div className="carousel-star d-flex justify-content-center">
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                </div>
                            </div>
                            <div className="carousel-element" id="element2">
                                <img src={css} alt="Icons8" />
                                <div className="carousel-star d-flex justify-content-center">
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                </div>
                            </div>
                            <div className="carousel-element" id="element3">
                                <img src={javascript} alt="Icons8" />
                                <div className="carousel-star d-flex justify-content-center">
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i class='bx bxs-star-half' ></i></div>
                                </div>
                            </div>
                            <div className="carousel-element" id="element4">
                                <img src={bootstrap} alt="Icons8" />
                                <div className="carousel-star d-flex justify-content-center">
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i class='bx bxs-star-half' ></i></div>
                                </div>
                            </div>
                            <div className="carousel-element" id="element5">
                                <img src={reactimg} alt="Icons8" />
                                <div className="carousel-star d-flex justify-content-center">
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i class='bx bxs-star-half' ></i></div>
                                </div>
                            </div>
                            <div className="carousel-element" id="element6">
                                <img src={nodejsimg} alt="Icons8" />
                                <div className="carousel-star d-flex justify-content-center">
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i class='bx bx-star' ></i></div>
                                </div>
                            </div>
                            <div className="carousel-element" id="element7">
                                <img src={php} alt="Icons8" />
                                <div className="carousel-star d-flex justify-content-center">
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i class='bx bxs-star-half' ></i></div>
                                </div>
                            </div>
                            <div className="carousel-element" id="element8">
                                <img src={laravel} alt="Icons8" />
                                <div className="carousel-star d-flex justify-content-center">
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i class='bx bx-star' ></i></div>
                                </div>
                            </div>
                            <div className="carousel-element" id="element9">
                                <img src={python} alt="Icons8" />
                                <div className="carousel-star d-flex justify-content-center">
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i class='bx bx-star' ></i></div>
                                </div>
                            </div>
                            <div className="carousel-element" id="element10">
                                <img src={django} alt="Icons8" />
                                <div className="carousel-star d-flex justify-content-center">
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i class='bx bx-star' ></i></div>
                                </div>
                            </div>
                            <div className="carousel-element" id="element11">
                                <img src={java} alt="Icons8" />
                                <div className="carousel-star d-flex justify-content-center">
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i className='bx bxs-star' ></i></div>
                                    <div className="star"><i class='bx bx-star' ></i></div>
                                </div>
                            </div>
                        </div>
                            <i id="right" className='bx bx-chevron-right arrows'></i>
                        </div>
                        
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

export default About;