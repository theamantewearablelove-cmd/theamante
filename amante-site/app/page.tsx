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
                  {/* PRODUCT PREVIEW GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Card 1 */}
          <div className="border border-gray-700 overflow-hidden rounded-2xl hover:border-white transition">

  <div className="h-56 bg-gradient-to-b from-gray-800 to-black"></div>

  <div className="p-8">
    <h3 className="text-xl font-semibold">Eros Hoodie</h3>
    <p className="mt-3 text-gray-400 text-sm">
      Heavyweight comfort, built for lovers who carry silence.
    </p>
    <p className="mt-6 text-white font-bold">₹3,499</p>
  </div>

</div>

          {/* Card 2 */}
          <div className="border border-gray-700 p-8 hover:border-white transition">
            <h3 className="text-xl font-semibold">
              Lover’s Tee
            </h3>
            <p className="mt-3 text-gray-400 text-sm">
              Minimal design. Maximum meaning.
            </p>
            <p className="mt-6 text-white font-bold">
              ₹1,999
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-700 p-8 hover:border-white transition">
            <h3 className="text-xl font-semibold">
              Amante Jacket
            </h3>
            <p className="mt-3 text-gray-400 text-sm">
              A statement piece for those who don’t chase status.
            </p>
            <p className="mt-6 text-white font-bold">
              ₹5,999
            </p>
          </div>

        </div>
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

