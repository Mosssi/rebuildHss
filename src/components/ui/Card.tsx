import Image from "next/image";

type CardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export function Card({ src, alt, title, description }: CardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="relative aspect-[4/3]">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg text-navy">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/80">
          {description}
        </p>
      </div>
    </div>
  );
}