import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import a from "../../../../assets/1.jpg";
import b from "../../../../assets/2.jpg";
import c from "../../../../assets/3.jpg";
import d from "../../../../assets/7.jpg";
import e from "../../../../assets/8.jpg";
import f from "../../../../assets/12.jpg";

const Slider = () => {
  const images = [
    {
      original: a,
      thumbnail: a,
    },
    {
      original: b,
      thumbnail: b,
    },
    {
      original: c,
      thumbnail: c,
    },
    {
      original: d,
      thumbnail: d,
    },
    {
      original: e,
      thumbnail: e,
    },
    {
      original: f,
      thumbnail: f,
    },
  ];

  return (
    <>
      <ImageGallery
        items={images}
        // showPlayButton={false}
        // showFullscreenButton={false}
        // showThumbnails={false}
        // showNav={false}
        // showBullets={false}
        autoPlay={true}
        slideInterval={5000}
        slideDuration={3000}
        // thumbnailPosition='top'
      />
    </>
  );
};

export default Slider;
