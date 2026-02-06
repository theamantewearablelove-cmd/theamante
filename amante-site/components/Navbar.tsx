import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-6 bg-black text-white z-50">
      
      <Link href="/">
        <h2 className="text-sm tracking-[0.4em] font-semibold cursor-pointer">
          THE AMANTE
        </h2>
      </Link>

      <div className="flex gap-10 text-sm text-gray-300">
        <Link
         href="/products"
          className="hover:text-[#B08D57] transition"
        >
          Products
        </Link>

        <Link
          href="/about"
          className="hover:text-white transition"
        >
          Story
        </Link>
      </div>
    </nav>
  );
}
