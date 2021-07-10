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
import thumbnail1 from '../../images/farmtoplate-1.jpg';
import thumbnail2 from '../../images/farmtoplate-2.jpg';
// import thumbnail3 from '../../images/test3.jpg';
  
// install Swiper modules
SwiperCore.use([Pagination,Navigation,EffectFade]);

export default function CapstoneCarousel() {
    
  
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
        <SwiperSlide><img src={thumbnail1} alt="thumbnail 1" /></SwiperSlide>
        <SwiperSlide><img src={thumbnail2} alt="thumbnail 2" /></SwiperSlide>
        {/* <SwiperSlide><img src={thumbnail3} alt="thumbnail 3" /></SwiperSlide> */}
    </Swiper>
    </>
  )
}
