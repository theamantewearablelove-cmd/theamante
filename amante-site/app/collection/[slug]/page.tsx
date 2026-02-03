import Navbar from "../../../components/Navbar";

const collectionProducts: Record<string, any[]> = {
  eros: [
    { name: "Eros Hoodie", price: "₹3,499" },
    { name: "Lover’s Tee", price: "₹1,999" },
  ],
  philautia: [
    { name: "Philautia Sweatshirt", price: "₹2,999" },
    { name: "Self Love Tee", price: "₹1,799" },
  ],
  gaia: [
    { name: "Gaia Earth Hoodie", price: "₹3,799" },
    { name: "Nature Calm Tee", price: "₹1,899" },
  ],
};

export default function CollectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const products = collectionProducts[params.slug] || [];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white px-12 pt-32">
        <h1 className="text-6xl font-bold capitalize">
          {params.slug} Collection
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          A chapter of love, expressed through fabric.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((item, i) => (
            <div
              key={i}
              className="border border-gray-700 rounded-2xl overflow-hidden hover:border-white hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-56 bg-gradient-to-b from-gray-800 to-black"></div>

              <div className="p-8">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="mt-6 text-white font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
