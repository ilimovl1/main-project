import "./Content.scss"
import diablo from "./content-img/diablo-3-reaper-of-souls-4k-v9.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import Sofa from "../slider/slider";
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';

function Content() {

    return(

        <section className="Main">

            <div className="border-div-1"></div>
            <div className="border-div-2"></div>

            <div className="img-div">

                <div className="txt-div">

                    <h1>DIABLO III:
                        <p>REAPER OF SOULS</p></h1>

                    <h4>"One of the best grind games"</h4>

                    <button>Purchase</button>

                </div>

                <img src={diablo} alt="asdf"/>

            </div>

            <div className="sss"></div>

        </section>

    )

}

export default Content