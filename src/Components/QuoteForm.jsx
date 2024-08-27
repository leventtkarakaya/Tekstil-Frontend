import React from "react";
import style from "./Css/QuoteForm.module.css";
export default function QuoteForm() {
  return (
    <>
      <div className={style.QuoteForm}>
        <div>
          <h1>Hemen Teklif Alın</h1>
        </div>
        <div className={style.QuoteFormContent}>
          <div className={style.QuoteFormContentWrapper}>
            <img
              src="/Resim1.jpg"
              alt="Aker Tekstil"
              width={1100}
              height={600}
            />
            <div className={style.QuoteFormContentText}>
              <div className={style.QuoteFormContentTextListWrapper}>
                <h4
                  style={{
                    color: "#f26b30",
                  }}
                >
                  - Profesyonel Özel Denim Kot Üreticisi -
                </h4>
                <div className={style.QuoteFormContentTextList}>
                  <div className={style.QuoteFormContentTextListBox1}>
                    <p
                      style={{
                        color: "#f26b30",
                      }}
                    >
                      DÜŞÜK MOQ (300 Adet/Stil)
                    </p>
                    <div className={style.QuoteFormContentTextListBox1Check}>
                      <img src="/Check.png" alt="" width={30} height={30} />
                      <p>DÜŞÜK MOQ</p>
                      <p>(300 Adet/Stil)</p>
                      <p>Minimum sipariş miktarı 300 adet kadardır.</p>
                    </div>
                  </div>
                  <div className={style.QuoteFormContentTextListBox2}>
                    <p
                      style={{
                        color: "#f26b30",
                      }}
                    >
                      Hızlı Örnek (7-10 gün)
                    </p>
                    <div className={style.QuoteFormContentTextListBox2Check}>
                      <img src="/Check.png" alt="" width={30} height={30} />
                      <p>Hızlı Örnek</p>
                      <p>(7-10 gün)</p>
                      <p>
                        Hızlı bir şekilde örnekler üretebilen özel prova
                        departmanı.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.QuoteFormContentForm}>
                <div className={style.QuoteFormContentFormInput}>
                  <h3
                    style={{
                      color: "#f26b30",
                      textAlign: "center",
                      fontFamily: "Poppins" + ", sans-serif",
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                  >
                    Hemen Teklif Alın
                  </h3>
                  <div className={style.QuoteFormContentFormInputListContent}>
                    <div>
                      <label htmlFor="">Adınız* </label>
                      <input type="text" placeholder="Adınız" />
                    </div>
                    <div>
                      <label htmlFor="">Şirket Adı </label>
                      <input type="text" placeholder="Şirket Adı" />
                    </div>
                  </div>

                  <div>
                    <label>Telefon</label>
                    <input type="number" placeholder="Telefon" />
                  </div>
                  <div>
                    <label>E-Posta</label>
                    <input type="email" placeholder="E-Posta" />
                  </div>
                  <div>
                    <label>Mesajınız</label>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
