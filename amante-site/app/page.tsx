import Navbar from "../components/Navbar";
import Link from "next/link";

const collections = [
  {
    name: "Eros",
    tagline: "Passion. Desire. The first chapter of love.",
    slug: "eros",
    banner: "/banners/eros-banner.jpg",
    active: true,
  },
  {
    name: "Philautia",
    tagline: "Self-love, refined into wearable luxury.",
    slug: "philautia",
    banner: "/banners/philautia-banner.jpg",
    active: false,
  },
  {
    name: "Gaia",
    tagline: "Earthy calm. Love grounded in nature.",
    slug: "gaia",
    banner: "/banners/gaia-banner.jpg",
    active: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
      <Navbar />

       {/* BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/backgrounds/home-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="fixed inset-0 bg-black/85 -z-10" />


      {/* HERO */}
      <section className="px-12 pt-32 pb-24 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-[#B08D57]">
          LOVE IS THE ONLY LUXURY...
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
          {collections.map((col) =>
            col.active ? (
              <Link
                key={col.slug}
                href={`/collection/eros-collection`}
                className="group border border-gray-800 rounded-2xl overflow-hidden 
                hover:border-[#B08D57] hover:-translate-y-3 hover:shadow-2xl 
                transition-all duration-500"
              >
                <img
                  src={col.banner}
                  alt={col.name}
                  className="h-64 w-full object-cover opacity-80 
                  group-hover:opacity-100 group-hover:scale-105 
                  transition duration-700"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-[#B08D57]">
                    {col.name}
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm">
                    {col.tagline}
                  </p>

                  <p className="mt-6 text-white text-sm tracking-wide group-hover:text-[#B08D57] transition">
                    Enter Chapter →
                  </p>
                </div>
              </Link>
            ) : (
              <div
                key={col.slug}
                className="border border-gray-800 rounded-2xl overflow-hidden 
                opacity-60 cursor-not-allowed"
              >
                <img
                  src={col.banner}
                  alt={col.name}
                  className="h-64 w-full object-cover opacity-60"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-500">
                    {col.name}
                  </h3>

                  <p className="mt-3 text-gray-500 text-sm">
                    {col.tagline}
                  </p>

                  <p className="mt-6 text-gray-500 text-sm tracking-wide">
                    Coming Soon
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}
