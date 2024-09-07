import React, { useState } from "react";
import Logo from "/Logo.png";
import style from "./Css/NavMobile.module.css";
import { RiCloseLargeLine } from "react-icons/ri";
import { HiMenuAlt3 } from "react-icons/hi";
import En from "/En.png";
import Tr from "/Tr.png";

export default function NavMobile({ active, handleActiveMenu }) {
  const NavLinks = [
    {
      id: 1,
      title: "Anasayfa",
      select: false,
      link: "/",
    },
    {
      id: 2,
      title: "Teklif Al",
      select: false,
      link: "/",
    },
    {
      id: 3,
      title: "Kurumsal",
      header: [
        {
          id: 31,
          title: "Hakkımızda",
          link: "/hakkimizda",
        },
        {
          id: 32,
          title: "Müşterilerimiz",
          link: "/musterilerimiz",
        },
        {
          id: 33,
          title: "İnsan Kaynakları",
          link: "/insankaynaklari",
        },
      ],
      select: true,
    },
    {
      id: 4,
      title: "Üretim",
      header: [
        {
          id: 41,
          title: "Galeri",
          link: "/galeri",
        },
        {
          id: 42,
          title: "Üretim Tesisi",
          link: "/uretimtesisi",
        },
        {
          id: 43,
          title: "Sürdürebilirlik",
          title: "/kalite",
        },
      ],
      select: true,
    },
    {
      id: 5,
      title: "Koleksiyon",
      select: false,
      link: "/koleksiyon",
    },
    {
      id: 7,
      title: "Magzalarımız",
      select: false,
      link: "/magazalarimiz",
    },
    {
      id: 8,
      title: "Sürdürebilirlik",
      header: [
        {
          id: 81,
          title: "ISG",
          link: "/isg",
        },
        {
          id: 82,
          title: "Tedarik Yönetimi",
          link: "/tedarik",
        },
      ],
      select: true,
    },
    {
      id: 9,
      title: "İletişim",
      select: false,
      link: "/iletisim",
    },
  ];
  return (
    <>
      {/* Menu Icon */}
      <HiMenuAlt3
        onClick={() => handleActiveMenu()}
        style={{
          color: "#f26b30",
          cursor: "pointer",
          width: "35px",
          height: "35px",
        }}
      />
      {/* Active Menu */}
      <div
        className={active ? style.active : style.inactive}
        style={{ zIndex: "999" }}
      >
        <aside className={style.navbar}>
          {/* Close Icon */}
          <div className={style.close}>
            <RiCloseLargeLine
              onClick={() => handleActiveMenu()}
              style={{
                color: "#f26b30",
                cursor: "pointer",
                width: "35px",
                height: "35px",
              }}
            />
          </div>
          {/* Logo */}
          <img src={Logo} alt="Aker Tekstil" className={style.logo} />
          {/* Menu Links */}
          <div
            className={style.menu}
            style={{
              display: "flex",
              fontFamily: "Google" + ", sans-serif",
              flexDirection: "column",
            }}
          >
            {NavLinks.map((link, index) => (
              <div key={link.id}>
                <a
                  href={link.link}
                  style={{
                    fontFamily: "Google",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {link.select === false && link.title}
                </a>
                {link.select ? (
                  <div className="dropdown" key={index}>
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        backgroundColor: "#f26b30",
                        outline: "none",
                        border: "none",
                        color: "white",
                        padding: "10px 18px",
                      }}
                    >
                      {link.title}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-group mt-1">
                      <li>
                        {link.header.map((header, index) => (
                          <a
                            href={header.link}
                            key={index}
                            className="dropdown-item"
                            style={{
                              fontFamily: "Google",
                              color: "black",
                              lineHeight: "25px",
                              fontSize: "18px",
                              fontWeight: "700",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              textDecorationLine: "none",
                              padding: "5px",
                            }}
                          >
                            {header.title}
                          </a>
                        ))}
                      </li>
                    </ul>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          {/* Language */}
          <div className={style.language}>
            <img
              src={En}
              alt="English"
              style={{ cursor: "pointer", width: "35px", height: "25px" }}
            />
            <img
              src={Tr}
              alt="Turkish"
              style={{ cursor: "pointer", width: "35px", height: "25px" }}
            />
          </div>
        </aside>
      </div>
    </>
  );
}
