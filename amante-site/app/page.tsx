import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white px-12 pt-32">

        {/* HERO SECTION */}
        <section className="max-w-3xl">
          <h1
            className="text-7xl font-bold leading-tight"
            style={{ color: "#B08D57" }}
          >
            LOVE IS THE ONLY LUXURY.
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Everyone is a lover, but not everyone can afford LOVE.
          </p>

          <a
            href="/collection/eros"
            className="inline-block mt-10 px-10 py-4 border border-white hover:bg-white hover:text-black transition"
          >
            Enter Collection
          </a>
        </section>

        {/* COLLECTION GRID */}
        <section className="mt-24">
          <h2 className="text-3xl font-semibold mb-10">
            Chapters of Love
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* EROS */}
            <a href="/collection/eros">
              <div className="border border-gray-700 overflow-hidden rounded-2xl hover:border-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="h-56 bg-gradient-to-b from-gray-800 to-black"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold">Eros</h3>
                  <p className="mt-3 text-gray-400 text-sm">
                    Passion. Desire. The first chapter of love.
                  </p>
                </div>
              </div>
            </a>

            {/* PHILAUTIA */}
            <a href="/collection/philautia">
              <div className="border border-gray-700 overflow-hidden rounded-2xl hover:border-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="h-56 bg-gradient-to-b from-gray-800 to-black"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold">Philautia</h3>
                  <p className="mt-3 text-gray-400 text-sm">
                    Self-love. Quiet power. Inner luxury.
                  </p>
                </div>
              </div>
            </a>

            {/* GAIA */}
            <a href="/collection/gaia">
              <div className="border border-gray-700 overflow-hidden rounded-2xl hover:border-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="h-56 bg-gradient-to-b from-gray-800 to-black"></div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold">Gaia</h3>
                  <p className="mt-3 text-gray-400 text-sm">
                    Earth. Calm. Love that feels eternal.
                  </p>
                </div>
              </div>
            </a>

          </div>
        </section>
         {/* STORYLINE SECTION */}
<section className="mt-32 border-t border-gray-800 pt-20 max-w-4xl">

  <h2 className="text-4xl font-semibold tracking-wide">
    The Amante is not clothing.
  </h2>

  <p className="mt-6 text-gray-400 text-lg leading-relaxed">
    Luxury was never meant to be loud.  
    It was never meant to be price.  
    It was meant to be love —
    worn quietly, carried deeply.
  </p>

  <p className="mt-6 text-gray-400 text-lg leading-relaxed">
    Every collection is a chapter.
    Every piece is a feeling.
    This is wearable love for those who
    do not perform — they remain.
  </p>

  <a
    href="/story"
    className="inline-block mt-10 px-10 py-4 border border-white hover:bg-white hover:text-black transition"
  >
    Read Our Story
  </a>
</section>

      </main>
    </>
  );
}
