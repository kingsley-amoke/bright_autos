import Image, { StaticImageData } from "next/image";
import React from "react";

const HeroBgImage = ({ bgHero }: { bgHero: StaticImageData | string }) => {
  return (
    <Image
      src={bgHero}
      alt="Background Image"
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      priority
      className="blur-sm"
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
};

export default HeroBgImage;
