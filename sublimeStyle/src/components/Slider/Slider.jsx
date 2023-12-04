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
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sliderimg1} style={{ height: "400px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1} style={{ height: "400px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1} style={{ height: "400px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1} style={{ height: "400px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1} style={{ height: "400px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1} style={{ height: "400px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderimg1} style={{ height: "400px" }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
