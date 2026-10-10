export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="#0C1B33" />
      <path
        d="M13.2 10.2 8.6 16l4.6 5.8"
        stroke="#8EEBFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18.8 10.2 23.4 16l-4.6 5.8"
        stroke="#7AA2FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="leading-tight">
        <span
          className={`block text-[15px] font-semibold tracking-tight ${
            tone === "light" ? "text-white" : "text-navy-900"
          }`}
        >
          Custom Function
        </span>
        <span
          className={`block text-[11px] font-medium uppercase tracking-[0.16em] ${
            tone === "light" ? "text-cyan-300" : "text-muted"
          }`}
        >
          Training
        </span>
      </span>
    </span>
  );
}
