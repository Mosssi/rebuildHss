import { WaveDivider } from "@/components/layout/WaveDivider";
import { AnnotatedTitle } from "@/components/ui/AnnotatedTitle";

export default function JoinPage() {
  return (
    <main>
      <section className="bg-navy px-6 pt-40 pb-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-5xl text-white">Join Us</h1>
          <p className="mt-4 text-white/80">
            Our program is organized by age group. Each department has its own
            activities and challenges.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className="bg-paper px-6 py-20">
        <AnnotatedTitle>Sign Up</AnnotatedTitle>
        <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-navy/10 bg-white p-8 shadow-sm">
          <h2 className="font-display text-2xl text-navy">
            Intresseanmälan/registrering för Hässelby Strands Sjöscoutkår
          </h2>
          <hr className="my-6 border-navy/10" />
          <p className="text-sm text-ink/60">
            Registration form will be embedded here via Scoutnet iframe.
          </p>
          {/* Scoutnet iframe 占位 */}
          <div className="mt-6 flex h-48 items-center justify-center rounded-lg bg-navy/5 text-sm text-ink/40">
            Scoutnet Registration Form
          </div>
        </div>
      </section>
    </main>
  );
}