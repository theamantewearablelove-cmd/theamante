import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function ErosCollectionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="px-12 pt-32 pb-20 text-center">
        <h1 className="text-6xl font-bold text-[#B08D57] tracking-tight">
          Eros
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Passion. Desire. The first chapter of love.
        </p>
      </section>

      {/* PAGES OF THE CHAPTER */}
      <section className="px-12 pb-32 max-w-5xl mx-auto space-y-16">
        {/* Red String of Fate */}
        <Link
          href="/collection/eros-collection/red-string-of-fate"
          className="block border border-gray-800 rounded-2xl overflow-hidden
          hover:border-[#B08D57] hover:-translate-y-2 hover:shadow-2xl
          transition-all duration-500"
        >
          <div className="h-64 bg-gradient-to-br from-red-900/40 to-black"></div>
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-[#B08D57]">
              The Red String of Fate
            </h2>
            <p className="mt-3 text-gray-400">
              Some bonds are never broken — only stretched by time.
            </p>
          </div>
        </Link>

        {/* Subtle Love */}
        <Link
          href="/collection/eros-collection/subtle-love"
          className="block border border-gray-800 rounded-2xl overflow-hidden
          hover:border-[#B08D57] hover:-translate-y-2 hover:shadow-2xl
          transition-all duration-500"
        >
          <div className="h-64 bg-gradient-to-br from-gray-800 to-black"></div>
          <div className="p-8">
            <h2 className="text-3xl font-semibold text-[#B08D57]">
              Subtle Love
            </h2>
            <p className="mt-3 text-gray-400">
              Not loud. Not seen. But deeply felt.
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}
