import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Gallery1 from "/Gallery1.jpg";
import Gallery2 from "/Gallery2.jpg";
import Gallery3 from "/Gallery3.jpg";
import Gallery4 from "/Gallery4.jpg";
import Gallery5 from "/Gallery5.jpg";
import Gallery6 from "/Gallery6.jpg";
import Gallery7 from "/Gallery7.jpg";
import Gallery8 from "/Gallery8.jpg";
import style from "./Css/Gallery.module.css";
const images = [
  {
    original: Gallery1,
    originalAlt: "Aksel Tekstil",
    thumbnail: Gallery1,
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: Gallery2,
    originalAlt: "Aksel Tekstil",
    thumbnail: Gallery2,
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: Gallery3,
    originalAlt: "Aksel Tekstil",
    thumbnail: Gallery3,
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: Gallery4,
    originalAlt: "Aksel Tekstil",
    thumbnail: Gallery4,
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: Gallery5,
    originalAlt: "Aksel Tekstil",
    thumbnail: Gallery5,
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: Gallery6,
    originalAlt: "Aksel Tekstil",
    thumbnail: Gallery6,
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: Gallery7,
    originalAlt: "Aksel Tekstil",
    thumbnail: Gallery7,
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: Gallery8,
    originalAlt: "Aksel Tekstil",
    thumbnail: Gallery8,
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
];

export default function Gallery() {
  return (
    <>
      <h1 className={style.GalleryTitle}>Gallery</h1>
      <ul className={style.GalleryLine}>
        <span></span>
        <li></li>
        <li></li>
        <li></li>
        <span></span>
      </ul>
      <ImageGallery
        items={images}
        showBullets={true}
        useBrowserFullscreen={true}
        disableThumbnailSwipe={true}
        autoPlay={true}
        slideDuration={500}
      />
    </>
  );
}
