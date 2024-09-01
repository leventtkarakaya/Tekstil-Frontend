import React from "react";
import Map from "../Components/Map";
import Bg from "/ourcousterbg.jpg";
export default function OurCustomers() {
  return (
    <>
      <img
        src={Bg}
        alt="Aker Tekstil"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          width: "100%",
        }}
      />
      <Map />
    </>
  );
}
