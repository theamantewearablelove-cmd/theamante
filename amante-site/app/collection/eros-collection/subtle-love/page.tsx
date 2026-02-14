import Navbar from "../../../../components/Navbar";
import Link from "next/link";
import { products } from "../../../data/products";

export default function SubtleLove() {
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
          backgroundImage: "url('/backgrounds/subtle-love-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/65 -z-10" />

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <h1 className="text-6xl md:text-7xl font-bold text-[#B08D57]">
          Subtle Love
        </h1>
      </section>

      {/* STORY 1 */}
      <section className="px-8 md:px-20 py-32 max-w-4xl mx-auto space-y-10">
        <p className="text-2xl leading-relaxed text-gray-200">
          Not every love announces itself.

Some love lives in ordinary days,
in shared silence,
in presence that asks for nothing.

It does not arrive like destiny.
It grows quietly, until one day
you realize it has always been there.
        </p>

        <blockquote className="border-l-2 border-[#8B0000] pl-8 text-3xl italic text-gray-300">
         “Some love is not found.
It is slowly noticed.”
        </blockquote>
      </section>

      {/* PRODUCT 1 */}
      {fateTeeBlack && (
        <section className="px-8 md:px-20 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="h-[260px] md:h-[380px] rounded-3xl overflow-hidden">
              <img src={fateTeeBlack.image} className="h-full w-full object-cover" />
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-[#9FB4FF]">
                {fateTeeBlack.name}
              </h2>
              <p className="mt-6 text-gray-400 text-lg">
                {fateTeeBlack.description}
              </p>
              <p className="mt-8 text-2xl font-bold">{fateTeeBlack.price}</p>

              <Link
                href={`/product/${fateTeeBlack.slug}`}
                className="inline-block mt-10 px-12 py-4 border border-[#4C63D9] text-[#4C63D9] hover:bg-[#4C63D9] hover:text-white transition"
              >
                Pre-order
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* STORY 2 */}
      <section className="px-8 md:px-20 py-32 max-w-4xl mx-auto space-y-10">
        <p className="text-2xl leading-relaxed text-gray-200">
          You didn’t notice it immediately.
          Change never announces itself.
          It appeared in smaller things —
          in the way you waited,
          in the way you listened,
          in the way you began to care again.
        </p>

        <p className="text-xl text-gray-400">
          By the time you understand it,
it already feels permanent.
        </p>

        <blockquote className="border-l-2 border-[#8B0000] pl-8 text-3xl italic text-gray-300">
         “Some love is not spoken.
It is practiced.”
        </blockquote>
      </section>

      {/* PRODUCT 2 */}
      {fateTeeWhite && (
        <section className="px-8 md:px-20 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-semibold text-[#9FB4FF]">
                {fateTeeWhite.name}
              </h2>
              <p className="mt-6 text-gray-400 text-lg">
                {fateTeeWhite.description}
              </p>
              <p className="mt-8 text-2xl font-bold">{fateTeeWhite.price}</p>

              <Link
                href={`/product/${fateTeeWhite.slug}`}
               className="inline-block mt-10 px-12 py-4 border border-[#4C63D9] text-[#4C63D9] hover:bg-[#4C63D9] hover:text-white transition"
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

      {/* STORY 3 */}
      <section className="px-8 md:px-20 py-32 max-w-4xl mx-auto space-y-10">
        <p className="text-2xl leading-relaxed text-gray-200">
         There are moments when the world feels distant.
        Crowded rooms feel empty.
        Conversations lose their meaning.

        Yet somewhere in that silence,
        a single connection continues to exist — quietly, stubbornly.
        </p>

        <p className="text-xl text-gray-400">
         Like warmth that refuses to leave in winter.
        </p>

        <blockquote className="border-l-2 border-[#8B0000] pl-8 text-3xl italic text-gray-300">
         “Even in isolation, the thread remains.”
        </blockquote>
      </section>

      {/* PRODUCT 3 */}
      {fateHoodieBlack && (
        <section className="px-8 md:px-20 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="h-[260px] md:h-[380px] rounded-3xl overflow-hidden">
              <img src={fateHoodieBlack.image} className="h-full w-full object-cover" />
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-[#9FB4FF]">
                {fateHoodieBlack.name}
              </h2>
              <p className="mt-6 text-gray-400 text-lg">
                {fateHoodieBlack.description}
              </p>
              <p className="mt-8 text-2xl font-bold">{fateHoodieBlack.price}</p>

              <Link
                href={`/product/${fateHoodieBlack.slug}`}
                className="inline-block mt-10 px-12 py-4 border border-[#4C63D9] text-[#4C63D9] hover:bg-[#4C63D9] hover:text-white transition"
              >
                Pre-order
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* STORY 4 */}
      <section className="px-8 md:px-20 py-32 max-w-4xl mx-auto space-y-10">
        <p className="text-2xl leading-relaxed text-gray-200">
         Some bonds are not dramatic.
         They do not demand attention.

         They simply stay.

         Like winter clothing you never truly put away,
         because you know the cold always returns —
         and so does the warmth that protects you from it.
        </p>

        <p className="text-xl text-gray-400">
         The thread no longer pulls you forward.
         It rests beside you.
        </p>

        <blockquote className="border-l-2 border-[#8B0000] pl-8 text-3xl italic text-gray-300">
          "The connection is no longer temporary.”
        </blockquote>
      </section>

      {/* PRODUCT 4 */}
      {fateHoodieWhite && (
        <section className="px-8 md:px-20 py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-semibold text-[#9FB4FF]">
                {fateHoodieWhite.name}
              </h2>
              <p className="mt-6 text-gray-400 text-lg">
                {fateHoodieWhite.description}
              </p>
              <p className="mt-8 text-2xl font-bold">{fateHoodieWhite.price}</p>

              <Link
                href={`/product/${fateHoodieWhite.slug}`}
                className="inline-block mt-10 px-12 py-4 border border-[#4C63D9] text-[#4C63D9] hover:bg-[#4C63D9] hover:text-white transition"
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
