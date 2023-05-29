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
                    <h1 className="text-center">Skills & Technologies</h1>
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
    </div>

    );
}

export default About;