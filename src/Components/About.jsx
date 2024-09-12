import React from "react";
import Resim1 from "/Resim1.jpg";
import style from "./Css/About.module.css";
import { useTranslation } from "react-i18next";
export default function About() {
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  return (
    <>
      <h1 className={style.AboutTitle}>
        {currentLanguage === ("tr" || "tr-TR")
          ? `${t("AboutUsTr.title")}`
          : `${t("AboutUsEn.title")}`}
      </h1>
      <ul className={style.AboutLine}>
        <span></span>
        <li></li>
        <li></li>
        <li></li>
        <span></span>
      </ul>
      <div className={style.AboutContent}>
        <div className={style.AboutContentWrapper}>
          <img
            src={Resim1}
            alt="Aker Tekstil"
            width={1100}
            height={600}
            className={style.AboutContentImg}
          />
          <div className={style.AboutContentText}>
            <p>
              {currentLanguage === ("tr" || "tr-TR")
                ? `${t("AboutUsTr.text")}`
                : `${t("AboutUsEn.text")}`}
            </p>
            <button>
              {currentLanguage === ("tr" || "tr-TR")
                ? `${t("AboutUsTr.button")}`
                : `${t("AboutUsEn.button")}`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
