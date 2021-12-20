// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"

// import Swiper core and required modules
import SwiperCore, { Pagination,Navigation,EffectFade } from 'swiper/core';

  
// install Swiper modules
SwiperCore.use([Pagination,Navigation,EffectFade]);

export default function Carousel({project}) {
    
  
  return (
     <Swiper 
        slidesPerView={1} 
        spaceBetween={30} 
        loop={true} 
        pagination={{"clickable": true}} 
        navigation={true}
        effect={'fade'}
        initialSlide={1} 
        className="mySwiper">
          {project && project.acf.media.map((item, id) => 
          <SwiperSlide key={id}><img src={item.image} alt="thumbnail" /></SwiperSlide>  )}
    </Swiper>
  )
}
