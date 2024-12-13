"use client";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Link from "next/link";
import { Image } from "@nextui-org/image";

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <LightGallery
      elementClassNames={`grid place-items-center ${images.length === 1 ? "grid-cols-1" : "grid-cols-2"}`}
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      {images.map((image, index) => (
        <Link className="w-full" key={image} href={image}>
          <Image
            className="h-[400px] w-full"
            src={image}
            alt={`image-${index}`}
          />
        </Link>
      ))}
    </LightGallery>
  );
};

export default ImageGallery;
