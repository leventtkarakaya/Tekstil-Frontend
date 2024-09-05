import React, { useState } from "react";
import Jeans from "/Jeans1.jpg";
import Jeans2 from "/Jeans2.jpg";
import Jeans3 from "/Jeans3.jpg";
import style from "./Css/CollectionAll.module.css";
export default function CollectionJeans() {
  const [data, setData] = useState([
    {
      id: 0,
      title: "Ceket",
      text: "Güzel Ceket",
      text2: "%20 Kumas",
      text3: "OVERSIZE",
      text4: "BASKI DESEN",
      button: "İnçele",
      img: Jeans,
    },
    {
      id: 1,
      title: "Ceket",
      text: "Güzel Ceket",
      text2: "COTTON 16/1",
      text3: "OVERSIZE",
      text4: "PRINT PATTERN",
      button: "İnçele",
      img: Jeans2,
    },
    {
      id: 2,
      title: "Ceket",
      text: "Güzel Ceket",
      text2: "COTTON 16/1",
      text3: "OVERSIZE",
      text4: "PRINT PATTERN",
      button: "İnçele",
      img: Jeans3,
    },
  ]);
  return (
    <>
      <div className={style.CollectionAll}>
        {data.map((item, index) => {
          return (
            <div className={style.CollectionAllContent} key={index}>
              <div className={style.CollectionAllContentImg} key={index}>
                <img src={item.img} alt="Aker Tekstil" />
              </div>
              <div className={style.CollectionAllContentText}>
                <h4 style={{ color: "#f26b30", textTransform: "uppercase" }}>
                  {item.title}
                </h4>
                <div className={style.CollectionAllContentTextP}>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                      fontFamily: "Poppins" + ", sans-serif",
                      color: "#f26b30",
                    }}
                  >
                    {item.text}
                  </p>
                  <p>{item.text2}</p>
                </div>
                <div className={style.CollectionAllContentTextP2}>
                  <p>{item.text3}</p>
                  <p>{item.text4}</p>
                </div>
                <div className={style.CollectionAllContentTextButton}>
                  <button>{item.button}</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
