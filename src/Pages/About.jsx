import React, { useEffect } from "react";
import bg from "/AboutPageBG.jpg";
import style from "./Css/AboutPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import Resim1 from "/AboutPagePicture1.jpg";
import Resim2 from "/AboutPagePicture2.jpg";
import Resim3 from "/AboutPagePicture3.jpg";
import Resim4 from "/AboutPagePicture4.jpg";
import Resim5 from "/AboutPagePicture5.jpg";
import Resim6 from "/AboutPagePicture6.jpg";

export default function About() {
  const isMobile = useMediaQuery({ query: "(max-width: 780px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1200px)" });
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  return (
    <>
      <img
        src={bg}
        alt="Aker Tekstil"
        className={style.AboutBG}
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
      <div className={style.AboutContent}>
        <div className={style.AboutContentWrapper}>
          <h1>
            {currentLanguage === "tr"
              ? `${t("AboutPageTr.title")}`
              : `${t("AboutPageEn.title")}`}
          </h1>
          <p>
            {currentLanguage === "tr"
              ? `${t("AboutPageTr.p")}`
              : `${t("AboutPageEn.p")}`}
          </p>
        </div>
        <Swiper
          slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
          spaceBetween={50}
          loop={true}
          modules={[Pagination, EffectFade, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className={`${style.swiper} mySwiper`}
        >
          <SwiperSlide>
            <img src={Resim1} alt="Aker Tekstil" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Resim2} alt="Aker Tekstil" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Resim3} alt="Aker Tekstil" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Resim4} alt="Aker Tekstil" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Resim5} alt="Aker Tekstil" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Resim6} alt="Aker Tekstil" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
