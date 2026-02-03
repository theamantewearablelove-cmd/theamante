export default function LuxuryBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Gold geometric grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(176,141,87,0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(176,141,87,0.35) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* Soft red glow accent */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(180,40,40,0.6), transparent)",
        }}
      />

      {/* Soft gold shimmer glow */}
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{
          background: "radial-gradient(circle, rgba(176,141,87,0.7), transparent)",
        }}
      />
    </div>
  );
}
