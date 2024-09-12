import React from "react";
import style from "./Css/HumanrResources.module.css";
import bg from "/FormBG.svg";
import form from "/form.jpg";
import { useTranslation } from "react-i18next";
export default function HumanrResources() {
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  return (
    <>
      <div className={style.HumanrResources}>
        <div className={style.HumanrResourcesContent}>
          <img
            src={bg}
            alt="HumanrResources"
            className={style.HumanrResourcesBG}
          />
          <div className={style.HumanrResourcesContentWrapper}>
            <div className={style.HumanrResourcesContentFlex}>
              {/* Content */}
              <div className={style.HumanrResourcesContentForm}>
                <h1 className={style.HumanrResourcesContentTitle}>
                  {currentLanguage === ("tr" || "tr-TR")
                    ? `${t("HumanResourcesTr.title")}`
                    : `${t("HumanResourcesEn.title")}`}
                </h1>
                <div className={style.HumanrResourcesContentInputName}>
                  <div>
                    <label htmlFor="name">
                      {currentLanguage === ("tr" || "tr-TR")
                        ? `${t("HumanResourcesTr.inputName")}`
                        : `${t("HumanResourcesEn.inputName")}`}
                    </label>
                    <input type="text" id="name" />
                  </div>
                  <div>
                    <label htmlFor="Surname">
                      {currentLanguage === ("tr" || "tr-TR")
                        ? `${t("HumanResourcesTr.inputSurname")}`
                        : `${t("HumanResourcesEn.inputSurname")}`}
                    </label>
                    <input type="text" id="Surname" />
                  </div>
                </div>
                <label htmlFor="email">
                  {currentLanguage === ("tr" || "tr-TR")
                    ? `${t("HumanResourcesTr.inputEmail")}`
                    : `${t("HumanResourcesEn.inputEmail")}`}
                </label>
                <input type="email" id="email" />
                <label htmlFor="phone">
                  {currentLanguage === ("tr" || "tr-TR")
                    ? `${t("HumanResourcesTr.inputNumber")}`
                    : `${t("HumanResourcesEn.inputNumber")}`}
                </label>
                <input type="text" id="phone" />
                <label htmlFor="message">
                  {currentLanguage === ("tr" || "tr-TR")
                    ? `${t("HumanResourcesTr.inputMessage")}`
                    : `${t("HumanResourcesEn.inputMessage")}`}
                </label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
              </div>
              {/* Content */}
              <div className={style.HumanrResourcesContentImg}>
                <img
                  src={form}
                  alt="Aker Tekstil"
                  className={style.HumanrResourcesBGForm}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
