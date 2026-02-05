import Navbar from "../../../../components/Navbar";

export default function RedStringOfFate() {
  return (
    <main className="text-white relative">
      <Navbar />

      {/* FIXED BACKGROUND LAYER */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/backgrounds/red-string-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/85 -z-10" />

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-[#B08D57]">
            The Red String of Fate
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl mx-auto text-lg">
            An invisible bond.  
            A promise written long before touch.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="px-8 md:px-20 py-32 max-w-4xl mx-auto space-y-24">
        <p className="text-2xl leading-relaxed text-gray-200">
          They say an invisible red thread connects those who are destined
          to meet — regardless of time, distance, or circumstance.
        </p>

        <blockquote className="border-l-2 border-[#8B0000] pl-8 text-3xl italic text-gray-300">
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

      {/* PRODUCT 1 — IMAGE LEFT */}
      <section className="px-8 md:px-20 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="h-[520px] rounded-3xl overflow-hidden">
            <img
              src="/products/eros-hoodie.jpg"
              alt="Eros Hoodie"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-semibold text-[#7A0B0B]">
              Fate Tee(Black)
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Crafted for those who carry their emotions quietly.
              Heavyweight comfort. Minimal design.
              A garment bound by meaning, not trends.
            </p>

            <p className="mt-8 text-2xl font-bold">₹3,499</p>

            <button className="mt-10 px-12 py-4 border border-[#7A0B0B] text-[#7A0B0B] hover:bg-[#7A0B0B] hover:text-black transition">
              Buy When Released
            </button>
          </div>
        </div>
      </section>

      {/* POETIC BREAK */}
      <section className="py-40 px-6 text-center max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
          “Some connections do not arrive to stay.  
          They arrive to change you.”
        </p>
      </section>

      {/* PRODUCT 2 — IMAGE RIGHT */}
      <section className="px-8 md:px-20 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-semibold text-[#7A0B0B]">
              Fate Tee(White)
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Designed for moments that don’t announce themselves.
              Soft structure. Quiet presence.
              Love, worn lightly.
            </p>

            <p className="mt-8 text-2xl font-bold">₹1,999</p>

            <button className="mt-10 px-12 py-4 border border[#7A0B0B] text-[#7A0B0B] hover:bg-[#7A0B0B] hover:text-black transition">
              Buy When Released
            </button>
          </div>

          <div className="order-1 md:order-2 h-[520px] rounded-3xl overflow-hidden">
            <img
              src="/products/eros-tee.jpg"
              alt="Eros Essential Tee"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </section>
      {/* POETIC BREAK */}
      <section className="py-40 px-6 text-center max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
          “Some connections do not arrive to stay.  
          They arrive to change you.”
        </p>
      </section>
        {/* PRODUCT 3 — IMAGE LEFT */}
      <section className="px-8 md:px-20 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="h-[520px] rounded-3xl overflow-hidden">
            <img
              src="/products/eros-hoodie.jpg"
              alt="Eros Hoodie"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-semibold text-[#7A0B0B]">
              Fate Hoodie(Black)
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Crafted for those who carry their emotions quietly.
              Heavyweight comfort. Minimal design.
              A garment bound by meaning, not trends.
            </p>

            <p className="mt-8 text-2xl font-bold">₹3,499</p>

            <button className="mt-10 px-12 py-4 border border-[#7A0B0B] text-[#7A0B0B] hover:bg-[#7A0B0B] hover:text-black transition">
              Buy When Released
            </button>
          </div>
        </div>
      </section>
       {/* POETIC BREAK */}
      <section className="py-40 px-6 text-center max-w-4xl mx-auto">
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300">
          “Some connections do not arrive to stay.  
          They arrive to change you.”
        </p>
      </section>

      {/* PRODUCT 4 — IMAGE RIGHT */}
      <section className="px-8 md:px-20 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-semibold text-[#7A0B0B]">
              Fate Hoodie(White)
            </h2>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              Designed for moments that don’t announce themselves.
              Soft structure. Quiet presence.
              Love, worn lightly.
            </p>

            <p className="mt-8 text-2xl font-bold">₹1,999</p>

            <button className="mt-10 px-12 py-4 border border-[#7A0B0B] text-[#7A0B0B] hover:bg-[#7A0B0B] hover:text-black transition">
              Buy When Released
            </button>
          </div>

          <div className="order-1 md:order-2 h-[520px] rounded-3xl overflow-hidden">
            <img
              src="/products/eros-tee.jpg"
              alt="Eros Essential Tee"
              className="h-full w-full object-cover"
            />
          </div>

        </div>
      </section>
    </main>
  );
}
