import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import style from "../Components/Css/Content.module.css";
import Resim1 from "/Resim1.jpg"; // Make sure image paths are correct
import Resim2 from "/Resim2.jpg"; // Make sure image paths are correct
import Resim3 from "/Resim3.jpg"; // Make sure image paths are correct
import Resim4 from "/Resim4.jpg"; // Make sure image paths are correct
import { BsCircleFill } from "react-icons/bs";

export default function Content() {
  const swiperRef = useRef(null);
  const [picture, setPicture] = useState([
    {
      id: 1,
      pictures: Resim1,
      title: "Aker Tekstil",
      description: "Hoş Geldiniz",
      buttonText: "İletişim",
    },
    {
      id: 2,
      pictures: Resim2,
      title: "Aker Tekstil",
      description: "Jean Pantalon Satışda",
      buttonText: "İletişim",
    },
    {
      id: 3,
      pictures: Resim3,
      title: "Aker Tekstil",
      description: "Jean Üretimde",
      buttonText: "İletişim",
    },
    {
      id: 4,
      pictures: Resim4,
      title: "Aker Tekstil",
      description: "Üretimde Kalitenin Yansıması",
      buttonText: "İletişim",
    },
  ]);
  const handlePaginationClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className={style.container}>
        <Swiper
          effect="fade"
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          autoplay={{
            delay: 3000,
          }}
          ref={swiperRef}
          className={`${style.swiper} mySwiper`}
        >
          {picture.map((i, index) => {
            return (
              <SwiperSlide key={i.id}>
                <div className={style.imageContainer}>
                  <img
                    src={i.pictures}
                    alt={i.title}
                    width={"100%"}
                    height={"100%"}
                  />
                  <div className={style.overlay}>
                    <h2 className={style.title}>{i.title}</h2>
                    <p className={style.description}>{i.description}</p>
                    <button className={style.button}>{i.buttonText}</button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className={style.customPagination}>
            {picture.map((_, index) => (
              <BsCircleFill
                key={index}
                className={swiperRef.current ? `${style.dot}` : ""}
                onClick={() => handlePaginationClick(index)}
              />
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}
