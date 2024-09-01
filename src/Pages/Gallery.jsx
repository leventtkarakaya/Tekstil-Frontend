import React from "react";
import GalleryBg from "/gallerybg.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import style from "./Css/GalleryPage.module.css";
import Gallery1 from "/Gallery1.jpg";
import Gallery2 from "/Gallery2.jpg";
import Gallery3 from "/Gallery3.jpg";
import Gallery4 from "/Gallery4.jpg";
import Gallery5 from "/Gallery5.jpg";
import Gallery6 from "/Gallery6.jpg";
import Gallery7 from "/Gallery7.jpg";
import Gallery8 from "/Gallery8.jpg";
export default function Gallery() {
  return (
    <>
      <img
        src={GalleryBg}
        alt="Aker Tekstil"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
          height: "100%",
        }}
      />
      <div className={style.GalleryWrapper}>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className={style.Swiper}
        >
          <SwiperSlide className={style.SwiperSlide}>
            <img src={Gallery1} alt="Aker Tekstil" width={350} height={350} />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img src={Gallery2} alt="Aker Tekstil" width={350} height={350} />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img src={Gallery3} alt="Aker Tekstil" width={350} height={350} />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img src={Gallery4} alt="Aker Tekstil" width={350} height={350} />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img src={Gallery5} alt="Aker Tekstil" width={350} height={350} />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img src={Gallery6} alt="Aker Tekstil" width={350} height={350} />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img src={Gallery7} alt="Aker Tekstil" width={350} height={350} />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img src={Gallery8} alt="Aker Tekstil" width={350} height={350} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
