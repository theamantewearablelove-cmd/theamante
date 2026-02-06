import Navbar from "../../../components/Navbar";
import { products } from "../../data/products";

export default function ProductPage({ params }: any) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <main className="bg-black text-white min-h-screen p-20">
        <Navbar />
        Product not found.
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-8 md:px-20 py-32 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div className="rounded-3xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[420px] object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-semibold text-[#B08D57]">
            {product.name}
          </h1>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            {product.description}
          </p>

          <p className="mt-8 text-2xl font-bold">{product.price}</p>

          <button className="mt-10 px-12 py-4 border border-[#B08D57] text-[#B08D57] hover:bg-[#B08D57] hover:text-black transition">
            Pre-order
          </button>
        </div>
      </section>
    </main>
  );
}
