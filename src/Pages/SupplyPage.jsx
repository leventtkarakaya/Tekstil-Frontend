import React from "react";
import BG from "/SupplyBG.jpg";
import Picture from "/Supply.jpg";
import style from "./Css/SupplyPage.module.css";
export default function SupplyPage() {
  return (
    <>
      <img src={BG} alt="BG" style={{ width: "100%", height: "100%" }} />
      <div className={style.SupplyPage}>
        <div className={style.SupplyPageContent}>
          <img
            src={Picture}
            alt="Picture"
            className={style.SupplyPageContentPicture}
          />
          <div className={style.SupplyPageContentText}>
            <h2>Sürdürebilirlik</h2>
            <h3>Tedarik Yönetimi</h3>
            <p>
              Etkin bir fason ve tedarikçi değerlendirme ve denetim mekanizması
              oluşturulmuştur. Yapılan düzenli saha ziyaretleri ile
              tedarikçilerimizin de yasal mevzuat ve müşteri standartlarına
              uyumunu ve süreklilik takibi sağlanmaktayız.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
