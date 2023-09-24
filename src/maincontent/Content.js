import React from "react";
import "./Content.scss"
import diablo from "./content-img/diablo-3-reaper-of-souls-4k-v9.jpg";

function Content() {

    React.useEffect(()=> {

        window.addEventListener("scroll", function() {
            const distance = window.scrollY;
            document.querySelector(".header").style.transform = `translateY(${distance *
              .6}px)`;
            document.querySelector(
              ".sss"
            ).style.transform = `translateY(${distance * 0.3}px)`;
          });
    }) 
   
    return(  

        <section className="header">
            
            <div className="img-div">

                <div className="txt-div">

                    <h1>DIABLO III:
                        <p>REAPER OF SOULS</p></h1>

                    <h4>"One of the best grind games"</h4>

                    <button>Purchase</button>

                </div>

                <img className="image" src={diablo} alt="asdf"/>

            </div>

            <div className="sss"></div>

        </section>

    )

}

export default Content