import React, { useState } from "react";
import style from "./Css/Collection.module.css";
import CollectionAll from "../Components/CollectionAll";
import CollectionJeans from "../Components/CollectionJeans";
import CollectionCeket from "../Components/CollectionJacket";
import CollectionTshirt from "../Components/CollectionTshirt";
import CollectionShort from "../Components/CollectionShort";
import { useTranslation } from "react-i18next";
export default function Collection() {
  const [active, setActive] = useState(0);
  const currentLanguage = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();
  const [allSection, setAllSection] = useState([
    {
      id: 0,
      title: currentLanguage === ("tr" || "tr-TR") ? "Hepsi" : "All",
      value: <CollectionAll />,
    },
    {
      id: 1,
      title: currentLanguage === ("tr" || "tr-TR") ? "Jeans" : "Jeans",
      value: <CollectionJeans />,
    },
    {
      id: 2,
      title: currentLanguage === ("tr" || "tr-TR") ? "Ceket" : "Jacket",
      value: <CollectionCeket />,
    },
    {
      id: 3,
      title: currentLanguage === ("tr" || "tr-TR") ? "T-Shirt" : "T-Shirt",
      value: <CollectionTshirt />,
    },
    {
      id: 4,
      title: currentLanguage === ("tr" || "tr-TR") ? "Şort" : "Shorts",
      value: <CollectionShort />,
    },
  ]);
  if (currentLanguage === "tr") {
    allSection[0].title = "Hepsi";
    allSection[1].title = "Jeans";
    allSection[2].title = "Ceket";
    allSection[3].title = "T-Shirt";
    allSection[4].title = "Şort";
  } else if (currentLanguage === "en") {
    allSection[0].title = "All";
    allSection[1].title = "Jeans";
    allSection[2].title = "Jacket";
    allSection[3].title = "T-Shirt";
    allSection[4].title = "Shorts";
  }
  const handleContent = (id) => {
    setActive(id);
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "50px", color: "#f26b30" }}>
        ÜRETİMLERİMİZ
      </h1>
      <ul className={style.CollectionLine}>
        <span></span>
        <li></li>
        <li></li>
        <li></li>
        <span></span>
      </ul>
      <div className={style.Collection}>
        <div className={style.CollectionContent}>
          <div className={style.CollectionWrapper}>
            {/* Content */}
            <div className={style.CollectionContentNav}>
              <div className={style.CollectionContentNavWrapper}>
                <h1 style={{ textAlign: "center", color: "#f26b30" }}>
                  KATEGORİLER
                </h1>
                <nav
                  style={{
                    backgroundColor: "#f4f4f4",
                    color: "#2d2d2d",
                    fontWeight: "initial",
                    borderRadius: "10px",
                    padding: "10px ",
                    textAlign: "center",
                  }}
                >
                  <ul
                    style={{
                      listStyle: "none",
                      cursor: "pointer",
                      padding: "0px",
                    }}
                  >
                    {allSection.map((section) => {
                      return (
                        <li
                          key={section.id}
                          onClick={() => handleContent(section.id)}
                        >
                          {section.title}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
            {/* Content */}
            <div className={style.CollectionContentWrapper}>
              <div className={style.CollectionContentFlex}>
                {allSection.map((section) => {
                  return active === section.id ? allSection[active].value : "";
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
