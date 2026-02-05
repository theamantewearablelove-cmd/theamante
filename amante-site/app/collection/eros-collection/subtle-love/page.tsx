import Navbar from "../../../../components/Navbar";

export default function SubtleLovePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-12 pt-32 pb-24 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-[#B08D57] tracking-tight">
          Subtle Love
        </h1>

        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
          Not loud. Not dramatic.
          Subtle love lives in pauses, glances, and silence —
          the kind that stays.
        </p>

        <div className="mt-16 border-l-2 border-[#B08D57] pl-8 space-y-6">
          <p className="text-gray-300">
            This chapter is still being written.
          </p>
          <p className="text-gray-500 italic">
            The story and products will unfold here.
          </p>
        </div>
      </section>
    </main>
  );
}
