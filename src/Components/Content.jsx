import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// Import React-i18next
import { useTranslation } from "react-i18next";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// Import CSS
import style from "../Components/Css/Content.module.css";
// Import images
import Resim1 from "/Resim1.jpg";
import Resim2 from "/Resim2.jpg";
import Resim3 from "/Resim3.jpg";
import Resim4 from "/Resim4.jpg";
// Import react-icons
import { BsCircleFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
export default function Content() {
  const swiperRef = useRef(null);
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  const [picture, setPicture] = useState([]);
  const handlePaginationClick = (index) => {
    swiperRef.current.swiper.slideTo(index);
  };

  useEffect(() => {
    if (currentLanguage === "tr") {
      setPicture([
        {
          id: 1,
          pictures: Resim1,
          title: "Aker Tekstil",
          description: "Hoş geldiniz",
          buttonText: "İletişim",
        },
        {
          id: 2,
          pictures: Resim2,
          title: "Aker Tekstil",
          description: "Jean Pantolon Satışda",
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
          description: "Üretimde Kalite Yansıması",
          buttonText: "İletişim",
        },
      ]);
    } else {
      setPicture([
        {
          id: 1,
          pictures: Resim1,
          title: "Aker Textile",
          description: "Welcome Home",
          buttonText: "Contact",
        },
        {
          id: 2,
          pictures: Resim2,
          title: "Aker Textile",
          description: "Jeans on sale",
          buttonText: "Contact",
        },
        {
          id: 3,
          pictures: Resim3,
          title: "Aker Textile",
          description: "Jeans on production",
          buttonText: "Contact",
        },
        {
          id: 4,
          pictures: Resim4,
          title: "Aker Textile",
          description: "Quality reflection in production",
          buttonText: "Contact",
        },
      ]);
    }
  }, [currentLanguage]);
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
                  <div className={style.icons}>
                    <i>
                      <FaFacebookF className={style.facebook} />
                    </i>
                    <i>
                      <FaInstagram className={style.instagram} />
                    </i>
                    <i>
                      <FaLinkedinIn className={style.linkedin} />
                    </i>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          <div className={style.customPagination}>
            {picture.map((_, index) => (
              <BsCircleFill
                key={index}
                className={style.dot}
                onClick={() => handlePaginationClick(index)}
              />
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
}
