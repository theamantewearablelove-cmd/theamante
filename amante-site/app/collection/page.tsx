import Navbar from "../../components/Navbar";

const products = [
  {
    name: "Eros Hoodie",
    price: "₹3,499",
    desc: "Heavyweight comfort for silent lovers.",
  },
  {
    name: "Lover’s Tee",
    price: "₹1,999",
    desc: "Minimal design. Maximum meaning.",
  },
  {
    name: "Amante Jacket",
    price: "₹5,999",
    desc: "A statement piece beyond status.",
  },
  {
    name: "Eros Sweatshirt",
    price: "₹2,999",
    desc: "Soft, bold, intimate energy.",
  },
  {
    name: "Love Script Tee",
    price: "₹1,799",
    desc: "Wear love like a signature.",
  },
  {
    name: "Midnight Lovers Hoodie",
    price: "₹3,799",
    desc: "Dark romance in fabric form.",
  },
];

export default function Collection() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white px-12 pt-32">
        <h1 className="text-5xl font-bold tracking-wide">
          Eros Collection
        </h1>

        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          The first chapter of wearable love — raw, intimate, unapologetic.
        </p>

        {/* PRODUCT GRID */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((item, i) => (
            <div
              key={i}
              className="border border-gray-700 overflow-hidden rounded-2xl hover:border-white hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-56 bg-gradient-to-b from-gray-800 to-black"></div>

              <div className="p-8">
                <h3 className="text-xl font-semibold">{item.name}</h3>

                <p className="mt-3 text-gray-400 text-sm">{item.desc}</p>

                <p className="mt-6 text-white font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
