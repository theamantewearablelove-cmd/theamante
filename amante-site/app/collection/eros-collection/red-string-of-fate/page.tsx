import Navbar from "../../../../components/Navbar";

export default function RedStringOfFatePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="px-12 pt-32 pb-24 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-[#B08D57] tracking-tight">
          The Red String of Fate
        </h1>

        <p className="mt-8 text-gray-400 text-lg leading-relaxed">
          An invisible thread connects those who are destined to meet.
          It may stretch, tangle, or drift through time —
          but it never breaks.
        </p>

        <div className="mt-16 border-l-2 border-[#B08D57] pl-8 space-y-6">
          <p className="text-gray-300">
            This page is a chapter in progress.
          </p>
          <p className="text-gray-500 italic">
            Products and visuals will be revealed soon.
          </p>
        </div>
      </section>
    </main>
  );
}
