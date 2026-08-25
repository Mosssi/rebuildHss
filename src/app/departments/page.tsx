import Image from "next/image";
import { WaveDivider } from "@/components/layout/WaveDivider";
import { AnnotatedTitle } from "@/components/ui/AnnotatedTitle";
import { CircledLink } from "@/components/ui/CircledLink";
import { DEPARTMENTS, FAQ } from "@/data/departments";
import { PlayCircle } from "lucide-react";

export default function DepartmentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-navy px-6 pt-40 pb-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-5xl text-white">Our Departments</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Our program is organized by age group. Each department has its own
            activities and challenges.
          </p>
        </div>
      </section>

      <WaveDivider />

      {/* Find Your Department */}
      <section className="bg-paper py-16">
        <AnnotatedTitle>Find Your Department</AnnotatedTitle>
        <p className="mt-4 text-center text-sm text-ink/70">
          Our program is organized by age. Find the department that&apos;s right
          for you!
        </p>

        {/* 2×2 图片网格 */}
        <div className="mt-12 grid grid-cols-2">
          {DEPARTMENTS.map((dept) => (
            <div key={dept.title} className="group relative aspect-[4/3] overflow-hidden">
              <Image
                src={dept.src}
                alt={dept.title}
                fill
                 className="object-cover transition-all duration-300 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-navy/50 transition-opacity duration-300 group-hover:bg-navy/20" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <p className="text-xs opacity-80">{dept.age}</p>
                <h3 className="font-display text-2xl">{dept.title}</h3>
                <p className="mt-2 text-xs leading-relaxed opacity-80 line-clamp-4">
                  {dept.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Watch our video */}
      <section className="bg-paper py-16">
  <AnnotatedTitle>Watch our video</AnnotatedTitle>
  <div className="mx-auto mt-8 max-w-3xl px-6">
    <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg cursor-pointer group">
      <Image
        src="/photos/Trackers.png"
        alt="Watch our video"
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* 半透明遮罩 */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
      {/* 播放图标 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <PlayCircle
          className="h-20 w-20 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
        />
      </div>
    </div>
  </div>
</section>


      

      {/* FAQ */}
      <section className="bg-paper py-16 px-6">
        <AnnotatedTitle>Frequently Asked Questions</AnnotatedTitle>
        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-navy/10 bg-white p-8 shadow-sm">
          <h2 className="font-display text-2xl text-navy">
            Frequently Asked Questions
          </h2>
          <hr className="my-4 border-navy/10" />
          <div className="space-y-6">
            {FAQ.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-ink">{item.q}</h3>
                <p className="mt-1 text-sm text-sun font-medium">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
        <CircledLink href="/contact" className="mt-12">
          Contact Us
        </CircledLink>
      </section>

     
    </main>
  );
}