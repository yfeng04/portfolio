// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"

// import Swiper core and required modules
import SwiperCore, { Pagination,Navigation,EffectFade } from 'swiper/core';

//Import Swiper Images
import mdb1 from '../../images/movie-buzz-1.jpg';
import mdb2 from '../../images/movie-buzz-2.jpg';
import mdb3 from '../../images/movie-buzz-3.jpg';
  
// install Swiper modules
SwiperCore.use([Pagination,Navigation,EffectFade]);

export default function MdbCarousel() {
    
  
  return (
    <>
     <Swiper 
        slidesPerView={1} 
        spaceBetween={30} 
        loop={true} 
        pagination={{"clickable": true}} 
        navigation={true}
        effect={'fade'} 
        className="mySwiper">
        <SwiperSlide><img src={mdb2} alt="Movie Buzz Thumnail 1" /></SwiperSlide>
        <SwiperSlide><img src={mdb1} alt="Movie Buzz Thumnail 2" /></SwiperSlide>
        <SwiperSlide><img src={mdb3} alt="Movie Buzz Thumnail 3" /></SwiperSlide>
    </Swiper>
    </>
  )
}
