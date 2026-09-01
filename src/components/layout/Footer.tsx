import Link from "next/link";
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-navy px-6 pb-10 pt-32 text-white md:pt-48">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        {/* left */}
        <div className="space-y-6">
           <Image
          src="/logos/logo.svg"
          alt="Hässelby Strands Sjöscoutkår"
          width={200}
          height={50}
          />
  <Image
    src="/logos/scouterna.svg"
    alt="Scouterna"
    width={160}
    height={40}
  />
  </div>     
        <div className="space-y-2">
          <h3 className="font-display text-lg">Hässelby Strands Sjöscoutkår</h3>
          <p className="text-sm">
            Email:{" "}
            <a href="mailto:info@hss-scout.org" className="hover:underline">
              info@hss-scout.org
            </a>
          </p>
          <Link href="/contact" className="block text-sm hover:underline">
            Contact Us
          </Link>

          <h3 className="pt-4 font-display text-lg">Follow Us on Social Media</h3>
          <p className="text-sm">Stay Up to Date</p>
          <div className="flex gap-3 pt-2">
            <SocialIcon href="https://facebook.com" label="Facebook" />
            <SocialIcon href="https://instagram.com" label="Instagram" />
            <SocialIcon href="https://youtube.com" label="YouTube" />
          </div>
        </div>


        <div className="space-y-3">
          <h3 className="font-display text-lg">Adventure &amp; Friendship</h3>
          <p className="text-sm leading-relaxed">
            Together we can do more! Scouterna gives children and young people
            from all walks of life the chance to experience adventure together
            and grow as individuals.
          </p>
          <Link href="/join" className="block font-display text-lg hover:underline">
            Join Now
          </Link>
        </div>

      </div>

      <p className="mt-12 text-center text-sm">
        © Scouterna {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}

function SocialIcon({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-xs transition-colors hover:bg-white/30"
    >
      {label[0]}
    </a>
  );
}