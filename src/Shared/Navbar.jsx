import React, { useState } from "react";
import NavMobile from "../Components/NavMobile";
import Logo from "/Logo.png";
import En from "/En.png";
import Tr from "/Tr.png";
import style from "./Css/Navbar.module.css";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const [active, setActive] = useState(true);
  const [activeMenu, setActiveMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const handleActiveMenu = () => {
    setActiveMenu((prev) => !prev);
  };
  const handleActive = () => {
    setActive((prev) => !prev);
  };
  const handleLanguage = (event) => {
    i18n.changeLanguage(event);
    setActive((prev) => !prev);
  };
  const currentLanguage = localStorage.getItem("i18nextLng");
  console.log("🚀 ~ Navbar ~ currentLanguage:", currentLanguage);
  console.log(t("HeaderTr.1"));

  return (
    <header>
      <div className={style.navbar}>
        <div className={style.logo}>
          <img src={Logo} alt="Aker Tekstil" />
        </div>
        <div className={style.menu}>
          <nav>
            <ul>
              <li>
                <a href="#">
                  {currentLanguage === "tr"
                    ? `${t("HeaderTr.Anasayfa")}`
                    : `${t("HeaderEn.Home")}`}
                </a>
              </li>
              <li>
                <a href="#">
                  {currentLanguage === "tr"
                    ? `${t("HeaderTr.TeklifAl")}`
                    : `${t("HeaderEn.Offer")}`}
                </a>
              </li>
              <li className={style.dropdownLi}>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option hidden>
                    {currentLanguage === "tr"
                      ? `${t("HeaderTr.Kurumsal")}`
                      : `${t("HeaderEn.Corporate")}`}
                  </option>
                  <option value="1" id={style.active1}>
                    Hakkımızda
                  </option>
                  <option value="2" id={style.active2}>
                    Müşterilerimiz
                  </option>
                  <option value="3" id={style.active3}>
                    İnsan Kaynakları
                  </option>
                </select>
              </li>
              <li>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option hidden>
                    {currentLanguage === "tr"
                      ? `${t("HeaderTr.Üretim")}`
                      : `${t("HeaderEn.Production")}`}
                  </option>
                  <option value="1">Galeri</option>
                  <option value="2">Üretim Tesisi</option>
                  <option value="3">Kalite</option>
                </select>
              </li>
              <li>
                <a href="#">
                  {currentLanguage === "tr"
                    ? `${t("HeaderTr.Koleksiyon")}`
                    : `${t("HeaderEn.Collection")}`}
                </a>
              </li>
              <li>
                <a href="#">
                  {currentLanguage === "tr"
                    ? `${t("HeaderTr.Bloglar")}`
                    : `${t("HeaderEn.Blog")}`}
                </a>
              </li>
              <li>
                <a href="#">
                  {currentLanguage === "tr"
                    ? `${t("HeaderTr.Mağzalarımız")}`
                    : `${t("HeaderEn.OurStores")}`}
                </a>
              </li>
              <li>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option hidden>
                    {currentLanguage === "tr"
                      ? `${t("HeaderTr.Sürdürebilirlik")}`
                      : `${t("HeaderEn.SustainableDevelopment")}`}
                  </option>
                  <option value="1">ISG</option>
                  <option value="2">Tedarik Yönetimi</option>
                </select>
              </li>
              <li>
                <a href="#">
                  {currentLanguage === "tr"
                    ? `${t("HeaderTr.İletişim")}`
                    : `${t("HeaderEn.Contact")}`}
                </a>
              </li>
              <li>
                <div className={style.translate}>
                  {active ? (
                    <img
                      src={Tr}
                      alt=""
                      width={25}
                      height={20}
                      defaultValue={"en"}
                      onClick={() => handleLanguage("tr")}
                    />
                  ) : (
                    <img
                      src={En}
                      alt=""
                      width={25}
                      height={20}
                      defaultValue={"tr"}
                      onClick={() => handleLanguage("en")}
                    />
                  )}
                </div>
              </li>
            </ul>
            <div className={style.containerNav}>
              <NavMobile
                active={activeMenu}
                handleActiveMenu={handleActiveMenu}
                containerStyle={style.containerNav}
              />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
