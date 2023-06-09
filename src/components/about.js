import React, { useEffect } from 'react';

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
import figma from './images/figma.png';
import adobe from './images/adobe-xd.png';
import canva from './images/canva.png';
import jane from './images/jane-doe.jpg';
import john from './images/john-doe.jpg';


import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';


import '../App.css';

export const About = () => {

    useEffect(() => {
        const carousel = document.querySelector(".about-carousel"),
        firstImg = carousel.querySelectorAll(".carousel-element")[0],
        arrowIcons = document.querySelectorAll(".arrows");
        

        let isDragStart = false, prevPageX, prevScrollLeft, positionDiff;

        const showHideIcons = () => {
            let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
            arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
            arrowIcons[1].style.display = carousel.scrollLeft === scrollWidth ? "none" : "block";  
        }

        arrowIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                let firstImgWidth = firstImg.clientWidth + 14; 
                carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth; 
                setTimeout(() => showHideIcons(), 60);
            });
        });

        const autoSlide = () => {

            if(carousel.scrollLeft === (carousel.scrollWidth - carousel.clientWidth)) return;
            positionDiff = Math.abs(positionDiff);
            let firstImgWidth = firstImg.clientWidth + 14;
            let valDifference = firstImgWidth - positionDiff;

            if(carousel.scrollLeft > prevScrollLeft){
                return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
            }
        }
        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            prevScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {
            if(!isDragStart) return;
            e.preventDefault();
            carousel.classList.add("dragging");
            positionDiff = (e.pageX || e.touches[0].pageX)- prevPageX;
            carousel.scrollLeft = prevScrollLeft - positionDiff;   
            showHideIcons();
        }
        
        const dragStop = () => {
            isDragStart = false;
            carousel.classList.remove("dragging");
            autoSlide();
        }

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("touchstart", dragStart);

        carousel.addEventListener("mousemove", dragging);
        carousel.addEventListener("touchmove", dragging);

        carousel.addEventListener("mouseup", dragStop);
        carousel.addEventListener("mouseleave", dragStop);
        carousel.addEventListener("touchleave", dragStop);


      }, []); 


    return (
        <div className='App'>
            <section id="about">
                <div className="sec-about">
                    <div className="about-container d-flex align-items-center justify-content-between">
                        <div>
                            <h1>Hi! I'm Kim Miculob</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, aliquam sequi inventore suscipit veritatis quaerat quis fugiat quam recusandae soluta magni excepturi quidem nesciunt doloremque culpa perferendis. Dignissimos, voluptas vero.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias adipisci ex repellat quo minus dolorem delectus incidunt accusamus earum, modi reprehenderit nemo at consectetur vel officiis. Reiciendis rem qui laudantium? Excepturi minus sint laudantium vero perspiciatis hic rem eos sequi, voluptatem modi doloribus consequatur? Necessitatibus temporibus exercitationem id placeat laudantium error nesciunt?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nostrum voluptatum possimus quaerat vitae, quos fuga, tempore dolorem debitis accusantium porro qui perspiciatis enim, amet illum nemo epudiandae adipisci saepe?</p>
                            <p>Right now I'm based in Iligan City, Philippines.</p>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <iframe title="Embedded Video" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2023311.998346106!2d123.32404999952449!3d7.917904389337854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255767813a59999%3A0x93032899c7db13fd!2sTibanga%2C%20Iligan%20City%2C%20Lanao%20del%20Norte!5e0!3m2!1sen!2sph!4v1687099149684!5m2!1sen!2sph" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        
                        </div>   
                    </div>
                </div>
            </section>

            <section>
                <div className='about-testimonies'>
                    <div className='testimonies d-flex justify-content-between'>
                        <div className='testimonies-box'>
                            <p>
                                &quot; Mollitia, voluptatibus perspiciatis corporis, odio nam reprehenderit quasi neque ab odit facere nulla maxime alias eveniet omnis corrupti molestias similique cum est. &quot;
                            </p>
                            <img src={jane} alt=''/>
                            <div className='witness'>Jane Doe</div>
                            <div>Marketing Director at GitHub</div>
                        </div>
                        <div className='testimonies-box'>
                            <p>
                                &quot; Cupiditate eveniet aperiam similique neque quidem a amet sapiente aliquam commodi omnis modi beatae doloribus vel eos esse, quasi dicta! Necessitatibus, unde. &quot;
                            </p>
                            <img src={john} alt=''/>
                            <div className='witness'>John Doe</div>
                            <div>Creative Director at GitHub</div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='about-skills'>
                    <div className="text-center about-head-icon"><i className='bx bx-hive'></i></div>
                        <h1 className="text-center">Skills for Development</h1>
                        <div class="carousel-container">
                        <i id="left" className='bx bx-chevron-left arrows'></i>
                            <div className="about-carousel snap-inline">
                                <div className="carousel-element" id="element1" draggable="false">
                                    <img src={html} alt="Icons8" />
                                    <div className="carousel-star d-flex justify-content-center">
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                    </div>
                                </div>
                                <div className="carousel-element" id="element2" draggable="false">
                                    <img src={css} alt="Icons8" />
                                    <div className="carousel-star d-flex justify-content-center">
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                    </div>
                                </div>
                                <div className="carousel-element" id="element3" draggable="false">
                                    <img src={javascript} alt="Icons8" />
                                    <div className="carousel-star d-flex justify-content-center">
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i class='bx bxs-star-half' ></i></div>
                                    </div>
                                </div>
                                <div className="carousel-element" id="element4" draggable="false">
                                    <img src={bootstrap} alt="Icons8" />
                                    <div className="carousel-star d-flex justify-content-center">
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i class='bx bxs-star-half' ></i></div>
                                    </div>
                                </div>
                                <div className="carousel-element" id="element5" draggable="false">
                                    <img src={reactimg} alt="Icons8" />
                                    <div className="carousel-star d-flex justify-content-center">
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i class='bx bxs-star-half' ></i></div>
                                    </div>
                                </div>
                                <div className="carousel-element" id="element6" draggable="false">
                                    <img src={nodejsimg} alt="Icons8" />
                                    <div className="carousel-star d-flex justify-content-center">
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i class='bx bx-star' ></i></div>
                                    </div>
                                </div>
                                <div className="carousel-element" id="element7" draggable="false">
                                    <img src={php} alt="Icons8" />
                                    <div className="carousel-star d-flex justify-content-center">
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i class='bx bxs-star-half' ></i></div>
                                    </div>
                                </div>
                                <div className="carousel-element" id="element8" draggable="false">
                                    <img src={laravel} alt="Icons8" />
                                    <div className="carousel-star d-flex justify-content-center">
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i class='bx bx-star' ></i></div>
                                    </div>
                                </div>
                                <div className="carousel-element" id="element9" draggable="false">
                                    <img src={python} alt="Icons8" />
                                    <div className="carousel-star d-flex justify-content-center">
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i class='bx bx-star' ></i></div>
                                    </div>
                                </div>
                                <div className="carousel-element" id="element10" draggable="false">
                                    <img src={django} alt="Icons8" />
                                    <div className="carousel-star d-flex justify-content-center">
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i className='bx bxs-star' ></i></div>
                                        <div className="star"><i class='bx bx-star' ></i></div>
                                    </div>
                                </div>
                                <div className="carousel-element" id="element11" draggable="false">
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
                <div>
                    <h1 className="text-center">Skills for Design</h1>
                    <div className='d-flex justify-content-around design-container'>
                        <div className="about-design d-flex justify-content-center align-items-center" id="">
                            <div className='about-img-wrapper'>
                                <img src={figma} alt="Icons8" />
                            </div>
                        </div>
                        <div className="about-design d-flex justify-content-center align-items-center" id="">
                            <div className='about-img-wrapper'>
                                <img src={adobe} alt="Icons8" />
                            </div>
                        </div>
                        <div className="about-design d-flex justify-content-center align-items-center" id="">
                            <div className='about-img-wrapper'>
                                <img src={canva} alt="Icons8" />
                            </div>
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