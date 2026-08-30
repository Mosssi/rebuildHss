import { WaveDivider } from "@/components/layout/WaveDivider";
import { AnnotatedTitle } from "@/components/ui/AnnotatedTitle";
import { CircledLink } from "@/components/ui/CircledLink";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy px-6 pt-40 pb-16">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-5xl text-white leading-tight">
              About HSS
              <br />
              HÄSSELBY STRANDS
              <br />
              SJÖSCOUTKÅR
            </h1>
            <p className="mt-4 text-white/80 text-sm">
              Hässelby Strands Sjöscoutkår - En traditionsrik ideell
              ungdomsverksamhet sedan många år
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <Image
              src="/photos/banner1.png"
              alt="Scouts"
              width={600}
              height={500}
              className="h-auto w-full rounded-sm rotate-2 shadow-xl"
            />
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Who Are We */}
      <section className="bg-paper px-6 py-20">
        <AnnotatedTitle>Who Are We?</AnnotatedTitle>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-ink/80">
          <p>
            Hässelby Strands Sjöscoutkår (HSS) is a nonprofit youth
            organization with a proud tradition of scouting and life on the
            water. We're based in Hässelby Strand, western Stockholm, and have
            been for many years.
          </p>
          <p>
            We are politically and religiously independent, and a member of
            Svenska Scoutförbundet (Scouterna), one of Sweden's largest youth
            organizations with around 65,000 members.
          </p>
          <p>
            With us, children and young people from all walks of life come
            together to experience adventure, learn new skills, and grow as
            individuals.
          </p>
        </div>
        <CircledLink href="/departments" className="mt-12">
          See More
        </CircledLink>
      </section>

      {/* Our History */}
      <section className="bg-navy px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="relative grid grid-cols-2 gap-3">
            <Image
              src="/photos/banner2.png"
              alt="HSS history"
              width={600}
              height={400}
              className="h-auto w-full col-span-2"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-display text-4xl text-white">Our History</h2>
            <p className="text-sm leading-relaxed text-white/80">
              Hässelby Strands Sjöscoutkår has a long and proud tradition of
              scouting in the area. Over the years, thousands of children and
              young people have passed through our departments, learning
              everything from knots to leadership.
            </p>
            <p className="text-sm leading-relaxed text-white/80">
              The troop has always had a strong connection to water and boats.
              Our location on Lake Mälaren has given us unique opportunities to
              run sea scouting at a high level. Many of our traditions live on
              today — from the winter ice bath to summer sailing in the
              archipelago.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider fill="var(--color-navy)" className="absolute inset-x-0 top-0 -translate-y-px" />

      {/* What Makes Us Unique */}
      <section className="bg-paper px-6 py-20">
        <AnnotatedTitle>What Makes Us Unique?</AnnotatedTitle>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              icon: "⛵",
              title: "Sea Scouting",
              desc: "As a sea scout troop, we have a unique focus on water and boats. We sail on Lake Mälaren and in the Stockholm archipelago, learning water safety, navigation, and sailing.",
            },
            {
              icon: "🤝",
              title: "Community",
              desc: "With us, you build strong friendships that last a lifetime. Many of our leaders are former scouts who stay involved and pass their experience on to the next generation.",
            },
            {
              icon: "📖",
              title: "Learning by Doing",
              desc: "We believe in learning through hands-on experience. Our scouts get to try, fail, and succeed in a safe environment where mistakes are a natural part of learning.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm"
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 font-display text-lg text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}