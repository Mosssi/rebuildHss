import Image from "next/image";
import { WaveDivider } from "@/components/layout/WaveDivider";
import { AnnotatedTitle } from "@/components/ui/AnnotatedTitle";
import { CircledLink } from "@/components/ui/CircledLink";
import { Card } from "@/components/ui/Card";
import { ChalkDivider } from "@/components/layout/ChalkDivider";
import { TRADITIONS } from "@/data/traditions";


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
              <a
                href="/join"
                className="rounded-lg bg-sun px-6 py-3 font-display text-ink"
              >
                Join Us
              </a>
              <a
                href="/contact"
                className="rounded-lg bg-white/20 px-6 py-3 font-display text-white"
              >
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
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRADITIONS.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
        <CircledLink href="/about" className="mt-12">
          See More
        </CircledLink>
      </section>

      {/* Chalk 分隔 + Memories */}
      <ChalkDivider />
      <section className="bg-navy px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* 左：文字 */}
          <div className="space-y-6">
            <h2 className="font-display text-4xl leading-tight text-white">
              Unforgettable
              <br />
              Scout Memories!
            </h2>
            <p className="text-sm leading-relaxed text-white/90">
              Hässelby Strands Sjöscoutkår (HSS) is a nonprofit youth
              organization with a proud tradition of scouting and life on the
              water. We are politically and religiously independent, and a
              member of Svenska Scoutförbundet, one of Sweden&apos;s largest
              youth organizations with around 65,000 members.
            </p>
            <a
              href="/about"
              className="inline-block rounded-lg bg-sun px-6 py-3 font-display text-ink"
            >
              See More
            </a>
          </div>

          {/* 右：拼贴 — 去掉 max-w 限制 */}
          <div className="w-full">
            <Image
              src="/photos/banner2.png"
              alt="Scout memories collage"
              width={900}
              height={700}
              className="h-auto w-full"
            />
          </div>
        </div>
      </section>

      <ChalkDivider flip />

      {/* Partners */}
      <section className="bg-paper px-6 py-20">
        <AnnotatedTitle>Our Partners</AnnotatedTitle>
        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-12 md:grid-cols-2">
          {/* 左：图片 — 去掉 max-w 限制 */}
          <div className="w-full">
            <Image
              src="/photos/banner3.png"
              alt="HSS partners"
              width={600}
              height={500}
              className="h-auto w-full"
            />
          </div>

          {/* 右：文字 */}
          <div className="space-y-4">
            <h2 className="font-display text-4xl text-navy">Our Partners</h2>
            <p className="text-sm leading-relaxed text-ink/80">
              <strong>Scouterna:</strong> We&apos;re a member of Svenska
              Scoutförbundet and follow their guidelines and values.
            </p>
            <p className="text-sm leading-relaxed text-ink/80">
              <strong>Stockholms Sjöscoutdistrikt:</strong> We&apos;re part of
              the district community and take part in shared activities.
            </p>
            <p className="text-sm leading-relaxed text-ink/80">
              <strong>Local Partners:</strong> We team up with local clubs and
              organizations in Hässelby Strand to strengthen what we do.
            </p>
            <a
              href="/about"
              className="inline-block rounded-lg bg-sun px-6 py-3 font-display text-ink"
            >
              Read More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}