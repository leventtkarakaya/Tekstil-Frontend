import React from "react";
import bg from "/AboutPageBG.jpg";
import style from "./Css/AboutPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Resim1 from "/AboutPagePicture1.jpg";
import Resim2 from "/AboutPagePicture2.jpg";
import Resim3 from "/AboutPagePicture3.jpg";
import Resim4 from "/AboutPagePicture4.jpg";
import Resim5 from "/AboutPagePicture5.jpg";
import Resim6 from "/AboutPagePicture6.jpg";

export default function About() {
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
          <h1>AKER TEKSTİL</h1>
          <p>
            Mope Tekstil 1988 yılında üretime başlamış ve şu anda başta
            İngiltere, Hollanda ve Danimarka olmak üzere birçok Avrupa ülkesine
            ihracat yapmaktadır. Kısa sürede profesyonel ekibi ile müşterileri
            tarafından sektörde önemli bir yere getirilmiş; yeniliklere açık,
            öncü ve birçok firmaya hizmet veren bir firma olarak faaliyetlerini
            sürdürmektedir. İleri teknoloji kullanımı, Ar-Ge çalışmaları ve
            başarılı satış ve pazarlama stratejileri ile hem Türkiye'de hem de
            dünyada büyük markalarla stratejik ortaklığını gerçekleştirdi.
          </p>
        </div>
        <Swiper
          slidesPerView={3}
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
