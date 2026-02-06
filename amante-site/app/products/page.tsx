import Navbar from "../../components/Navbar";
import Link from "next/link";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-12 pt-32 pb-24">
        <h1 className="text-4xl font-semibold mb-16 text-[#B08D57]">
          Products
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="border border-gray-800 rounded-2xl overflow-hidden hover:border-[#B08D57] transition"
            >
              <img
                src={product.image}
                className="h-56 w-full object-cover"
                alt={product.name}
              />

              <div className="p-6">
                <p className="text-[#B08D57]">{product.name}</p>
                <p className="text-gray-400 text-sm">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
