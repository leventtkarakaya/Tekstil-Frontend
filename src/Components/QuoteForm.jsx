import React from "react";
import style from "./Css/QuoteForm.module.css";
export default function QuoteForm() {
  return (
    <>
      <div className={style.QuoteForm}>
        <div>
          <h1
            style={{
              color: "#2d2d2d",
              textAlign: "center",
              lineHeight: "50px",
              fontWeight: "bold",
              fontSize: "40px",
              fontFamily: "Poppins" + ", sans-serif",
              textTransform: "uppercase",
            }}
          >
            Hemen Teklİf Alın
          </h1>
          <ul className={style.QuoteFormLine}>
            <span></span>
            <li></li>
            <li></li>
            <li></li>
            <span></span>
          </ul>
        </div>
        <div className={style.QuoteFormContent}>
          <div className={style.QuoteFormContentWrapper}>
            <img
              src="/Resim1.jpg"
              alt="Aker Tekstil"
              width={1100}
              height={650}
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
                      <label
                        htmlFor="name"
                        style={{
                          color: "#797979",
                          fontWeight: "bold",
                          fontSize: "20px",
                          lineHeight: "30px",
                        }}
                      >
                        Adınız*{" "}
                      </label>
                      <input
                        type="text"
                        placeholder="Adınız"
                        required
                        name="name"
                        id="name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="Company"
                        style={{
                          color: "#797979",
                          fontWeight: "bold",
                          fontSize: "20px",
                          lineHeight: "30px",
                        }}
                      >
                        Şirket Adı{" "}
                      </label>
                      <input
                        type="text"
                        placeholder="Şirket Adı"
                        name="Company"
                        id="Company"
                        required
                      />
                    </div>
                  </div>
                  <div
                    className={style.QuoteFormContentFormInputListContentTel}
                  >
                    <label
                      htmlFor="tel"
                      style={{
                        color: "#797979",
                        fontWeight: "bold",
                        fontSize: "20px",
                        lineHeight: "30px",
                      }}
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Telefon"
                      required
                    />
                  </div>
                  <div
                    className={style.QuoteFormContentFormInputListContentEmail}
                  >
                    <label
                      htmlFor="email"
                      style={{
                        color: "#797979",
                        fontWeight: "bold",
                        fontSize: "20px",
                        lineHeight: "30px",
                      }}
                    >
                      E-Posta
                    </label>
                    <input
                      type="email"
                      placeholder="E-Posta"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <div
                    className={
                      style.QuoteFormContentFormInputListContentTextArea
                    }
                  >
                    <label
                      htmlFor="Message"
                      style={{
                        color: "#797979",
                        fontWeight: "bold",
                        fontSize: "20px",
                        lineHeight: "30px",
                      }}
                    >
                      Mesajınız
                    </label>
                    <textarea
                      name="message"
                      id="Message"
                      cols="51"
                      rows="4"
                    ></textarea>
                  </div>
                  <button className="btn btn-primary w-100" type="submit">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
