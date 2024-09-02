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
  const handleLanguage = (event) => {
    i18n.changeLanguage(event);
    setActive((prev) => !prev);
  };
  const currentLanguage = localStorage.getItem("i18nextLng");
  console.log("🚀 ~ Navbar ~ currentLanguage:", currentLanguage);

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
                <ul
                  className="dropdown-menu"
                  style={{
                    margin: "0",
                    padding: "0",
                    border: "none",
                    backgroundColor: "white",
                  }}
                >
                  <li>
                    <a
                      className={`dropdown-item ${style.dropdownItemElement}`}
                      href="/hakkımızda"
                    >
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${style.dropdownItemElement}`}
                      href="/musterilerimiz"
                    >
                      Müşterilerimiz
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${style.dropdownItemElement}`}
                      href="/insankaynaklari"
                    >
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
                <ul
                  className="dropdown-menu"
                  style={{
                    margin: "0",
                    padding: "0",
                    border: "none",
                    backgroundColor: "white",
                  }}
                >
                  <li>
                    <a
                      className={`dropdown-item ${style.dropdownItemElement}`}
                      href="/galeri"
                    >
                      Galeri
                    </a>
                  </li>
                  <li>
                    <a
                      href="/uretimtesisi"
                      className={`dropdown-item ${style.dropdownItemElement}`}
                    >
                      Üretim Tesisi
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kalite"
                      className={`dropdown-item ${style.dropdownItemElement}`}
                    >
                      Kalite
                    </a>
                  </li>
                </ul>
              </div>
              <li>
                <a href="/koleksiyon">
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
                <ul
                  className={`dropdown-menu ${style.dropdownMenuContent}`}
                  style={{
                    margin: "0",
                    padding: "0",
                    border: "none",
                    backgroundColor: "white",
                  }}
                >
                  <li>
                    <a
                      className={`dropdown-item ${style.dropdownItemElement}`}
                      href="/hakkımızda"
                    >
                      ISG
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${style.dropdownItemElement}`}
                      href="/musterilerimiz"
                    >
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
                <div
                  className={style.translate}
                  style={{
                    cursor: "pointer",
                  }}
                >
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
