import "./slider.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import darksouls from "./slider-img/darksouls.jpg"
import lords from "./slider-img/lords.jpg"
import middle from "./slider-img/middle.jpg"
import soul from "./slider-img/soul.jpg"
import kingdoms from "./slider-img/kingdoms.jpg"
import witcher from "./slider-img/witcher.jpg"
import diablo from "./slider-img/diablo.jpg"
import dragons from "./slider-img/dragons.jpg"
import blood from "./slider-img/blood.jpg"
import {AiFillStar} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"
import {BiSolidStarHalf} from "react-icons/bi"
import prototype from "./slider-img/prototype.jpg"
import half from "./slider-img/half-life.jpg"

function Slider() {   

    return(

        <section className="Main">

          <Swiper
            loop={true}
            slidesPerView={2}
            spaceBetween={-31} 
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper-1"
          >
            <SwiperSlide><a className="slider-div" href="#"><div className="mini-slider-div"><h1>Dark Souls 2</h1><div className="star-div"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BiSolidStarHalf/></div></div><img className="darksouls" src={darksouls} /></a></SwiperSlide>
            
            <SwiperSlide><a className="slider-div" href="#"><div className="mini-slider-div"><h1>Lords of the Fallen</h1><div className="star-div"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div></div><img className="darksouls" src={lords} /></a></SwiperSlide>
            
            <SwiperSlide><a className="slider-div" href="#"><div className="mini-slider-div"><h1>Middle-earth:Shadow of Mordor</h1><div className="star-div"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BiSolidStarHalf/></div></div><img className="darksouls" src={middle} /></a></SwiperSlide>
            
            <SwiperSlide><a className="slider-div" href="#"><div className="mini-slider-div"><h1>Soul Sacrifice</h1><div className="star-div"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BiSolidStarHalf/></div></div><img className="darksouls" src={soul} /></a></SwiperSlide>
            
            <SwiperSlide><a className="slider-div" href="#"><div className="mini-slider-div"><h1>Kingdoms of Amalur:Reckoning</h1><div className="star-div"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BiSolidStarHalf/></div></div><img className="darksouls" src={kingdoms} /></a></SwiperSlide>
            
            <SwiperSlide><a className="slider-div" href="#"><div className="mini-slider-div"><h1>The Witcher:Rise of the White Wolf</h1><div className="star-div"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BiSolidStarHalf/></div></div><img className="darksouls" src={witcher} /></a></SwiperSlide>
            
            <SwiperSlide><a className="slider-div" href="#"><div className="mini-slider-div"><h1>Diablo lll: Reaper of Souls</h1><div className="star-div"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BiSolidStarHalf/></div></div><img className="darksouls" src={diablo} /></a></SwiperSlide>
            
            <SwiperSlide><a className="slider-div" href="#"><div className="mini-slider-div"><h1>Dragons Dogma</h1><div className="star-div"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BiSolidStarHalf/></div></div><img className="darksouls" src={dragons} /></a></SwiperSlide>
            
            <SwiperSlide><a className="slider-div" href="#"><div className="mini-slider-div"><h1>Bloodborne</h1><div className="star-div"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div></div><img className="darksouls" src={blood} /></a></SwiperSlide>
          
          </Swiper>

          <nav className="special-mini-div">

            <div className="special-div">

              <h1>Specials</h1> 

              <button><a href="#">See More</a></button>

            </div>

          </nav>

          <Swiper
            loop={true}
            slidesPerView={2}
            spaceBetween={-32}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper-2"
          >
            <SwiperSlide>
              <a className="slider-div" href="#">
                  <div className="mini-slider-div">
                      <div className="sale">
                          <h1>-20%</h1>
                      </div>
                  </div>
                  <img className="darksouls" src={darksouls} />
              </a>

              <div className="title-div">
                    <h1>Dark Souls 2</h1>
                    <div className="star-div-2">
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <BiSolidStarHalf/>
                  </div>
                  <div className="title-text">
                    <h2>$39.99</h2>
                    <h3>$49.99</h3>
                  </div>
              </div>
            
            </SwiperSlide>
            
            <SwiperSlide>
              <a className="slider-div" href="#">
                <div className="mini-slider-div">
                  <div className="sale">
                    <h1>-25%</h1>
                  </div>
                </div>
                <img className="darksouls" src={lords} />
              </a>
              <div className="title-div">
                    <h1>Lords of the Fallen</h1>
                    <div className="star-div-2">
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiFillStar/>
                      <AiOutlineStar/>
                    </div>
                    <div className="title-text">
                    <h2>$26.25</h2>
                    <h3>$35.00</h3>
                  </div>
                </div>  
            </SwiperSlide>
            
            <SwiperSlide>
              <a className="slider-div" href="#">
                <div className="mini-slider-div">
                  <div className="saleGreen">
                    <h1>-100%</h1>
                </div>
              </div>
              <img className="darksouls" src={soul} />
            </a>
            <div className="title-div">
                  <h1>Soul Sacrifice</h1>
                  <div className="star-div-2">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <BiSolidStarHalf/>
                  </div>
                  <div className="title-text">
                    <h2 className="green-text">FREE</h2>
                    <h3>$29.99</h3>
                  </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <a className="slider-div" href="#">
                <div className="mini-slider-div">
                  <div className="sale">
                    <h1>+10%</h1>
                  </div>
                </div>
                <img className="darksouls" src={prototype} />
              </a>
                <div className="title-div">
                  <h1>Prototype 3</h1>
                  <div className="star-div-2">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <BiSolidStarHalf/>
                  </div>
                  <div className="title-text">
                    <h2>$52</h2>
                    <h3>$47</h3>
                  </div>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <a className="slider-div" href="#">
                <div className="mini-slider-div">
                  <div className="sale">
                    <h1>Sad</h1>
                  </div>
                </div>
                <img className="darksouls" src={half} />
              </a>
              <div className="title-div">
                <h1>Half Life 3</h1>
                <div className="star-div-2">
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <BiSolidStarHalf/>
                </div>
                <div className="title-text">
                    <h2 className="red-text">NEVER</h2>
                  </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
              <a className="slider-div" href="#">
                <div className="mini-slider-div">
                  <div className="sale">
                    <h1>-30%</h1>
                  </div>
                </div>
                <img className="darksouls" src={dragons} />
              </a>
              <div className="title-div">
                <h1>Dragons Dogma</h1>
                <div className="star-div-2">
                  <AiFillStar/>
                  <AiFillStar/> 
                  <AiFillStar/>
                  <AiFillStar/>
                  <BiSolidStarHalf/>
                </div>
                <div className="title-text">
                    <h2>$34.99</h2>
                    <h3>$49.99</h3>
                  </div>
              </div>
            </SwiperSlide>
          
          </Swiper> 

        </section>

    )

}

export default Slider