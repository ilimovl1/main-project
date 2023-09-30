import React from 'react';
import './about.scss';
import Header from '../Header/Header';
import Columns from '../columns/column';
import fortnite from "./about-img/fortnite.jpg"

function About() {

    React.useEffect(()=> {

        window.addEventListener("scroll", function() {
            const distance = window.scrollY;
            document.querySelector(".image-div").style.transform = `translateY(${distance *
              .6}px)`;
            document.querySelector(
              ".card-div"
            ).style.transform = `translateY(${distance * 0.3}px)`;
          });
    }) 

  return (
  
    <section className='section'>

        <Header/>
        <Columns/>

        <div className='image-div'>
        
            <img src={fortnite} alt='error' className='image'/>
            
            <h1>About</h1>
    
        </div>

        <div className='card-div'>

            <div className='search-text'>

                <h1>Home</h1>

                <h1>Forums</h1>

                <h1>Games</h1>

            </div>

            <div className='cards'>

            </div>

        </div>

    </section>
  
  )

}

export default About;