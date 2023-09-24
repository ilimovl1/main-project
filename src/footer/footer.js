import './footer.scss';
import war from "./footer-img/war.jpg"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import coast from "./footer-img/coast.png"
import wilder from "./footer-img/wilder.png"
import handmade from "./footer-img/handmade.png"
import pomp from "./footer-img/pomp.png"
import vintage from "./footer-img/vintage.png"
import forged from "./footer-img/forged.png"
import mc from "./footer-img/mc.png"
import hat from "./footer-img/hat.png"
import {FaCcVisa} from "react-icons/fa"
import {BiSolidJoystick} from "react-icons/bi"
import {GiBanknote} from "react-icons/gi"
import {IoIosPeople} from "react-icons/io"

function Footer() {

    React.useEffect(()=> {

        window.addEventListener("scroll", function() {
            const distance = window.scrollY;
            document.querySelector("section").style.transform = `translateY(${distance *
            .4}px)`;
            document.querySelector(
              ".cont-div"
            ).style.transform = `translateY(${distance * 0.3}px)`;
          })
    }) 

  return (
  
    <footer className='footer'>

        <section className='section-1'>

            <div className='cont-div'>

                <img src={war}/>
                
                <h1>PARTNERS</h1>
                
                <div className='carusel-div'>

                  <Swiper
                      loop={true}
                      slidesPerView={2}
                      spaceBetween={-20}
                      freeMode={true}
                      modules={[FreeMode, Pagination]}
                      className="mySwiper-3"
                  >
                      <SwiperSlide className='sw-slide'><img src={coast} /></SwiperSlide>
                      
                      <SwiperSlide className='sw-slide'><img src={wilder} /></SwiperSlide>
                      
                      <SwiperSlide className='sw-slide'><img src={handmade} /></SwiperSlide>
                      
                      <SwiperSlide className='sw-slide'><img src={pomp} /></SwiperSlide>
                      
                      <SwiperSlide className='sw-slide'><img src={vintage} /></SwiperSlide>
                      
                      <SwiperSlide className='sw-slide'><img src={forged} /></SwiperSlide>
                      
                      <SwiperSlide className='sw-slide'><img src={mc} /></SwiperSlide>
                      
                      <SwiperSlide className='sw-slide'><img src={hat} /></SwiperSlide>
                    
                  </Swiper>

                </div> 

            </div>

        </section>

        <section className='buy-div'>

          <h1>Why Buy from Us</h1>
          <div className='mini-buy-div'>

            <div className='mini-buy-div-1'>

              <div>

                <FaCcVisa className='visa'/>
                <h2>Payment</h2>
                <h4>More than 10 payment systems</h4>

              </div>

            </div>
            <div className='mini-buy-div-2'>
              
                <div>

                  <BiSolidJoystick className='visa'/>
                  <h2>Games</h2>
                  <h4>A large number of games</h4>

                </div>

            </div>
            <div className='mini-buy-div-3'>
 
              <div>

                  <GiBanknote className='visa'/>
                  <h2>Cheap</h2>
                  <h4>Lowest prices on the internet</h4>

              </div>

            </div>
            
            <div className='mini-buy-div-4'>
                
                <div>

                    <IoIosPeople className='visa'/>
                    <h2>Community</h2>
                    <h4>The largest gaming community</h4>

                </div>

            </div>

          </div>

        </section>

    </footer>
  
  )
  
}

export default Footer;
