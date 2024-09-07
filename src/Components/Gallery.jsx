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
    original: "/Gallery1.jpg",
    originalAlt: "Aksel Tekstil",
    thumbnail: "/Gallery1.jpg",
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: "/Gallery2.jpg",
    originalAlt: "Aksel Tekstil",
    thumbnail: "/Gallery2.jpg",
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  ,
  {
    original: "/Gallery3.jpg",
    originalAlt: "Aksel Tekstil",
    thumbnail: "/Gallery3.jpg",
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: "/Gallery4.jpg",
    originalAlt: "Aksel Tekstil",
    thumbnail: "/Gallery4.jpg",
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: "/Gallery5.jpg",
    originalAlt: "Aksel Tekstil",
    thumbnail: "/Gallery5.jpg",
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: "/Gallery6.jpg",
    originalAlt: "Aksel Tekstil",
    thumbnail: "/Gallery6.jpg",
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: "/Gallery7.jpg",
    originalAlt: "Aksel Tekstil",
    thumbnail: "/Gallery7.jpg",
    thumbnailAlt: "Aksel Tekstil",
    thumbnailHeight: 100,
    thumbnailWidth: 400,
  },
  {
    original: "/Gallery8.jpg",
    originalAlt: "Aksel Tekstil",
    thumbnail: "/Gallery8.jpg",
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
        showThumbnails={true}
        showPlayButton={true}
        showBullets={true}
        useBrowserFullscreen={true}
        disableThumbnailSwipe={true}
        autoPlay={true}
        slideDuration={500}
      />
    </>
  );
}
