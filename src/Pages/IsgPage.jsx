import React from "react";
import Picture from "/IsgPicture.jpg";
import Style from "./Css/IsgPage.module.css";
import { useTranslation } from "react-i18next";
export default function IsgPage() {
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  return (
    <>
      <img src="/ISG.jpg" alt="ISG" style={{ width: "100%", height: "100%" }} />
      <div className={Style.content}>
        <div className={Style.contentWrapper}>
          <img src={Picture} alt="Picture" className={Style.contentPicture} />
          <div className={Style.contentText}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Roboto" + ", sans-serif",
                color: "#f26b30",
              }}
            >
              {currentLanguage === "tr"
                ? `${t("IsgTr.title")}`
                : `${t("IsgEn.title")}`}
            </h3>
            <h4
              style={{
                color: "#f26b30",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "Roboto" + ", sans-serif",
              }}
            >
              {currentLanguage === "tr"
                ? `${t("IsgTr.Header1")}`
                : `${t("IsgEn.Header1")}`}
            </h4>
            <p
              style={{
                fontFamily: "Roboto" + ", sans-serif",
                lineHeight: "25px",
                fontSize: "15px",
                color: "#797979",
                textAlign: "justify",
                fontWeight: "initial",
              }}
            >
              {currentLanguage === "tr" ? `${t("IsgTr.p")}` : `${t("IsgEn.p")}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
