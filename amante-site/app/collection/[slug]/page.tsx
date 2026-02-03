import Navbar from "../../../components/Navbar";

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const productName = params.slug.replace(/-/g, " ");

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">

        {/* HERO IMAGE SECTION */}
        <section className="h-screen flex flex-col justify-center px-16">
          <h1 className="text-7xl font-bold capitalize leading-tight">
            {productName}
          </h1>

          <p className="mt-6 text-gray-400 text-xl max-w-2xl">
            A chapter of love, stitched into fabric.
          </p>
        </section>

        {/* STORY SECTION */}
        <section className="min-h-screen px-16 py-32 border-t border-gray-800">
          <h2 className="text-4xl font-semibold">
            The Story
          </h2>

          <p className="mt-10 text-gray-400 text-lg leading-relaxed max-w-3xl">
            This piece was not designed to impress strangers.
            It was created for the ones who feel deeply —
            quietly, invisibly.
          </p>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-3xl">
            Inspired by devotion, longing, and fate,
            it carries meaning beyond fashion.
            Love is not spoken here —
            it is worn.
          </p>
        </section>

        {/* VISUAL BREAK */}
        <section className="h-[80vh] bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
          <p className="text-3xl tracking-widest text-gray-500">
            WEARABLE LOVE
          </p>
        </section>

        {/* CTA SECTION */}
        <section className="min-h-screen px-16 py-32 border-t border-gray-800 flex flex-col justify-center">
          <h2 className="text-5xl font-bold">
            Own the Chapter.
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-2xl">
            Not everyone can afford love.
            But some will wear it.
          </p>

          <button className="mt-12 px-14 py-4 border border-white hover:bg-white hover:text-black transition text-lg">
            Buy Now (Coming Soon)
          </button>
        </section>

      </main>
    </>
  );
}
