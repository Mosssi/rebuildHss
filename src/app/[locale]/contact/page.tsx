import { WaveDivider } from "@/components/layout/WaveDivider";
import { AnnotatedTitle } from "@/components/ui/AnnotatedTitle";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-navy px-6 pt-40 pb-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-5xl text-white">Contact</h1>
          <p className="mt-4 text-white/80">
            Get in touch with us.
          </p>
        </div>
      </section>

      <WaveDivider />

      <section className="bg-paper px-6 py-20">
        <AnnotatedTitle>Contact Us</AnnotatedTitle>
        <div className="mx-auto mt-12 max-w-2xl space-y-6">
          <div className="rounded-xl border border-navy/10 bg-white p-8 shadow-sm space-y-4">
            <div>
              <h3 className="font-display text-lg text-navy">Email</h3>
            <a  
                href="mailto:info@hss-scout.org"
                className="text-sm text-ink/70 hover:text-navy"
              >
                info@hss-scout.org
              </a>
            </div>
            <div>
              <h3 className="font-display text-lg text-navy">Address</h3>
              <p className="text-sm text-ink/70">
                Hässelby Strand, Stockholm, Sweden
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg text-navy">Social Media</h3>
              <div className="mt-2 flex gap-4 text-sm text-ink/70">
                <a href="https://facebook.com" className="hover:text-navy">Facebook</a>
                <a href="https://instagram.com" className="hover:text-navy">Instagram</a>
                <a href="https://youtube.com" className="hover:text-navy">YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}