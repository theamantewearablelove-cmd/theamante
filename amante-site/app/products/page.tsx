import Navbar from "../../components/Navbar";
import Link from "next/link";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="px-4 md:px-20 pt-32 pb-24 max-w-[1400px] mx-auto">
        
        {/* Heading */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-[#B08D57]">
            The Collection
          </h1>
          <div className="w-24 h-[1px] bg-[#5C3A21] mt-6"></div>
        </div>

        {/* Products Grid */}
       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}>
              <div className="group rounded-2xl border border-[#1E1510] bg-[#0F0B08] overflow-hidden transition duration-500 hover:border-[#5C3A21] cursor-pointer">
                
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                </div>

                {/* Content */}
                <div className="px-6 py-6 bg-[#120E0B] space-y-3">
                  <h3 className="text-[18px] tracking-wide text-[#D6C2A8] group-hover:text-[#E7D4BA] transition">
                    {product.name}
                  </h3>

                  <p className="text-[15px] text-[#8E7A65]">
                    ₹{product.price}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </section>
    </main>
  );
}
