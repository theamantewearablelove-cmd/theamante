import Navbar from "../../../../components/Navbar";
import Link from "next/link";

export default function ErosChapter() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* INTRO */}
      <section className="px-12 pt-32 pb-24 max-w-3xl">
        <h1 className="text-6xl font-bold text-[#B08D57]">
          Eros
        </h1>

        <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          Eros is desire. Not the loud kind —  
          but the one that stays, waits, and burns quietly.
        </p>
      </section>

      {/* SCROLL CONTENT */}
      <section className="px-12 pb-32 space-y-32">

        {/* QUOTE 1 */}
        <blockquote className="max-w-2xl border-l-4 border-[#B08D57] pl-8 text-2xl italic text-gray-200">
          “Some souls are tied long before they ever meet.”
        </blockquote>

        {/* PAGE 1 */}
        <Link
          href="/collection/eros/red-string-of-fate"
          className="group block"
        >
          <div className="relative h-[420px] rounded-3xl overflow-hidden border border-gray-800 hover:border-[#B08D57] transition">
            <img
              src="/pages/red-string.jpg"
              alt="Red String of Fate"
              className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

            <div className="absolute bottom-10 left-10">
              <h2 className="text-4xl font-semibold text-[#B08D57]">
                The Red String of Fate
              </h2>
              <p className="mt-3 text-gray-300">
                Bound, even when unseen.
              </p>
            </div>
          </div>
        </Link>

        {/* QUOTE 2 */}
        <blockquote className="max-w-2xl border-l-4 border-[#B08D57] pl-8 text-2xl italic text-gray-200">
          “Not all love asks to be noticed.”
        </blockquote>

        {/* PAGE 2 */}
        <Link
          href="/collection/eros/subtle-love"
          className="group block"
        >
          <div className="relative h-[420px] rounded-3xl overflow-hidden border border-gray-800 hover:border-[#B08D57] transition">
            <img
              src="/pages/subtle-love.jpg"
              alt="Subtle Love"
              className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

            <div className="absolute bottom-10 left-10">
              <h2 className="text-4xl font-semibold text-[#B08D57]">
                Subtle Love
              </h2>
              <p className="mt-3 text-gray-300">
                Felt deeply. Shown quietly.
              </p>
            </div>
          </div>
        </Link>

      </section>
    </main>
  );
}
