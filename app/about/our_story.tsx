import Image from "next/image";
import { Sparkle } from "lucide-react";
import { OurStory } from "../types/our_story";

const BLOB_SHAPES = [
  "63% 37% 54% 46% / 43% 51% 49% 57%",
  "42% 58% 65% 35% / 55% 45% 55% 45%",
];

const BLOB_COLORS: { dark: string; orange: string } = {
  dark: "bg-[#111827]",
  orange: "bg-orange-500",
};

type BlobColorKey = keyof typeof BLOB_COLORS;

interface SquiggleProps {
  className?: string;
  color?: BlobColorKey;
}

export function Squiggle({ className = "", color = "dark" }: SquiggleProps) {
  const tailwindColorClass = BLOB_COLORS[color];

  return (
    <svg
      viewBox="0 0 40 20"
      fill="none"
      className={`${className} ${tailwindColorClass}`}
      style={color ? { color } : undefined}
      aria-hidden="true"
    >
      <path
        d="M2 14c3-8 6-8 9 0s6 8 9 0 6-8 9 0 6 8 9 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BlobImage({
  src,
  alt,
  color = "dark",
  shapeIndex = 0,
  showDecorations = true,
}: {
  src: string;
  alt: string;
  color?: BlobColorKey;
  shapeIndex?: number;
  showDecorations?: boolean;
}) {
  const bgClass = BLOB_COLORS[color] ?? BLOB_COLORS.dark;
  const radius = BLOB_SHAPES[shapeIndex % BLOB_SHAPES.length];
  const size = 150;
  const height = size * 1.1547;

  return (
    <div className="relative h-56 w-56 shrink-0 sm:h-64 sm:w-64">
      <div
        className={`absolute inset-5 ${bgClass}`}
        style={{ borderRadius: radius }}
      />
      <div className="absolute inset-11" style={{ borderRadius: radius }}>
        <div
          style={{
            width: `${size}px`,
            height: `${height}px`,
            backgroundColor: color,
            clipPath:
              "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          {src && (
            <Image
              src={src}
              alt={alt}
              fill
              sizes="256px"
              className="object-cover"
            />
          )}
        </div>
      </div>

      {showDecorations && (
        <>
          <Sparkle
            className="absolute left-12 top-12 h-6 w-6"
            strokeWidth={1}
            color={color == "orange" ? "#000000" : "#ff6800"}
            fill={color == "orange" ? "#000000" : "#ff6800"}
          />
          <Squiggle
            className="absolute bottom-10 right-10 h-8 w-10"
            color={color === "orange" ? "dark" : "orange"}
          />
        </>
      )}
    </div>
  );
}

export function StoryRow({
  story,
  imageAlt = "",
  shapeIndex = 0,
  showDecorations = true,
}: {
  story: OurStory;
  imageAlt?: string;
  shapeIndex?: number;
  showDecorations?: boolean;
}) {
  const isImageRight = story.imagePosition === "right";

  const textBlock = (
    <div className="flex flex-1 flex-col justify-center">
      <h3 className="text-lg font-extrabold tracking-wide text-slate-900">
        {story.title}
      </h3>
      <span className="mt-1 block h-1 w-30 rounded-full bg-orange-500" />
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
        {story.body}
      </p>
    </div>
  );

  const imageBlock = (
    <div className="flex flex-1 justify-center">
      <BlobImage
        src={story.image}
        alt={imageAlt}
        color={story.blobColor as BlobColorKey}
        shapeIndex={shapeIndex}
        showDecorations={showDecorations}
      />
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-10 sm:flex-row sm:gap-16">
      {isImageRight ? (
        <>
          {textBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {textBlock}
        </>
      )}
    </div>
  );
}
