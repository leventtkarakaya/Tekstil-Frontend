import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
export default function ScrollTopBtn() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {visible && (
        <div
          onClick={scrollToTop}
          style={{
            cursor: "pointer",
            position: "fixed",
            bottom: "80px",
            right: "80px",
            zIndex: 9999,
            backgroundColor: "#f26b30",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaArrowUp
            style={{ color: "white", width: "30px", height: "30px" }}
          />
        </div>
      )}
    </div>
  );
}
