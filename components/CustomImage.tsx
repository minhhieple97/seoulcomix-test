import Image, { ImageProps } from "next/image";
import React from "react";
import { useState } from "react";

interface CustomImageProps extends ImageProps {
  fallbackSrc: string;
}

const CustomImage: React.FC<CustomImageProps> = (props) => {
  const { src, fallbackSrc, alt, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      alt={alt}
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default CustomImage;
