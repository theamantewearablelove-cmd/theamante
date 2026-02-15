import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 md:px-12 py-6 bg-black text-white z-50">

      {/* LOGO → Redirects to Home */}
      <Link href="/" className="flex items-center">
        <img
          src="/logo/the-amante-1.jpeg"
          alt="The Amante"
          className="h-5 w-auto"
        />
      </Link>

      {/* NAV LINKS */}
      <div className="flex gap-8 text-sm text-gray-300">
        <Link
          href="/products"
          className="hover:text-[#B08D57] transition"
        >
          Products
        </Link>

        <Link
          href="/story"
          className="hover:text-[#B08D57] transition"
        >
          Story
        </Link>
      </div>
    </nav>
  );
}
