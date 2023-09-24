import './second.scss';
import metro from "./second-img/metro.jpg"
import metropng from "./second-img/metro.png"
import blood from "./second-img/blood.jpg"
import dark from "./second-img/darksouls.jpg"
import king from "./second-img/kingdoms.jpg"
import React from 'react';
import {FaTags} from "react-icons/fa"

function Second() {

    React.useEffect(()=> {

        window.addEventListener("scroll", function() {
            const distance = window.scrollY;
            document.querySelector("section").style.transform = `translateY(${distance *
            .4}px)`;
            document.querySelector(
              ".container"
            ).style.transform = `translateY(${distance * 0.3}px)`;
          });
    })

  return (
  
    <main className='main'>

        <section className='first-section'>

            <div className='container'>

                <img src={metro}/>
                <img className='metroPng' src={metropng}/>
    
                <div className='container-div'>

                    <h1>Metro: <p>Exodus</p></h1>
                    <h2>00 days 00:00:00</h2>

                </div>

            </div>

        </section>  

        <section className='second-section'>

            <h1 className='late'>Latest News</h1>
            
            <div className='card-div'>

                <div>

                    <img src={blood}/>
                    <div className='rating'><h3>9.1</h3></div>

                </div>

                <div className='all-text'>

                    <h1><a href='#'>Bloodborne - First Try!</a></h1>
                    <div className='t-div'>    
                        <FaTags className='tags'/>
                        <h2><a href='#'>Bloodborne</a>,<a href='#'>first try</a>,<a href='#'>first boss problem</a>,<a href='#'>newbie game</a></h2>
                    </div>
                    <h2>Gus sit amet suum motum. Nescio quando, 
                            aut quomodo, nescio quo. Illud scio, amet tortor. 
                            Suarum impotens prohibere eum.
                            <p>Sum expectantes. Ego hodie expectantes. Expectantes, 
                                et misit unum de pueris Gus interficere. Et suus vos. 
                                Nescio quis, qui est bonus usus liberi ad Isai? Qui 
                                nosti ... Quis dimisit filios ad necem ... hmm? Gus!</p>

                    </h2>

                    <button>Read More</button>

                </div>

            </div>

            <div className='card-div'>

                <div> 

                    <img src={dark}/>
                    <div className='rating'><h3>7.9</h3></div>

                </div>

                <div className='all-text'>

                    <h1 className='blood-1'><a href='#'>Coming to Youplay - Dark Souls II</a></h1>
                    <div className='t-div'>    
                        <FaTags className='tags'/> 
                        <h2><a href='#'>Dark Souls II</a>,<a href='#'>coming soon</a>,<a href='#'>first review</a>,<a href='#'> sale date</a></h2>
                    </div>
                    <h2>Gus sit amet suum motum. Nescio quando, 
                            aut quomodo, nescio quo. Illud scio, amet tortor. 
                            Suarum impotens prohibere eum.
                            <p>Sum expectantes. Ego hodie expectantes. Expectantes, 
                                et misit unum de pueris Gus interficere. Et suus vos. 
                                Nescio quis, qui est bonus usus liberi ad Isai? Qui 
                                nosti ... Quis dimisit filios ad necem ... hmm? Gus!</p>

                    </h2>

                    <button>Read More</button>

                </div>

            </div>

            <div className='card-div ss'>

                <div>

                    <img src={king}/>
                    <div className='rating'><h3>3.8</h3></div>

                </div>

                <div className='all-text'>

                    <h1 className='blood'><a href='#'>Bloodborne - First Try!</a></h1>
                    <div className='t-div'>    
                        <FaTags className='tags'/>
                        <h2><a href='#'>Bloodborne</a>,<a href='#'>first try</a>,<a href='#'>first boss problem</a>,<a href='#'>newbie game</a></h2>
                    </div>
                    <h2>Gus sit amet suum motum. Nescio quando, 
                            aut quomodo, nescio quo. Illud scio, amet tortor. 
                            Suarum impotens prohibere eum.
                            <p>Sum expectantes. Ego hodie expectantes. Expectantes, 
                                et misit unum de pueris Gus interficere. Et suus vos. 
                                Nescio quis, qui est bonus usus liberi ad Isai? Qui 
                                nosti ... Quis dimisit filios ad necem ... hmm? Gus!</p>

                    </h2>

                    <button>Read More</button>

                </div>

            </div>

        </section>    

    </main>
  
  )
   
}

export default Second;