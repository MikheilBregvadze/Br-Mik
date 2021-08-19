import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';

import boy1 from "../../assets/images/boy1.png";
import girl1 from "../../assets/images/girl1.png";

import 'swiper/swiper-bundle.css';
import './slider.css';
SwiperCore.use([Navigation, Pagination]);


const Banner = () => {
    return (
        <Swiper
            navigation={true}
            slidesPerView={1}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src={boy1} alt="boy1"/></SwiperSlide>
            <SwiperSlide><img src={girl1} alt="girl1"/></SwiperSlide>
        </Swiper>
    )
}
export default Banner
