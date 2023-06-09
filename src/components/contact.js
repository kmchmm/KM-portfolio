import '../App.css';
import React, { useEffect } from 'react';


import Typewriter from 'typewriter-effect';


function Contact (){
    useEffect(() => {
        const handleAccordionClick = (event) => {
          const accordion = event.target;
          accordion.classList.toggle("active");
          const panel = accordion.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        };
    
        const accordions = document.querySelectorAll(".accordion");
        accordions.forEach((accordion) => {
          accordion.addEventListener("click", handleAccordionClick);
        });
    
        return () => {
          accordions.forEach((accordion) => {
            accordion.removeEventListener("click", handleAccordionClick);
          });
        };
      }, []);

    return (
        <div className='App'>
            <section id='contact'>
                <div className="sec-reachOut d-flex">
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
                        </div>
                    </div>
                    
                    <div className="contact-email d-flex justify-content-between">
                       <div>kimmiculob.official@gmail.com</div>
                       <div>(+63) 945 741 6928</div>                            
                    </div>
                </div>
                
                <div className='contact-client-info'>
                    <div className='contact-client-info-header'>
                        <div className="text-center contact-client-info-header-icon"><i class='bx bxs-user-check'></i></div>
                        <h2>About You</h2> 
                    </div>
                    <div className='d-flex contact-client-info-forms'>
                        <div className="contact-timezone">
                            <div>
                                <h3>Before sending me a message, here are some things you should know:</h3>
                                <div>
                                    <button class="accordion">What timezone are you in?</button>
                                    <div class="panel">
                                        <p>UTC</p>
                                    </div>

                                    <button class="accordion">Do we make a contract?</button>
                                    <div class="panel">
                                        <p>Yes</p>
                                        <p>No</p>  
                                    </div>

                                    <button class="accordion">How much do you charge for a website?</button>
                                    <div class="panel">
                                        <p>&#36; 0 &#8722; &#36; 100</p>
                                        <p>&#36; 101 &#8722; &#36; 500</p>
                                        <p>&#36; 501 &#8722; &#36; 1000</p>
                                        <p>&#36; 1000&#x2b;</p>
                                    </div>

                                    <button class="accordion">Do you charge by the hour?</button>
                                    <div class="panel">
                                        <p>Yes</p>
                                        <p>No</p>                                   
                                    </div>      
                                    
                                    <button class="accordion">Are you working with a team?</button>
                                    <div class="panel">
                                        <p>Yes</p>
                                        <p>No</p>
                                    </div>                
                                </div>
                            </div>
                        </div>
                        <div className="contact-inputs">
                            <div>
                                <h3>Got a project in mind? Use the form to give me as much detail as possible and I'll get back to you as soon as I can.</h3>
                                <form>
                                    <div className='d-flex justify-content-between contact-inputs-divs'>
                                        <input type="text" name="" value="" placeholder='Name'/>
                                        <input type="text" name="" value="" placeholder='Email Address'/>
                                    </div>
                                    <div className='d-flex justify-content-between contact-inputs-divs'>
                                        <input type="text" name="" value="" placeholder='Budget range'/>
                                        <input type="text" name="" value="" placeholder='Timeline'/>
                                    </div>
                                    <div>
                                        <textarea rows="5" cols="3" placeholder='Project details'></textarea>
                                    </div>
                                        <button>Let's do this</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                               
            

            </section>
        </div>

    );
}

export default Contact;