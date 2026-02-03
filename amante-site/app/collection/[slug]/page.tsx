import Navbar from "../../../components/Navbar";
import Link from "next/link";

const collectionProducts: Record<string, any[]> = {
  eros: [
    { name: "Eros Hoodie", price: "₹3,499", slug: "eros-hoodie" },
    { name: "Lover’s Tee", price: "₹1,999", slug: "eros-tee" },
  ],

  philautia: [
    { name: "Philautia Sweatshirt", price: "₹2,999", slug: "philautia-sweat" },
    { name: "Self Love Tee", price: "₹1,799", slug: "philautia-tee" },
  ],

  gaia: [
    { name: "Gaia Earth Hoodie", price: "₹3,799", slug: "gaia-hoodie" },
    { name: "Nature Calm Tee", price: "₹1,899", slug: "gaia-tee" },
  ],
};

export default function CollectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const products = collectionProducts[params.slug] || [];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* TITLE */}
      <section className="px-12 pt-28 pb-16">
        <h1 className="text-5xl font-bold text-[#B08D57] capitalize">
          {params.slug} Collection
        </h1>

        <p className="mt-4 text-gray-400 max-w-xl">
          Each piece is part of a chapter. Choose what you will wear.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section className="px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/product/${p.slug}`}
              className="border border-gray-800 rounded-2xl overflow-hidden hover:border-[#B08D57] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-56 bg-gradient-to-b from-gray-800 to-black"></div>

              <div className="p-8">
                <h3 className="text-xl font-semibold">{p.name}</h3>

                <p className="mt-4 text-gray-400 text-sm">
                  Luxury is love, stitched into form.
                </p>

                <p className="mt-6 text-white font-bold">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
