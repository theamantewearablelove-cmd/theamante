import Navbar from "../../../components/Navbar";

export default function CollectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const title = params.slug.toUpperCase();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="h-[70vh] flex flex-col justify-center px-16 border-b border-gray-800">
        <h1 className="text-6xl font-bold text-[#B08D57]">{title}</h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          A chapter of love, written in fabric.
        </p>
      </section>

      {/* STORY + TIMELINE */}
      <section className="px-16 py-32 space-y-32">

        {/* ROOT STORY */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold">The Root</h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            {title} is not a collection of clothing.
            It is a collection of emotions —
            longing, devotion, desire.
          </p>
        </div>

        {/* TIMELINE REVEAL */}
        <div className="flex gap-12 items-start">

          {/* GOLD LINE */}
          <div className="w-1 bg-[#B08D57] rounded-full min-h-[900px]"></div>

          {/* CONTENT */}
          <div className="flex-1 space-y-24">

            {/* QUOTE SEGMENT */}
            <div className="border border-[#B08D57] p-10 rounded-2xl">
              <p className="text-2xl italic text-gray-200 leading-relaxed">
                “Desire is not loud. It waits.”
              </p>
              <p className="mt-4 text-gray-500">
                — {title} Chapter I
              </p>
            </div>

            {/* PRODUCT REVEAL 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="h-[420px] rounded-3xl bg-gradient-to-b from-gray-800 to-black"></div>

              <div>
                <h3 className="text-3xl font-semibold text-[#B08D57]">
                  Eros Hoodie
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  Heavyweight comfort, built for lovers who carry silence.
                </p>

                <p className="mt-6 text-white font-bold text-xl">
                  ₹3,499
                </p>

                <button className="mt-10 px-12 py-4 border border-white hover:bg-white hover:text-black transition">
                  Buy Now (Soon)
                </button>
              </div>
            </div>

            {/* QUOTE SEGMENT 2 */}
            <div className="border border-[#B08D57] p-10 rounded-2xl">
              <p className="text-2xl italic text-gray-200 leading-relaxed">
                “Some love is worn, not spoken.”
              </p>
              <p className="mt-4 text-gray-500">
                — {title} Chapter II
              </p>
            </div>

            {/* PRODUCT REVEAL 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="h-[420px] rounded-3xl bg-gradient-to-b from-gray-800 to-black"></div>

              <div>
                <h3 className="text-3xl font-semibold text-[#B08D57]">
                  Lover’s Tee
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  Minimal design. Maximum meaning.
                </p>

                <p className="mt-6 text-white font-bold text-xl">
                  ₹1,999
                </p>

                <button className="mt-10 px-12 py-4 border border-white hover:bg-white hover:text-black transition">
                  Buy Now (Soon)
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
