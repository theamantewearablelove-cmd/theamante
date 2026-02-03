import Navbar from "../components/Navbar";
import Link from "next/link";

const collections = [
  {
    name: "Eros",
    tagline: "Passion. Desire. The first chapter of love.",
    slug: "eros",
  },
  {
    name: "Philautia",
    tagline: "Self-love, refined into wearable luxury.",
    slug: "philautia",
  },
  {
    name: "Gaia",
    tagline: "Earthy calm. Love grounded in nature.",
    slug: "gaia",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="px-12 pt-32 pb-24 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-[#B08D57]">
          LOVE IS THE ONLY LUXURY.
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Everyone is a lover, but not everyone can afford LOVE.
        </p>
      </section>

      {/* COLLECTION GRID */}
      <section className="px-12 pb-32">
        <h2 className="text-3xl font-semibold mb-12 tracking-wide">
          Chapters of Love
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {collections.map((col) => (
            <Link
              key={col.slug}
              href={`/collection/${col.slug}`}
              className="group border border-gray-800 rounded-2xl overflow-hidden hover:border-[#B08D57] transition-all duration-300"
            >
              {/* Banner Block */}
              <div className="h-64 bg-gradient-to-b from-gray-800 to-black"></div>

              {/* Text */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#B08D57]">
                  {col.name}
                </h3>

                <p className="mt-3 text-gray-400 text-sm">
                  {col.tagline}
                </p>

                <p className="mt-6 text-white text-sm tracking-wide group-hover:text-[#B08D57] transition">
                  Enter Collection →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
