import React from "react";
import style from "./Css/Footer.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
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
                  alt=""
                  width={130}
                  height={100}
                  style={{ backgroundColor: "white" }}
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
                <p style={{ color: "white" }}>info@mopetekstil.com</p>
              </div>
              {/* Content */}
              <div className={style.FooterContentWrapperGrid2}>
                <h3>MENü</h3>
                <ul>
                  <li>
                    <a href="#">
                      <p>Anasayfa</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Hakkımızda</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Üretim</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Galeri</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Mağazalarımız</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <p>Iletisim</p>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Content */}
              <div className={style.FooterContentWrapperGrid3}>
                <h3>HAKKIMIZDA</h3>
                <p>
                  <span>Aker</span> Tekstil 1988 yılında üretime başlamış ve şu
                  anda başta İngiltere, Hollanda ve Danimarka olmak üzere birçok
                  Avrupa ülkesine ihracat yapmaktadır.
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
