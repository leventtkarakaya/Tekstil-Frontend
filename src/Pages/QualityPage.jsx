import React, { useState } from "react";
import BG from "/QualityBG.jpg";
import style from "./Css/Quality.module.css";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
export default function QualityPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClikcArrow = (direction) => {
    setActiveIndex(direction === 0 ? 0 : 1);
  };
  const { t } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  return (
    <>
      <div className={style.QualityPage}>
        <div className={style.QualityPageWrapper}>
          {/* Content */}
          <div>
            <img src={BG} alt="" />
          </div>
          {/* Content */}
          <div className={style.QualityPageContentText}>
            <div className={style.QualityPageContentTextList1}>
              <h3>
                {currentLanguage === "tr"
                  ? `${t("QualityTr.title")}`
                  : `${t("QualityEn.title")}`}
              </h3>
              <p>
                {currentLanguage === "tr"
                  ? `${t("QualityTr.text")}`
                  : `${t("QualityEn.text")}`}
              </p>
            </div>
            <div className={style.QualityPageContentTextList2}>
              {activeIndex === 0 ? (
                <p>
                  {currentLanguage === "tr"
                    ? `${t("QualityTr.text2")}`
                    : `${t("QualityEn.text2")}`}
                </p>
              ) : (
                <p>
                  {currentLanguage === "tr"
                    ? `${t("QualityTr.text3")}`
                    : `${t("QualityEn.text3")}`}
                </p>
              )}
            </div>
            <div>
              <button
                onClick={() => handleClikcArrow(0)}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                <FaCircleArrowLeft
                  style={{ fontSize: "30px", color: "#f26b30" }}
                />
              </button>
              <button
                onClick={() => handleClikcArrow(1)}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                <FaCircleArrowRight
                  style={{ fontSize: "30px", color: "#f26b30" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
