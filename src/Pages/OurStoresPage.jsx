import React from "react";
import OutStoresPicture from "/OurStores.jpg";
import LocationIcon from "/LocationIcon.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import style from "./Css/OurStores.module.css";
import "leaflet/dist/leaflet.css";
const MapContainerCenter = [
  {
    id: 1,
    name: "Merter AVM",
    position: [41.00964391091071, 28.88707338307313],
    tel: "0555 555 55 55",
    email: "AkerTekstil@gmail.com",
    fax: "0555 555 55 55",
    address: "Merter Sok. No: 1, 34320 Merter/Istanbul",
  },
  {
    id: 2,
    name: "Laleli Şubesi",
    position: [41.010306433749676, 28.955338923744495],
    tel: "0555 555 55 55",
    email: "AkerTekstil@gmail.com",
    fax: "0555 555 55 55",
    address: "Laleli Sok. No: 1, 34320 Laleli/Istanbul",
  },
  {
    id: 3,
    name: "Ceyhan AVM",
    position: [40.79070543546045, 29.38841311606195],
    tel: "0555 555 55 55",
    email: "AkerTekstil@gmail.com",
    fax: "0555 555 55 55",
    address: "Ceyhan Sok. No: 1, 34320 Ceyhan/Istanbul",
  },
  {
    id: 4,
    name: "Ritim İstanbul AVM",
    position: [40.92454633152363, 29.158168369376956],
    tel: "0555 555 55 55",
    email: "AkerTekstil@gmail.com",
    fax: "0555 555 55 55",
    address: "Kartal Sok. No: 1, 34320 Kartal/Istanbul",
  },
];
function getIcon() {
  return new L.Icon({
    iconUrl: LocationIcon,
    iconSize: [35, 31],
    iconAnchor: [12, 40],
    popupAnchor: [6, -41],
  });
}
export default function OurStoresPage() {
  return (
    <>
      <img src={OutStoresPicture} alt="" width={"100%"} />
      <h1 style={{ textAlign: "center" }}>MAGZALARIMIZ</h1>
      <map className={style.leafletContainer}>
        <MapContainer
          center={[41.02620857208099, 29.00078174056218]}
          zoom={10}
          zoomControl={true}
          scrollWheelZoom={true}
          className={style.leafletContainerCenter}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {MapContainerCenter.map((item, index) => (
            <Marker position={item.position} key={index} icon={getIcon()}>
              <Popup>
                <h3>{item.name}</h3>
                <p>{item.tel}</p>
                <p>{item.email}</p>
                <p>{item.fax}</p>
                <p>{item.address}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </map>
    </>
  );
}
