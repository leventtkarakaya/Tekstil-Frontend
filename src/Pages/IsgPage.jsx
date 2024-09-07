import React from "react";
import Picture from "/IsgPicture.jpg";
import Style from "./Css/IsgPage.module.css";
export default function IsgPage() {
  return (
    <>
      <img src="/ISG.jpg" alt="ISG" style={{ width: "100%", height: "100%" }} />
      <div className={Style.content}>
        <div className={Style.contentWrapper}>
          <img src={Picture} alt="Picture" className={Style.contentPicture} />
          <div className={Style.contentText}>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Roboto" + ", sans-serif",
                color: "#f26b30",
              }}
            >
              Sürdürebilirlik
            </h3>
            <h4
              style={{
                color: "#f26b30",
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "Roboto" + ", sans-serif",
              }}
            >
              İş Sağlığı Güvenliği
            </h4>
            <p
              style={{
                fontFamily: "Roboto" + ", sans-serif",
                lineHeight: "25px",
                fontSize: "15px",
                color: "#797979",
                textAlign: "justify",
                fontWeight: "initial",
              }}
            >
              Çalışanlarımızın fiziksel, sosyal ve ruhsal yönden tam iyilik
              halinde çalışmaları için proaktif ve katılımcı yaklaşımlarla sıfır
              iş kazası ve meslek hastalığı hedefi ile çalışmaktayız. Bu
              kapsamda güvenli ve sağlıklı çalışma ortamı sağlayacak iş sağlığı
              ve güvenliği politikaları ve uygulamaları tüm çalışanların
              katılımıyla yapılmaktadır. Gerek Çalışma Sosyal Güvenlik Bakanlığı
              gerekse müşterilerimiz tarafından gerçekleştirilen denetimlerde iş
              sağlığı ve güvenliği yasal mevzuat gerekliliklerinin karşılandığı
              ortaya konmuştur
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
