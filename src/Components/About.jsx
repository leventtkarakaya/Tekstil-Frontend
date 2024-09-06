import React from "react";
import Resim1 from "/Resim1.jpg";
import style from "./Css/About.module.css";
export default function About() {
  return (
    <>
      <h1 className={style.AboutTitle}>Hakkımızda</h1>
      <ul className={style.AboutLine}>
        <span></span>
        <li></li>
        <li></li>
        <li></li>
        <span></span>
      </ul>
      <div className={style.AboutContent}>
        <div className={style.AboutContentWrapper}>
          <img
            src={Resim1}
            alt="Aker Tekstil"
            width={1100}
            height={600}
            className={style.AboutContentImg}
          />
          <div className={style.AboutContentText}>
            <p>
              Biz, <span style={{ color: "#f26b30" }}>AKER</span> Tekstil, dünya
              çapında yüksek kaliteli markalar için denim giysiler üreten
              Türkiye'deki bir denim fabrikasıyız. Üretimimiz denim kot
              pantolon, denim etek, denim ceket vb. içerir. 7-10 gün içinde
              sizin için ücretsiz numune hizmeti sağlıyoruz. Siparişleriniz
              memnuniyetle karşılanır, kumaş numunenize, numunelerinize, tasarım
              taslağınıza veya bir fotoğrafınıza göre numuneler yaparız.
              Numuneleri ve seri üretimi kabul edilebilir fiyat ve kaliteyle
              hızlandırmanıza yardımcı olabiliriz
            </p>
            <button>İnçele</button>
          </div>
        </div>
      </div>
    </>
  );
}
