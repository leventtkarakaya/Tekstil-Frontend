import React, { useEffect, useState, useRef, act } from "react";
import NavMobile from "../Components/NavMobile";
import Logo from "/Logo.png";
import En from "/En.png";
import Tr from "/Tr.png";
import style from "./Css/Navbar.module.css";

export default function Navbar() {
  const [active, setActive] = useState(true);
  const [activeMenu, setActiveMenu] = useState(true);
  const handleActiveMenu = () => {
    setActiveMenu((prev) => !prev);
  };
  const handleActive = () => {
    setActive((prev) => !prev);
  };
  const dropdownUseRef = useRef(null);
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
                <a href="#">Anasayfa</a>
              </li>
              <li>
                <a href="#">Teklif Al</a>
              </li>
              <li className={style.dropdownLi}>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option hidden>Kurumsal</option>
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
                  <option hidden>Üretim</option>
                  <option value="1">Galeri</option>
                  <option value="2">Üretim Tesisi</option>
                  <option value="3">Kalite</option>
                </select>
              </li>
              <li>
                <a href="#">Koleksiyon</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Mağazalarımız</a>
              </li>
              <li>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option hidden>Sürdürebilirlik</option>
                  <option value="1">ISG</option>
                  <option value="2">Tedarik Yönetimi</option>
                </select>
              </li>
              <li>
                <a href="#">İletişim</a>
              </li>
              <li>
                <div className={style.translate} onClick={() => handleActive()}>
                  {active ? (
                    <img src={Tr} alt="" width={25} height={20} />
                  ) : (
                    <img src={En} alt="" width={25} height={20} />
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
