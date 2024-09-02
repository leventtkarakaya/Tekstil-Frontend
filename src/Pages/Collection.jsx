import React, { useState } from "react";
import style from "./Css/Collection.module.css";
import CollectionPicture1 from "/Collection1.jpg";
import CollectionAll from "../Components/CollectionAll";
import CollectionJeans from "../Components/CollectionJeans";
import CollectionCeket from "../Components/CollectionJacket";
import CollectionTshirt from "../Components/CollectionTshirt";
import CollectionShort from "../Components/CollectionShort";
export default function Collection() {
  const [allSection, setAllSection] = useState([
    {
      id: 0,
      title: "Hepsi",
      value: <CollectionAll />,
    },
    {
      id: 1,
      title: "Jeans",
      value: <CollectionJeans />,
    },
    {
      id: 2,
      title: "Ceket",
      value: <CollectionCeket />,
    },
    {
      id: 3,
      title: "T-Shirt",
      value: <CollectionTshirt />,
    },
    {
      id: 4,
      title: "Şort",
      value: <CollectionShort />,
    },
  ]);
  const [active, setActive] = useState(1);
  const handleContent = (id) => {
    switch (id) {
      case 0:
        setActive(0);
        setAllSection[0].id = id;
        break;
      case 1:
        setActive(1);
        setAllSection[1].id = id;
        break;
      case 2:
        setActive(2);
        setAllSection[2].id = id;
        break;
      case 3:
        setActive(3);
        setAllSection[3].id = id;
        break;
      case 4:
        setActive(4);
        setAllSection[4].id = id;
        break;
      default:
        break;
    }
  };
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>ÜRETİMLERİMİZ</h1>
      <div className={style.Collection}>
        <div className={style.CollectionContent}>
          <div className={style.CollectionWrapper}>
            {/* Content */}
            <div>
              <h1>KATEGORİLER</h1>
              <nav>
                <ul>
                  {allSection.map((section) => {
                    return (
                      <li
                        key={section.id}
                        onClick={() => handleContent(section.id)}
                      >
                        {section.title}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            {/* Content */}
            <div className={style.CollectionContentWrapper}>
              <div className={style.CollectionContentFlex}>
                {allSection.map((section) => {
                  return active === section.id ? allSection[active].value : "";
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}