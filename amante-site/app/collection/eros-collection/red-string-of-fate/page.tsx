import Navbar from "../../../../components/Navbar";
import Link from "next/link";
import { products } from "../../../data/products";

export default function RedStringOfFate() {
  const fateTeeBlack = products.find(p => p.slug === "fate-tee-black");
  const fateTeeWhite = products.find(p => p.slug === "fate-tee-white");
  const fateHoodieBlack = products.find(p => p.slug === "fate-hoodie-black");
  const fateHoodieWhite = products.find(p => p.slug === "fate-hoodie-white");

  return (
    <main className="text-white relative">
      <Navbar />

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/backgrounds/red-string-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="fixed inset-0 bg-black/85 -z-10" />

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-6xl md:text-7xl font-bold text-[#B08D57]">
            The Red String of Fate
          </h1>
        </div>
      </section>

      {/* STORY */}
      <section className="px-8 md:px-20 py-32 max-w-4xl mx-auto space-y-24">
        <p className="text-2xl leading-relaxed text-gray-200">
          They say an invisible red thread connects those who are destined
          to meet — regardless of time, distance, or circumstance.
        </p>

        <blockquote className="border-l-2 border-[#8B0000] pl-8 text-3xl italic text-gray-300">
          “It may stretch. It may tangle. But it never breaks.”
        </blockquote>
      </section>

      {/* PRODUCT 1 — Fate Tee Black */}
      {fateTeeBlack && (
        <section className="px-8 md:px-20 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="h-[260px] md:h-[380px] rounded-3xl overflow-hidden">
              <img src={fateTeeBlack.image} className="h-full w-full object-cover" />
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-[#7A0B0B]">
                {fateTeeBlack.name}
              </h2>
              <p className="mt-6 text-gray-400 text-lg">
                {fateTeeBlack.description}
              </p>
              <p className="mt-8 text-2xl font-bold">{fateTeeBlack.price}</p>

              <Link
                href={`/product/${fateTeeBlack.slug}`}
                className="inline-block mt-10 px-12 py-4 border border-[#7A0B0B] text-[#7A0B0B] hover:bg-[#7A0B0B] hover:text-white transition"
              >
                Pre-order
              </Link>
            </div>
          </div>
        </section>
      )}

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


      {/* PRODUCT 2 — Fate Tee White */}
      {fateTeeWhite && (
        <section className="px-8 md:px-20 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-semibold text-[#7A0B0B]">
                {fateTeeWhite.name}
              </h2>
              <p className="mt-6 text-gray-400 text-lg">
                {fateTeeWhite.description}
              </p>
              <p className="mt-8 text-2xl font-bold">{fateTeeWhite.price}</p>

              <Link
                href={`/product/${fateTeeWhite.slug}`}
                className="inline-block mt-10 px-12 py-4 border border-[#7A0B0B] text-[#7A0B0B] hover:bg-[#7A0B0B] hover:text-white transition"
              >
                Pre-order
              </Link>
            </div>

         <div className="order-1 md:order-2 h-[260px] md:h-[380px] rounded-3xl overflow-hidden">
              <img src={fateTeeWhite.image} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>
      )}
         
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

      {/* PRODUCT 3 — Fate Hoodie Black */}
      {fateHoodieBlack && (
        <section className="px-8 md:px-20 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="h-[260px] md:h-[380px] rounded-3xl overflow-hidden">
              <img src={fateHoodieBlack.image} className="h-full w-full object-cover" />
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-[#7A0B0B]">
                {fateHoodieBlack.name}
              </h2>
              <p className="mt-6 text-gray-400 text-lg">
                {fateHoodieBlack.description}
              </p>
              <p className="mt-8 text-2xl font-bold">{fateHoodieBlack.price}</p>

              <Link
                href={`/product/${fateHoodieBlack.slug}`}
                className="inline-block mt-10 px-12 py-4 border border-[#7A0B0B] text-[#7A0B0B] hover:bg-[#7A0B0B] hover:text-white transition"
              >
                Pre-order
              </Link>
            </div>
          </div>
        </section>
      )}


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


      {/* PRODUCT 4 — Fate Hoodie White */}
      {fateHoodieWhite && (
        <section className="px-8 md:px-20 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-semibold text-[#7A0B0B]">
                {fateHoodieWhite.name}
              </h2>
              <p className="mt-6 text-gray-400 text-lg">
                {fateHoodieWhite.description}
              </p>
              <p className="mt-8 text-2xl font-bold">{fateHoodieWhite.price}</p>

              <Link
                href={`/product/${fateHoodieWhite.slug}`}
                className="inline-block mt-10 px-12 py-4 border border-[#7A0B0B] text-[#7A0B0B] hover:bg-[#7A0B0B] hover:text-white transition"
              >
                Pre-order
              </Link>
            </div>

            <div className="order-1 md:order-2 h-[260px] md:h-[380px] rounded-3xl overflow-hidden">
              <img src={fateHoodieWhite.image} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
