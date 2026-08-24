import Link from "next/link";

export function CircledLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex justify-center ${className}`}>
      <Link
        href={href}
        className="relative inline-block px-9 py-2.5 text-sm text-ink transition-transform hover:scale-105"
      >
        <span className="relative z-10">{children}</span>
        <img
          src="/annotations/circle-thin.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
      </Link>
    </div>
  );
}