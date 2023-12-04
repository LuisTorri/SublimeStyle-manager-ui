// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";
import sliderimg1 from "./Slider_Images/sliderImg1.png";

// import required modules
import { Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sliderimg1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1}></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1}></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
