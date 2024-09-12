import React, { useState, useRef, useEffect } from "react";
import NavMobile from "../Components/NavMobile";
import { Link } from "react-scroll";
import Logo from "/Logo.png";
import En from "/En.png";
import Tr from "/Tr.png";
import style from "./Css/Navbar.module.css";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
export default function Navbar() {
  const [active, setActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const { t, i18n } = useTranslation();
  const currentLanguage = localStorage.getItem("i18nextLng");
  const quoteForm = useRef(null);
  const location = useLocation();

  const handleActiveMenu = () => {
    setActiveMenu((prev) => !prev);
  };
  const handleLanguage = (event) => {
    i18n.changeLanguage(event);
    setActive((prev) => !prev);
  };

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
                  {currentLanguage === ("tr" || "tr-TR")
                    ? `${t("HeaderTr.Anasayfa")}`
                    : `${t("HeaderEn.Anasayfa")}`}
                </a>
              </li>
              <li>
                <Link
                  ref={quoteForm}
                  onClick={() =>
                    location.pathname === "/"
                      ? quoteForm.current.props.to == "QuoteForm"
                      : (window.location.href = "/")
                  }
                  activeClass="active"
                  to="QuoteForm"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ cursor: "pointer" }}
                >
                  {currentLanguage === ("tr" || "tr-TR")
                    ? `${t("HeaderTr.TeklifAl")}`
                    : `${t("HeaderEn.TeklifAl")}`}
                </Link>
              </li>
              <div className={style.dropdownLi}>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentLanguage === ("tr" || "tr-TR")
                    ? `${t("HeaderTr.Kurumsal")}`
                    : `${t("HeaderEn.Kurumsal")}`}
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
                      {currentLanguage === ("tr" || "tr-TR")
                        ? `${t("HeaderTr.Hakkımızda")}`
                        : `${t("HeaderEn.Hakkımızda")}`}
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${style.dropdownItemElement}`}
                      href="/musterilerimiz"
                    >
                      {currentLanguage === ("tr" || "tr-TR")
                        ? `${t("HeaderTr.Müşterilerimiz")}`
                        : `${t("HeaderEn.Müşterilerimiz")}`}
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${style.dropdownItemElement}`}
                      href="/insankaynaklari"
                    >
                      {currentLanguage === ("tr" || "tr-TR")
                        ? `${t("HeaderTr.InsanKaynakları")}`
                        : `${t("HeaderEn.InsanKaynakları")}`}
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
                  {currentLanguage === ("tr" || "tr-TR")
                    ? `${t("HeaderTr.Üretim")}`
                    : `${t("HeaderEn.Üretim")}`}
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
                      {currentLanguage === ("tr" || "tr-TR")
                        ? `${t("HeaderTr.Galeri")}`
                        : `${t("HeaderEn.Galeri")}`}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/uretimtesisi"
                      className={`dropdown-item ${style.dropdownItemElement}`}
                    >
                      {currentLanguage === ("tr" || "tr-TR")
                        ? `${t("HeaderTr.ÜretimTesisi")}`
                        : `${t("HeaderEn.ÜretimTesisi")}`}
                    </a>
                  </li>
                  <li>
                    <a
                      href="/kalite"
                      className={`dropdown-item ${style.dropdownItemElement}`}
                    >
                      {currentLanguage === ("tr" || "tr-TR")
                        ? `${t("HeaderTr.Kalite")}`
                        : `${t("HeaderEn.Kalite")}`}
                    </a>
                  </li>
                </ul>
              </div>
              <li>
                <a href="/koleksiyon">
                  {currentLanguage === ("tr" || "tr-TR")
                    ? `${t("HeaderTr.Koleksiyon")}`
                    : `${t("HeaderEn.Koleksiyon")}`}
                </a>
              </li>
              <li>
                <a href="/magazalarimiz">
                  {currentLanguage === ("tr" || "tr-TR")
                    ? `${t("HeaderTr.Mağzalarımız")}`
                    : `${t("HeaderEn.Mağzalarımız")}`}
                </a>
              </li>
              <div className={style.dropdownLi}>
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {currentLanguage === ("tr" || "tr-TR")
                    ? `${t("HeaderTr.Sürdürebilirlik")}`
                    : `${t("HeaderEn.Sürdürebilirlik")}`}
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
                      href="/isg"
                    >
                      ISG
                    </a>
                  </li>
                  <li>
                    <a
                      className={`dropdown-item ${style.dropdownItemElement}`}
                      href="/tedarik"
                    >
                      {currentLanguage === ("tr" || "tr-TR")
                        ? `${t("HeaderTr.TedarikYönetimi")}`
                        : `${t("HeaderEn.TedarikYönetimi")}`}
                    </a>
                  </li>
                </ul>
              </div>
              <li>
                <a href="/iletisim">
                  {currentLanguage === ("tr" || "tr-TR")
                    ? `${t("HeaderTr.İletişim")}`
                    : `${t("HeaderEn.İletişim")}`}
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
                      alt="Tr"
                      width={25}
                      height={20}
                      defaultValue={"en"}
                      onClick={() => handleLanguage("tr")}
                    />
                  ) : (
                    <img
                      src={En}
                      alt="En"
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
