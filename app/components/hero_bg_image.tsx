import Image, { StaticImageData } from "next/image";

const HeroBgImage = ({ bgHero }: { bgHero: StaticImageData | string }) => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={bgHero}
        alt="Background Image"
        quality={75}
        fill
        sizes="100vw"
        priority
        style={{
          objectFit: "cover",
        }}
      />

      <div className="absolute inset-0 backdrop-blur-sm bg-[#1E293B99]/40" />
    </div>
  );
};

export default HeroBgImage;
