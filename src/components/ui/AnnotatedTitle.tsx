type AnnotatedTitleProps = {
  children: React.ReactNode;
  /** 深色背景上用 white */
  tone?: "navy" | "white";
  className?: string;
};

export function AnnotatedTitle({
  children,
  tone = "navy",
  className = "",
}: AnnotatedTitleProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <h2
        className={`relative inline-block px-10 py-3 font-display text-2xl md:text-3xl ${
          tone === "white" ? "text-white" : "text-navy"
        }`}
      >
        <span className="relative z-10">{children}</span>
        <img
          src="/annotations/circle.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
      </h2>
    </div>
  );
}