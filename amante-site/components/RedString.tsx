"use client";

export default function RedString() {
  return (
    <svg
      className="fixed left-1/2 top-0 h-full w-[240px] -translate-x-1/2 z-0 pointer-events-none animate-string-drift"
      viewBox="0 0 240 2000"
      preserveAspectRatio="none"
    >
      <path
        d="
          M120 0
          C150 200, 90 400, 120 600
          C160 850, 80 1050, 120 1250
          C150 1450, 100 1650, 120 1850
        "
        stroke="#7a1a1a"
        strokeWidth="2"
        fill="none"
        opacity="0.35"
      />
    </svg>
  );
}
