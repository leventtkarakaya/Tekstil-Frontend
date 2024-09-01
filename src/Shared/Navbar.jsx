import React, { useState } from "react";
import NavMobile from "../Components/NavMobile";
import Logo from "/Logo.png";
import En from "/En.png";
import Tr from "/Tr.png";
import style from "./Css/Navbar.module.css";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const [active, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const handleActiveMenu = () => {
    setActiveMenu((prev) => !prev);
  };
  const handleLink = (e) => {
    console.log(e);
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
          <a href="/">
            <img src={Logo} alt="Aker Tekstil" />
          </a>
        </div>
        <div className={style.menu}>
          <nav>
            <ul>
              <li>
                <a href="/">
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
              <div className={style.dropdownLi}>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentLanguage === "tr"
                    ? `${t("HeaderTr.Kurumsal")}`
                    : `${t("HeaderEn.Corporate")}`}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/hakkımızda">
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/musterilerimiz">
                      Müşterilerimiz
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/insankaynaklari">
                      İnsan Kaynakları
                    </a>
                  </li>
                </ul>
              </div>
              <div className={style.dropdownLi}>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentLanguage === "tr"
                    ? `${t("HeaderTr.Üretim")}`
                    : `${t("HeaderEn.Production")}`}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/hakkımızda">
                      Galeri
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/musterilerimiz">
                      Üretim Tesisi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Kalite
                    </a>
                  </li>
                </ul>
              </div>
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
              <div className={style.dropdownLi}>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentLanguage === "tr"
                    ? `${t("HeaderTr.Sürdürebilirlik")}`
                    : `${t("HeaderEn.SustainableDevelopment")}`}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/hakkımızda">
                      ISG
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/musterilerimiz">
                      Tedarik Yönetimi
                    </a>
                  </li>
                </ul>
              </div>
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
