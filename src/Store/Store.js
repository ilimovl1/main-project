import './Store.scss';
import Header from '../Header/Header';
import Columns from '../columns/column';
import LastFooter from '../lastfooter/lastfooter';
import React from 'react';
import axios from "axios"
import {Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, Pagination } from 'swiper/modules';
import sekiro from "./storeImg/sekiro.jpg"
import war from "./storeImg/war.jpg"
import gerald from "./storeImg/gerald.jpg"
import {AiFillStar} from "react-icons/ai"
import blood from "./storeImg/blood.jpg"
import dark from "./storeImg/darksouls.jpg" 
import king from "./storeImg/kingdoms.jpg"
import diablo from "./storeImg/diablo.jpg"

function Store() {

  const src = "https://64943cf70da866a953676589.mockapi.io/games"

  const [card, setCard] = React.useState([])

  const [value, setValue] = React.useState("s")

  React.useEffect(() => {

    async function games(){

      const res = await axios.get(src)

      setCard(res.data)

    }

    games()

  }, [])


  return (
  
  <div className='Main'>
    
    {/* <Header/> */}

    <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={-30} 
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="Swiper"
          >

            <SwiperSlide className='SwiperSlide'>

                <img className='sekiro' src={sekiro}/>

                <div>

                    <h1></h1>
                    <button></button>

                </div>

            </SwiperSlide>

            <SwiperSlide className='SwiperSlide'>

                <img src={war}/>

                <div>

                    <h1></h1>
                    <button></button>

                </div>

            </SwiperSlide>

            <SwiperSlide className='SwiperSlide'>

                <img className='gerald' src={gerald}/>

                <div>

                    <h1></h1>
                    <button></button>

                </div>

            </SwiperSlide>


    </Swiper>
    
    <section className='card-section'>{card.filter(obj => obj.GameName.includes(value)).map(obj =>
        
        <div className='div-1'>
        
          <img src={obj.avatar}/>
          <h1>{obj.GameName}</h1>
          <h2>
            <div><AiFillStar/>
              <AiFillStar/>
              <AiFillStar/> 
              <AiFillStar/> 
              <AiFillStar/></div>
              {obj.price}
              
              <h3>{obj.name} <h4>{obj.free}</h4></h3> 

              </h2>   
        
        </div>
        
        )}
        
        <div className='div-2'>

          <div className='Search-div'>

            <h3>Search by Games:</h3>
            <input onChange={(event) => setValue(event.target.value)} placeholder='enter search term'/>

          </div>

          <div className='category-div'>

              <div>

                  <h1>Categories</h1>

              </div>
              
              <div className='a-div'>

                  <a href='#'>All</a>
                  <a href='#'>Action</a>
                  <a href='#'>Adventure</a>
                  <a href='#'>Casual</a>
                  <a href='#'>Indie</a>
                  <a href='#'>Racing</a>
                  <a href='#'>RPG</a>
                  <a href='#'>Simulation</a>
                  <a href='#'>Strategy</a>

              </div>
              
          </div>

          <div className='Popular-div'>

              <div>

                  <h1 className='popular-text'>Popular Games</h1>

              </div>
              <div className='game-div'>

                  <div className="mini-game-div">

                      <img src={blood}/>

                      <div>

                          <a href="#">Bloodborne</a>
                          <h2>$50.00</h2>

                      </div>

                  </div>

                  <div className="mini-game-div">

                      <img src={dark}/>

                      <div>

                          <a href="#">Dark Souls 2</a>
                          <div className='souls-div'>

                              <h2>$39.99</h2>
                              <p>$49.99</p>

                          </div>

                      </div>

                  </div>

                  <div className="mini-game-div">

                      <img src={king}/>

                      <div>

                          <a href="#">Kingdoms of Amal...</a>
                          <h2>$20.00</h2>

                      </div>

                  </div>

                  <div className="mini-game-div">

                      <img src={diablo}/>
                      
                      <div>

                          <a href="#">Diablo 3</a>
                          <h2>$10.00</h2>

                      </div>

                  </div>

              </div>
              <div className='Instagram'>

                  <h1>Instagram</h1>
                  <h2>Failed to load data</h2>

              </div>

          </div>

        </div>

    </section>
    
    <Columns/>

   </div>
  
  )
  
}

export default Store;
