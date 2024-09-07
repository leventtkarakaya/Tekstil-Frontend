import React from "react";
import style from "./Css/ProductionGuide.module.css";
import BG from "/ProductionGuideBG.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import Resim1 from "/Fabrika1.jpg";
import Resim2 from "/Fabrika2.jpg";
import Resim4 from "/Fabrika4.jpg";
import Resim5 from "/Fabrika5.jpg";

export default function ProductionGuide() {
  return (
    <>
      <div className={style.ProductionGuideContent}>
        <img src={BG} alt="" width={"100%"} height={"100%"} />
        <div className={style.ProductionGuideContentWrapper}>
          <Swiper
            pagination={{
              clickable: true,
              type: "progress",
            }}
            effect={"fade"}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, EffectFade, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            className={style.ProductionGuideContentSwiper}
          >
            <SwiperSlide className={style.swiperSlide}>
              <img src={Resim1} alt="" className={style.swiperSlideImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Resim2} alt="" className={style.swiperSlideImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Resim4} alt="" className={style.swiperSlideImg} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Resim5} alt="" className={style.swiperSlideImg} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
