import './lastfooter.scss';
import berserk from "./lastfooter-img/berserk.jpeg"
import React from 'react';
import {BiLogoDiscord} from "react-icons/bi"
import {BsTwitch} from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"
import {AiFillTwitterSquare} from "react-icons/ai"

function LastFooter() {

    React.useEffect(()=> {

        window.addEventListener("scroll", function() {
            const distance = window.scrollY;
            document.querySelector("section").style.transform = `translateY(${distance *
            .4}px)`;
            document.querySelector(
              ".cont-divs"
            ).style.transform = `translateY(${distance * 0.3}px)`;
          })
    })
    
  return (
  
    <footer> 

        <section className='section-2'>

            <div className='cont-divs'>

                <img src={berserk} />

                <h2>Connect socially with <b>Youplay</b></h2>

                <div className='call-div'>

                    <div className='mini-call-div-1'>
                      
                      <BiLogoDiscord className='discord'/>
                     
                    </div>

                    <div className='mini-call-div-2'>
                      
                      <BsTwitch className='discord'/>
                    
                    </div>

                    <div className='mini-call-div-3'>
                      
                        <AiFillYoutube className='discord'/>
                    
                    </div>

                    <div className='mini-call-div-4'>
                      
                      <AiFillTwitterSquare className='discord'/>
                    
                    </div>
 
                </div> 

                <div className='footer-div'>

                    <h1>2020 © nK. All rights reserved</h1>

                </div>

            </div>

        </section>

    </footer>
  
  )
  
}

export default LastFooter;