import React from "react";
import Bg from "/ContantBg.jpg";
import InputUserIcon from "/UserAvatarPic.png";
import InputUserEmailIcon from "/UserMailicon.png";
import InputUserPhoneIcon from "/UserPhoneIcon.png";
import InputUserAboutIcon from "/UserAboutIcon.png";
import InputUserMessageIcon from "/InputTextareaIcon.png";
import style from "./Css/Contact.module.css";
export default function ContactPage() {
  return (
    <>
      <img src={Bg} alt="" width={"100%"} height={"100%"} />
      <div className={style.ContactPage}>
        <div className={style.ContactPageContent}>
          <h1>İLETİŞİM</h1>
          <div className={style.ContactPageContentForm}>
            <div className={style.ContactPageContentFormInput}>
              <div className={style.inputGroup}>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <img
                      src={InputUserIcon}
                      alt="Aker Tekstil"
                      width={20}
                      height={20}
                    />
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <img
                      src={InputUserEmailIcon}
                      alt="Aker Tekstil"
                      width={20}
                      height={20}
                    />
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <img
                    src={InputUserPhoneIcon}
                    alt="Aker Tekstil"
                    width={20}
                    height={20}
                  />
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <img
                    src={InputUserAboutIcon}
                    alt="Aker Tekstil"
                    width={20}
                    height={20}
                  />
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group">
                <span class="input-group-text">
                  <img
                    src={InputUserMessageIcon}
                    alt="Aker Tekstil"
                    width={20}
                    height={20}
                  />
                </span>
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
              <div>
                <button
                  className="btn"
                  type="button"
                  style={{
                    backgroundColor: "#f26b30",
                    color: "white",
                    padding: "10px 50px 10px 50px",
                  }}
                >
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* merkez depo */}
        <div className={style.ContactPageMerkezDepo}>
          <div className={style.ContactPageMerkezDepoContent}>
            <h1>merkez depo</h1>
            <address>
              ORUÇ REİS MAH. GİYİMKENT SİTESİ 4.SOKAK NO:1 ESENLER/İSTANBUL
            </address>
            <p> +90 216 555 55 55</p>
            <p> +90 216 555 55 55</p>
            <p>info@akertekstil.com</p>
          </div>
        </div>
      </div>
    </>
  );
}
