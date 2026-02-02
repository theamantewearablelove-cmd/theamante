import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white px-12 pt-40">
        
        {/* HERO */}
        <section className="max-w-4xl">
          <h1 className="text-7xl font-bold leading-tight">
            Love is the only Luxury.
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-2xl">
            The Amante is not fashion for status.
            It is fashion for those who understand love as the rarest currency.
          </p>

          <button className="mt-12 px-12 py-4 border border-white hover:bg-white hover:text-black transition">
            Explore Collection
          </button>
        </section>

        {/* SECOND SECTION */}
        <section className="mt-40 border-t border-gray-700 pt-20">
          <h2 className="text-4xl font-semibold">
            Eros Collection
          </h2>

          <p className="mt-4 text-gray-400 max-w-xl">
            The first chapter of wearable love — raw, intimate, unapologetic.
          </p>
        </section>

      </main>
    </>
  );
}

