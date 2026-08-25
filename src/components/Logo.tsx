import Link from "next/link";

type LogoProps = {
  href?: string;
  className?: string;
  onLight?: boolean;
};

export default function Logo({ href = "/", className = "", onLight = true }: LogoProps) {
  const ink = onLight ? "text-ink" : "text-white";
  const muted = onLight ? "text-ink/55" : "text-white/70";

  const mark = (
    <span className={`inline-flex items-baseline gap-2.5 ${ink} ${className}`}>
      <span
        aria-hidden
        className={`relative inline-flex h-7 w-7 shrink-0 items-center justify-center border ${
          onLight ? "border-ink/25" : "border-white/35"
        }`}
      >
        <span
          className={`absolute inset-[5px] border-t ${
            onLight ? "border-ink/40" : "border-white/50"
          }`}
        />
        <span
          className={`font-display text-[11px] font-semibold leading-none tracking-tight ${ink}`}
        >
          TF
        </span>
      </span>
      <span className="inline-flex flex-col leading-none">
        <span className="font-display text-[1.15rem] font-semibold tracking-[0.04em]">
          TRADEFRONT
        </span>
        <span
          className={`mt-0.5 font-sans text-[0.55rem] font-medium uppercase tracking-[0.42em] ${muted}`}
        >
          South
        </span>
      </span>
    </span>
  );

  if (!href) return mark;
  return (
    <Link href={href} className="group inline-flex focus-visible:outline-none">
      {mark}
    </Link>
  );
}
