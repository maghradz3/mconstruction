"use client"
import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";

const ImageSlider = ({ images }) => {
  return (
    <div className="max-w-lg">
      <Carousel>
        {images?.map((el) => (
          <Image
            className="rounded-xl"
            src={el}
            key={el}
            width={400}
            height={400}
            priority
            alt="project_images"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
