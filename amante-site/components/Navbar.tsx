import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-6 bg-black text-white z-50">
      
      {/* LOGO */}
      <Link href="/">
        <img
          src="/logo/the-amante-1.jpeg"
          alt="The Amante"
          className="h-3 md:h-4"
        />
      </Link>

      {/* NAV LINKS */}
      <div className="flex gap-10 text-sm text-gray-300">
        <Link href="/products" className="hover:text-[#B08D57] transition">
          Products
        </Link>

        <Link href="/story" className="hover:text-white transition">
          Story
        </Link>
      </div>
    </nav>
  );
}
