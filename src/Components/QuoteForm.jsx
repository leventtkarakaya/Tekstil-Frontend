import React from "react";
import style from "./Css/QuoteForm.module.css";
import { useTranslation } from "react-i18next";
export default function QuoteForm() {
  const currentLanguage = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();
  return (
    <>
      <div id="QuoteForm" className={style.QuoteForm}>
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
            {currentLanguage === "tr"
              ? `${t("QuoteFormTr.Headtitle")}`
              : `${t("QuoteFormEn.Headtitle")}`}
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
                  {currentLanguage === "tr"
                    ? `- ${t("QuoteFormTr.title")} -`
                    : `- ${t("QuoteFormEn.title")} -`}
                </h4>
                <div className={style.QuoteFormContentTextList}>
                  <div className={style.QuoteFormContentTextListBox1}>
                    <p
                      style={{
                        color: "#f26b30",
                      }}
                    >
                      {currentLanguage === "tr"
                        ? `${t("QuoteFormTr.title2")}`
                        : `${t("QuoteFormEn.title2")}`}
                    </p>
                    <div className={style.QuoteFormContentTextListBox1Check}>
                      <img
                        src="/Check.png"
                        alt="Aker Tekstil"
                        style={{
                          width: "30px",
                          height: "30px",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                      <p>
                        {currentLanguage === "tr"
                          ? `${t("QuoteFormTr.title4")}`
                          : `${t("QuoteFormEn.title4")}`}
                      </p>
                      <p>
                        {" "}
                        {currentLanguage === "tr"
                          ? `${t("QuoteFormTr.title5")}`
                          : `${t("QuoteFormEn.title5")}`}
                      </p>
                      <p>
                        {" "}
                        {currentLanguage === "tr"
                          ? `${t("QuoteFormTr.paragraph")}`
                          : `${t("QuoteFormEn.paragraph")}`}
                      </p>
                    </div>
                  </div>
                  <div className={style.QuoteFormContentTextListBox2}>
                    <p
                      style={{
                        color: "#f26b30",
                      }}
                    >
                      {currentLanguage === "tr"
                        ? `${t("QuoteFormTr.title3")}`
                        : `${t("QuoteFormEn.title3")}`}
                    </p>
                    <div className={style.QuoteFormContentTextListBox2Check}>
                      <img
                        src="/Check.png"
                        alt=""
                        style={{ width: "30px", height: "30px" }}
                      />
                      <p>
                        {" "}
                        {currentLanguage === "tr"
                          ? `${t("QuoteFormTr.title6")}`
                          : `${t("QuoteFormEn.title6")}`}
                      </p>
                      <p>
                        {" "}
                        {currentLanguage === "tr"
                          ? `${t("QuoteFormTr.paragraph2")}`
                          : `${t("QuoteFormEn.paragraph2")}`}
                      </p>
                      <p>
                        {currentLanguage === "tr"
                          ? `${t("QuoteFormTr.paragraph3")}`
                          : `${t("QuoteFormEn.paragraph3")}`}
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
                    {currentLanguage === "tr"
                      ? `${t("QuoteFormTr.formtitle")}`
                      : `${t("QuoteFormEn.formtitle")}`}
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
                        {currentLanguage === "tr"
                          ? `${t("QuoteFormTr.formInputName")}`
                          : `${t("QuoteFormEn.formInputName")}`}
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
                        {currentLanguage === "tr"
                          ? `${t("QuoteFormTr.formInputCompanyName")}`
                          : `${t("QuoteFormEn.formInputCompanyName")}`}
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
                      {currentLanguage === "tr"
                        ? `${t("QuoteFormTr.formInputNumber")}`
                        : `${t("QuoteFormEn.formInputNumber")}`}
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
                      {currentLanguage === "tr"
                        ? `${t("QuoteFormTr.formInputEmail")}`
                        : `${t("QuoteFormEn.formInputEmail")}`}
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
                      {currentLanguage === "tr"
                        ? `${t("QuoteFormTr.formInputMessage")}`
                        : `${t("QuoteFormEn.formInputMessage")}`}
                    </label>
                    <textarea
                      name="message"
                      id="Message"
                      cols="51"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    className="btn w-100"
                    style={{ backgroundColor: "#f26b30", color: "white" }}
                    type="submit"
                  >
                    {currentLanguage === "tr"
                      ? `${t("QuoteFormTr.formInputSubmit")}`
                      : `${t("QuoteFormEn.formInputSubmit")}`}
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
