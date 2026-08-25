type ChalkDividerProps = {
  flip?: boolean;
  className?: string;
};

export function ChalkDivider({ flip = false, className = "" }: ChalkDividerProps) {
  return (
    <div className={`w-full leading-none ${flip ? "-scale-y-100" : ""} ${className}`}>
      <img
        src="/dividers/chalk.svg"
        alt=""
        aria-hidden="true"
        className="block w-full"
      />
    </div>
  );
}