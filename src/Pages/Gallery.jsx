import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import style from "./Css/GalleryPage.module.css";
import "swiper/css";
import "swiper/css/pagination";

export default function Gallery() {
  return (
    <>
      <img
        src="/gallerybg.jpg"
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
            <img
              src="/Gallery1.jpg"
              alt="Aker Tekstil"
              width={350}
              height={350}
            />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img
              src="/Gallery2.jpg"
              alt="Aker Tekstil"
              width={350}
              height={350}
            />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img
              src="/Gallery3.jpg"
              alt="Aker Tekstil"
              width={350}
              height={350}
            />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img
              src="/Gallery4.jpg"
              alt="Aker Tekstil"
              width={350}
              height={350}
            />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img
              src="/Gallery5.jpg"
              alt="Aker Tekstil"
              width={350}
              height={350}
            />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img
              src="/Gallery6.jpg"
              alt="Aker Tekstil"
              width={350}
              height={350}
            />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img
              src="/Gallery7.jpg"
              alt="Aker Tekstil"
              width={350}
              height={350}
            />
          </SwiperSlide>
          <SwiperSlide className={style.SwiperSlide}>
            <img
              src="/Gallery8.jpg"
              alt="Aker Tekstil"
              width={350}
              height={350}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
