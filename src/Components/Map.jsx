import React, { useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  const [countries, setCountries] = useState([
    {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            id: 1,
            name: "Turkey",
            flag: "https://flagcdn.com/tr.svg",
            capital: "Ankara",
            exportation: "600",
          },
          geometry: {
            coordinates: [30.516667, 39.933333],
            type: "Point",
          },
          id: 0,
        },
        {
          type: "Feature",
          properties: {
            id: 2,
            name: "Germany",
            flag: "https://flagcdn.com/de.svg",
            capital: "Berlin",
            exportation: "600",
          },
          geometry: {
            coordinates: [10.451526, 51.165691],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 3,
            name: "Canada",
            flag: "https://flagcdn.com/ca.svg",
            capital: "Ottawa",
            exportation: "600",
          },
          geometry: {
            coordinates: [-110.708862, 60.42153],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 4,
            name: "France",
            flag: "https://flagcdn.com/fr.svg",
            capital: "Paris",
            exportation: "600",
          },
          geometry: {
            coordinates: [2.352222, 48.856614],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 5,
            name: "Greece",
            flag: "https://flagcdn.com/gr.svg",
            capital: "Athens",
            exportation: "600",
          },
          geometry: {
            coordinates: [23.716061, 37.98381],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 6,
            name: "Italy",
            flag: "https://flagcdn.com/it.svg",
            capital: "Rome",
            exportation: "600",
          },
          geometry: {
            coordinates: [12.565679, 41.87194],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 7,
            name: "Austria",
            flag: "https://flagcdn.com/at.svg",
            capital: "Vienna",
            exportation: "600",
          },
          geometry: {
            coordinates: [14.550072, 47.516231],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 8,
            name: "Russia",
            flag: "https://flagcdn.com/ru.svg",
            capital: "Moscow",
            exportation: "600",
          },
          geometry: {
            coordinates: [37.617634, 55.755826],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 9,
            name: "China",
            flag: "https://flagcdn.com/cn.svg",
            capital: "Beijing",
            exportation: "600",
          },
          geometry: {
            coordinates: [104.195397, 35.86166],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 10,
            name: "Japan",
            flag: "https://flagcdn.com/jp.svg",
            capital: "Tokyo",
            exportation: "600",
          },
          geometry: {
            coordinates: [138.252924, 36.204824],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 11,
            name: "United States",
            flag: "https://flagcdn.com/us.svg",
            capital: "Washington, D.C.",
            exportation: "600",
          },
          geometry: {
            coordinates: [-100.0365, 38.9072],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 12,
            name: "Mexico",
            flag: "https://flagcdn.com/mx.svg",
            capital: "Mexico City",
            exportation: "600",
          },
          geometry: {
            coordinates: [-99.1332, 19.4326],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 13,
            name: "India",
            flag: "https://flagcdn.com/in.svg",
            capital: "New Delhi",
            exportation: "600",
          },
          geometry: {
            coordinates: [78.9629, 20.5937],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 14,
            name: "Brazil",
            flag: "https://flagcdn.com/br.svg",
            capital: "Brasilia",
            exportation: "600",
          },
          geometry: {
            coordinates: [-47.9292, -15.7801],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 15,
            name: "Australia",
            flag: "https://flagcdn.com/au.svg",
            capital: "Canberra",
            exportation: "600",
          },
          geometry: {
            coordinates: [149.13, -35.28],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 16,
            name: "New Zealand",
            flag: "https://flagcdn.com/nz.svg",
            capital: "Wellington",
            exportation: "600",
          },
          geometry: {
            coordinates: [174.885971, -40.900557],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 17,
            name: "Azerbaijan",
            flag: "https://flagcdn.com/az.svg",
            capital: "Baku",
            exportation: "600",
          },
          geometry: {
            coordinates: [47.576927, 40.143105],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 18,
            name: "Kazakhstan",
            flag: "https://flagcdn.com/kz.svg",
            capital: "Astana",
            exportation: "600",
          },
          geometry: {
            coordinates: [64.81801926182033, 33.75745291801738],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 19,
            name: "Uzbekistan",
            flag: "https://flagcdn.com/uz.svg",
            capital: "Tashkent",
            exportation: "600",
          },
          geometry: {
            coordinates: [69.2163, 41.377491],
            type: "Point",
          },
        },
        {
          type: "Feature",
          properties: {
            id: 20,
            name: "Kyrgyzstan",
            flag: "https://flagcdn.com/kg.svg",
            capital: "Bishkek",
            exportation: "600",
          },
          geometry: {
            coordinates: [74.59, 42.87],
            type: "Point",
          },
        },
      ],
    },
  ]);

  return (
    <>
      <MapContainer
        center={[50, -10.57]}
        zoom={2}
        style={{
          height: "500px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <GeoJSON
          data={countries}
          pointToLayer={(feature, latlng) => {
            return L.marker(latlng, {
              icon: L.divIcon({
                className: "my-div-icon",
                html: `<img src=${feature.properties.flag} alt="flag" width="20px" height="15px" />`,
              }),
            });
          }}
          onEachFeature={(feature, layer) => {
            layer.bindTooltip(
              `${feature.properties.name}  ${feature.properties.capital} ${feature.properties.exportation} İhracat`,
              {
                permanent: false,
                direction: "top",
                opacity: 1.0,
                offset: [-1, -20],
                className: "my-tooltip",
              }
            );
          }}
        />
      </MapContainer>
    </>
  );
}
