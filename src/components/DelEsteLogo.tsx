export default function DelEsteLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 148 48"
      role="img"
      aria-label="Del Este Financial"
      className={`h-24 w-auto md:h-28 ${className}`}
    >
      <g transform="translate(1,6.5) scale(0.152)">
        <polygon points="61,0 175,0 152,88 96,88 58,230 0,230" fill="#E09B9B" />
        <polygon points="235,0 293,0 232,230 119,230 142,144 197,144" fill="#9AADC8" />
      </g>
      <path d="M52 9v30" stroke="#1A1A1A" strokeWidth="0.7" />
      <text
        x="62"
        y="27"
        fill="#1A1A1A"
        fontSize="20"
        fontWeight="400"
        letterSpacing="0.04em"
        style={{ fontFamily: "var(--font-sans), Outfit, sans-serif" }}
      >
        Del Este
      </text>
      <text
        x="62"
        y="39"
        fill="#1A1A1A"
        fontSize="6.5"
        fontWeight="200"
        letterSpacing="0.78em"
        style={{ fontFamily: "var(--font-sans), Outfit, sans-serif" }}
      >
        FINANCIAL
      </text>
    </svg>
  );
}
