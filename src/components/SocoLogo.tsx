export default function SocoLogo({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="SOCO Acquisitions"
      className={`flex select-none flex-col items-center text-center antialiased ${className}`}
    >
      <span className="font-sans text-[2.75rem] font-extralight leading-none tracking-[0.34em] text-ink md:text-[3.35rem]">
        SOCO
      </span>
      <span className="mt-3 mb-3 h-px w-40 bg-[#4EA3F0] md:mt-3.5 md:mb-3.5 md:h-[2px] md:w-52" />
      <span className="font-sans text-[0.7rem] font-light leading-none tracking-[0.48em] text-ink md:text-[0.8rem]">
        ACQUISITIONS
      </span>
    </div>
  );
}
