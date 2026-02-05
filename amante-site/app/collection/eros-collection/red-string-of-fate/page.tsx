import Navbar from "../../../../components/Navbar";

export default function RedStringOfFate() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* HERO WITH BANNER */}
      <section className="relative h-screen flex items-center justify-center">
        <img
          src="/pages/red-string.jpg"
          alt="The Red String of Fate"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-7xl font-bold text-[#B08D57] tracking-tight">
            The Red String of Fate
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl mx-auto text-lg">
            An invisible bond.  
            A promise written long before touch.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="px-8 md:px-20 py-32 max-w-4xl mx-auto space-y-24">

        <p className="text-2xl leading-relaxed text-gray-200">
          They say an invisible red thread connects those who are destined
          to meet — regardless of time, distance, or circumstance.
        </p>

        <blockquote className="border-l-2 border-[#B08D57] pl-8 text-3xl italic text-gray-300">
          “It may stretch.  
          It may tangle.  
          But it never breaks.”
        </blockquote>

        <p className="text-xl leading-relaxed text-gray-400">
          Love does not always arrive loudly.
          Sometimes it waits — patient, silent —
          until the moment you are ready to feel it.
        </p>
      </section>

      {/* PRODUCT REVEAL */}
      <section className="px-8 md:px-20 pb-40 max-w-5xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* PRODUCT IMAGE */}
          <div className="h-[500px] rounded-3xl overflow-hidden">
            <img
              src="/products/eros-hoodie.jpg"
              alt="Eros Hoodie"
              className="h-full w-full object-cover"
            />
          </div>

          {/* PRODUCT DETAILS */}
          <div>
            <h2 className="text-4xl font-semibold text-[#B08D57]">
              Eros Hoodie
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Crafted for those who carry their emotions quietly.
              Heavyweight comfort. Minimal design.
              A garment bound by meaning, not trends.
            </p>

            <p className="mt-8 text-2xl font-bold text-white">
              ₹3,499
            </p>

            <button className="mt-10 px-12 py-4 border border-[#B08D57] text-[#B08D57] hover:bg-[#B08D57] hover:text-black transition duration-300">
              Buy When Released
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
