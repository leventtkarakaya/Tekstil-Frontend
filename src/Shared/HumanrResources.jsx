import React from "react";
import style from "./Css/HumanrResources.module.css";
import bg from "/FormBG.svg";
import form from "/form.jpg";
export default function HumanrResources() {
  return (
    <>
      <div className={style.HumanrResources}>
        <div className={style.HumanrResourcesContent}>
          <img
            src={bg}
            alt="HumanrResources"
            className={style.HumanrResourcesBG}
          />
          <div className={style.HumanrResourcesContentWrapper}>
            <div className={style.HumanrResourcesContentFlex}>
              {/* Content */}
              <div className={style.HumanrResourcesContentForm}>
                <h1 className={style.HumanrResourcesContentTitle}>
                  İnsan Kaynakları
                </h1>
                <div className={style.HumanrResourcesContentInputName}>
                  <div>
                    <label htmlFor="name">İsim</label>
                    <input type="text" id="name" />
                  </div>
                  <div>
                    <label htmlFor="Surname">Soyisim</label>
                    <input type="text" id="Surname" />
                  </div>
                </div>
                <label htmlFor="email"> E-posta</label>
                <input type="email" id="email" />
                <label htmlFor="phone">Telefon</label>
                <input type="text" id="phone" />
                <label htmlFor="message">Mesaj</label>
                <textarea name="" id="" cols="30" rows="5"></textarea>
              </div>
              {/* Content */}
              <div className={style.HumanrResourcesContentImg}>
                <img
                  src={form}
                  alt="Aker Tekstil"
                  className={style.HumanrResourcesBGForm}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
