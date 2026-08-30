import { WaveDivider } from "@/components/layout/WaveDivider";
import { AnnotatedTitle } from "@/components/ui/AnnotatedTitle";
import Image from "next/image";

export default function MembersPage() {
  return (
    <main>
      <section className="bg-navy px-6 pt-40 pb-16">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-5xl text-white">For Members</h1>
            <p className="mt-4 text-white/80 text-sm max-w-lg">
              Here you will find practical information for you as a member or
              guardian. Information about Scoutnet, Discord, safety, documents,
              and our routines.
            </p>
          </div>
          <div className="hidden md:block">
            <Image
              src="/photos/banner1.png"
              alt="For members"
              width={500}
              height={400}
              className="h-auto w-full opacity-60"
            />
          </div>
        </div>
      </section>

      <WaveDivider />

      {/* Safe Environment */}
      <section className="bg-paper px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-navy">
            Adventuring in a Safe Environment
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/70">
            The Scouts should be a safe place where you can explore and be
            challenged on your own terms. That is why we work with Safe
            Meetings. The goal is for Scouting to be free from harassment and
            abuse in all forms.
          </p>
        </div>

        {/* 三张卡片 */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {["Attendance", "Attendance", "Attendance"].map((label, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src="/photos/banner1.png"
                alt={label}
                fill
                className="object-cover brightness-75 transition-all group-hover:brightness-90"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="text-2xl">🏕️</span>
                <h3 className="mt-2 font-display text-xl">{label}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}