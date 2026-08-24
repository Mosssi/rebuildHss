import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy px-6 pb-10 pt-32 text-white md:pt-48">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        {/* 左：双 logo */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-xs font-bold">
              HSS
            </div>
            <span className="font-display text-sm leading-tight">
              HÄSSELBY STRANDS
              <br />
              SJÖSCOUTKÅR
            </span>
          </div>
          <div className="font-display text-2xl italic">Scouterna</div>
        </div>

        {/* 中：联系方式 + 社交 */}
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

        {/* 右：标语 */}
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