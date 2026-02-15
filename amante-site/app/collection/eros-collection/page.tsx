import Navbar from "../../../components/Navbar";
import Link from "next/link";

export default function ErosCollectionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="px-12 pt-32 pb-20 text-center">
        <h1 className="text-6xl font-bold text-[#B08D57] tracking-tight">
          EROS
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
  className="block group rounded-2xl overflow-hidden relative
  border border-transparent
  hover:border-[#C6A75E]
  hover:-translate-y-2
  hover:shadow-2xl
  transition-all duration-500"
>
  {/* FULL IMAGE */}
  <div
    className="h-72 md:h-96 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
    style={{
      backgroundImage: "url('/backgrounds/red-string-bg.png')",
    }}
  />

  {/* TEXT OVERLAY */}
  <div className="absolute bottom-0 left-0 w-full bg-gray-900/65 p-8">
    <h2 className="text-3xl font-semibold text-[#B08D57]">
      The Red String of Fate
    </h2>
    <p className="mt-3 text-gray-300">
      Some bonds are never broken — only stretched by time.
    </p>
  </div>
</Link>


        {/* Subtle Love */}
        <Link
   href="/collection/eros-collection/subtle-love"
  className="block group rounded-2xl overflow-hidden relative
  border border-transparent
  hover:border-[#C6A75E]
  hover:-translate-y-2
  hover:shadow-2xl
  transition-all duration-500"
>
  {/* FULL IMAGE */}
  <div
    className="h-72 md:h-96 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
    style={{
      backgroundImage: "url('/backgrounds/subtle-love-bg.png')",
    }}
  />

  {/* TEXT OVERLAY */}
  <div className="absolute bottom-0 left-0 w-full bg-gray-900/65 p-8">
    <h2 className="text-3xl font-semibold text-[#B08D57]">
      Subtle Love
    </h2>
    <p className="mt-3 text-gray-300">
      Not loud, Not seen, But deeply Felt.
    </p>
  </div>
</Link>

      </section>
    </main>
  );
}

