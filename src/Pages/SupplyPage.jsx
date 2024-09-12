import React from "react";
import BG from "/SupplyBG.jpg";
import Picture from "/Supply.jpg";
import style from "./Css/SupplyPage.module.css";
import { useTranslation } from "react-i18next";
export default function SupplyPage() {
  const currentLanguage = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();
  return (
    <>
      <img src={BG} alt="BG" style={{ width: "100%", height: "100%" }} />
      <div className={style.SupplyPage}>
        <div className={style.SupplyPageContent}>
          <img
            src={Picture}
            alt="Picture"
            className={style.SupplyPageContentPicture}
          />
          <div className={style.SupplyPageContentText}>
            <h2>
              {currentLanguage === "tr"
                ? `${t("SupplyTr.title")}`
                : `${t("SupplyEn.title")}`}
            </h2>
            <h3>
              {currentLanguage === "tr"
                ? `${t("SupplyTr.Header1")}`
                : `${t("SupplyEn.Header1")}`}
            </h3>
            <p>
              {currentLanguage === "tr"
                ? `${t("SupplyTr.p")}`
                : `${t("SupplyEn.p")}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
