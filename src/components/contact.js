import React from 'react';
import '../App.css';

import Typewriter from 'typewriter-effect';


function Contact (){
    return (
        <div className='App'>
            <section id='contact'>
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
                            <br />
                            <div className='reachOut-container-p'>
                                <p>If you're looking for a designer and developer that likes to get stuff done, let's talk.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-email d-flex justify-content-between">
                       <div>kimmiculob.official@gmail.com</div>
                       <div>(+63) 945 7416 928</div>                            
                    </div>
                </div>

                <div className="contact-timezone">
                    <div>
                        <h3>Before sending me a message, here are some things you should know:</h3>
                        <br/>
                        
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Contact;