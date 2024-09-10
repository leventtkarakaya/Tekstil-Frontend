import React from "react";
import style from "./Css/Footer.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  return (
    <>
      <footer>
        <div className={style.FooterBg}>
          <div className={style.FooterContent}>
            <div className={style.FooterContentWrapper}>
              {/* Content */}
              <div className={style.FooterContentWrapperGrid1}>
                <img
                  src="/Logo.png"
                  alt="Aker Tekstil"
                  style={{
                    width: "160px",
                    height: "160px",
                    objectFit: "contain",
                    objectPosition: "center",
                    backgroundColor: "white",
                  }}
                />
                <span></span>
                <div className={style.FooterContentWrapperGrid1Icon}>
                  <FaFacebook
                    onClick={() => window.open("https://www.facebook.com")}
                    className={style.facebook}
                  />{" "}
                  <FaInstagram
                    onClick={() => window.open("https://www.instagram.com")}
                    className={style.instagram}
                  />{" "}
                  <FaTelegram
                    onClick={() => window.open("https://telegram.com")}
                    className={style.telegram}
                  />{" "}
                  <FaWhatsapp
                    onClick={() => window.open("https://whatsapp.com")}
                    className={style.whatsapp}
                  />
                </div>
                <p style={{ color: "white" }}>
                  {currentLanguage === "tr"
                    ? `${t("FooterTr.Copyright")}`
                    : `${t("FooterEn.Copyright")}`}
                </p>
              </div>
              {/* Content */}
              <div className={style.FooterContentWrapperGrid2}>
                <h3>
                  {currentLanguage === "tr"
                    ? `${t("FooterTr.title")}`
                    : `${t("FooterEn.title")}`}
                </h3>
                <ul>
                  <li>
                    <a href="/">
                      <p>
                        {currentLanguage === "tr"
                          ? `${t("FooterTr.text1")}`
                          : `${t("FooterEn.text1")}`}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a id="QuoteForm">
                      <p>
                        {currentLanguage === "tr"
                          ? `${t("FooterTr.text2")}`
                          : `${t("FooterEn.text2")}`}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <p>
                        {currentLanguage === "tr"
                          ? `${t("FooterTr.text3")}`
                          : `${t("FooterEn.text3")}`}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>
                        {currentLanguage === "tr"
                          ? `${t("FooterTr.text4")}`
                          : `${t("FooterEn.text4")}`}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>
                        {currentLanguage === "tr"
                          ? `${t("FooterTr.text5")}`
                          : `${t("FooterEn.text5")}`}
                      </p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>
                        {currentLanguage === "tr"
                          ? `${t("FooterTr.text6")}`
                          : `${t("FooterEn.text6")}`}
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Content */}
              <div className={style.FooterContentWrapperGrid3}>
                <h3>
                  {currentLanguage === "tr"
                    ? `${t("FooterTr.title2")}`
                    : `${t("FooterEn.title2")}`}
                </h3>
                <p>
                  {currentLanguage === "tr"
                    ? `${t("FooterTr.p")}`
                    : `${t("FooterEn.p")}`}
                </p>
              </div>
              {/* Content */}
              <div className={style.FooterContentWrapperGrid4}>
                <img src="/FooterImage1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
