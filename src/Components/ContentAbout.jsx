import React from "react";
import style from "./Css/ContentAbout.module.css";
import { useTranslation } from "react-i18next";
export default function ContentAbout() {
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  return (
    <>
      <div className={style.ContentAbout}>
        <div className={style.ContentAboutContent}>
          {/* Content */}
          <div className={style.ContentAboutContentGrid1}>
            <h3>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.title")}`
                : `${t("ContentAboutEn.title")}`}
            </h3>
            <p>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.paragraph")}`
                : `${t("ContentAboutEn.paragraph")}`}
            </p>
            <h3>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.title2")}`
                : `${t("ContentAboutEn.title2")}`}
            </h3>
            <p>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.paragraph2")}`
                : `${t("ContentAboutEn.paragraph2")}`}
            </p>
          </div>
          {/* Content */}
          <div className={style.ContentAboutContentGrid2}>
            <h3>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.title3")}`
                : `${t("ContentAboutEn.title3")}`}
            </h3>
            <p>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.paragraph3")}`
                : `${t("ContentAboutEn.paragraph3")}`}
            </p>
            <p>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.paragraph3_1")}`
                : `${t("ContentAboutEn.paragraph3_1")}`}
            </p>
            <p>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.paragraph3_2")}`
                : `${t("ContentAboutEn.paragraph3_2")}`}
            </p>
            <p>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.paragraph3_3")}`
                : `${t("ContentAboutEn.paragraph3_3")}`}
            </p>
            <p>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.paragraph3_4")}`
                : `${t("ContentAboutEn.paragraph3_4")}`}
            </p>
            <p>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.paragraph3_5")}`
                : `${t("ContentAboutEn.paragraph3_5")}`}
            </p>
          </div>
          {/* Content */}
          <div className={style.ContentAboutContentGrid3}>
            <h3>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.title4")}`
                : `${t("ContentAboutEn.title4")}`}
            </h3>
            <p>
              {currentLanguage === "tr"
                ? `${t("ContentAboutTr.paragraph4")}`
                : `${t("ContentAboutEn.paragraph4")}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
