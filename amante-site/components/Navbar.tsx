export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-6 bg-black text-white z-50">
      
      <h2 className="text-sm tracking-[0.4em] font-semibold">
        THE AMANTE
      </h2>

      <div className="flex gap-10 text-sm text-gray-300">
        <a href="/collection" className="hover:text-white transition">
          Collection
        </a>

        <a href="/about" className="hover:text-white transition">
          Story
        </a>
      </div>
    </nav>
  );
}
