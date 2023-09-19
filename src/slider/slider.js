import "./slider.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

function Slider() {

    return(

        <section className="Main">

            <Swiper className="sds"
            // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide className="ddd">Slide 1</SwiperSlide>
                <SwiperSlide className="ddd">Slide 2</SwiperSlide>
                <SwiperSlide className="ddd">Slide 3</SwiperSlide>
                <SwiperSlide className="ddd">Slide 4</SwiperSlide>
            ...
            </Swiper>

        </section>

    )

}

export default Slider