import Image from "next/image";

type PolaroidPhotoProps = {
  src: string;
  alt: string;
  /** 旋转角度，-8 到 8 之间比较自然 */
  rotate?: number;
  className?: string;
};

export function PolaroidPhoto({
  src,
  alt,
  rotate = 0,
  className = "",
}: PolaroidPhotoProps) {
  return (
    <div
      className={`bg-white p-2.5 shadow-xl ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}