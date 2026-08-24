import Image from "next/image";
import { WaveDivider } from "@/components/layout/WaveDivider";
import { AnnotatedTitle } from "@/components/ui/AnnotatedTitle";
import { CircledLink } from "@/components/ui/CircledLink";
import { Card } from "@/components/ui/Card";

const TRADITIONS = [
  {
    src: "/photos/cardPic01.png",
    alt: "Scouts swimming in an ice hole",
    title: "The Ice-Hole Swim",
    description:
      "A classic tradition where Adventurer scouts swim in an ice-hole during the winter. Not only brave – it is also an important exercise in maritime safety!",
  },
  {
    src: "/photos/cardPic02.png",
    alt: "Scouts sailing in the archipelago",
    title: "Summer Sailing",
    description:
      "Every summer we set sail for adventure in the Stockholm archipelago. Our scouts learn sailing, navigation, and teamwork.",
  },
  {
    src: "/photos/cardPic03.png",
    alt: "Scouts hiking in winter",
    title: "The Winter Hike",
    description:
      "Our adventurer scouts camp in tents even in the depths of winter. A challenge that builds strength of body and spirit!",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[600px]">
  <Image
    src="/photos/banner1.png"
    alt=""
    fill
    priority
    className="-z-10 object-cover object-right"
  />
  <div className="mx-auto max-w-7xl px-6 pt-40 pb-32">
    <div className="max-w-md space-y-6">
      <h1 className="font-display text-5xl leading-tight text-white">
        Welcome to
        <br />
        HÄSSELBY STRANDS
        <br />
        SJÖSCOUTKÅR
      </h1>
      <p className="text-sm text-white/90">
        Adventure Awaits. No matter who you are or where you come from,
        there&apos;s an adventure waiting for you.
      </p>
      <div className="flex gap-4">
        <a href="/join" className="rounded-lg bg-sun px-6 py-3 font-display text-ink">
          Join Us
        </a>
        <a href="/contact" className="rounded-lg bg-white/20 px-6 py-3 font-display text-white">
          Become a Leader
        </a>
      </div>
    </div>
  </div>
</section>
      

<WaveDivider />

      {/* Traditions */}
      <section className="bg-paper px-6 py-20">
        <AnnotatedTitle>Our Traditions</AnnotatedTitle>
        <div className="mx-auto mt-12 grid max-w-6xk gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRADITIONS.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div> 
        <CircledLink href="/about" className="mt-12">
          See More
        </CircledLink>
      </section>
    </main>
  );
}