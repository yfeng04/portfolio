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
import portfolio1 from '../../images/portfolio-1.jpg';
import portfolio2 from '../../images/portfolio-2.jpg';
  
// install Swiper modules
SwiperCore.use([Pagination,Navigation,EffectFade]);

export default function PortfolioCarousel() {
    
  
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
        <SwiperSlide><img src={portfolio1} alt="Portfolio Thumnail 1" /></SwiperSlide>
        <SwiperSlide><img src={portfolio2} alt="Portfolio Thumnail 2" /></SwiperSlide>
    </Swiper>
    </>
  )
}
