import Navbar from "../../components/Navbar";

export default function StoryPage() {
  return (
    <main className="text-white relative">
      <Navbar />

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/backgrounds/story-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="fixed inset-0 bg-black/85 -z-10" />

      {/* INTRO — BOOK OPENING */}
      <section className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-2xl text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#B08D57]">
            A Book of Love
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            Love has never belonged to one definition.
            It exists everywhere — in moments, in silence,
            in distance, in memory, in loss, in warmth.
          </p>

          <p className="text-gray-400 leading-relaxed">
            We recognize it only when it touches us.
            And sometimes, even then, we fail to name it.
          </p>

          <p className="text-gray-400 leading-relaxed">
            This is not a story about love.
            This is a collection of the ways love appears.
          </p>
        </div>
      </section>

      {/* CONTENTS PAGE */}
      <section className="px-6 md:px-12 pb-40 max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl text-[#B08D57] mb-8">
          Contents
        </h2>

        {/* Chapter Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 
                        rounded-2xl p-6 transition hover:bg-white/10">
          <p className="text-sm text-gray-400">Chapter I</p>
          <h3 className="text-xl mt-1">Eros</h3>
          <p className="text-gray-400 mt-2">
            Passion. Desire. The beginning of connection.
          </p>
        </div>

        {/* Chapter Card */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 
                        rounded-2xl p-6 transition hover:bg-white/10">
          <p className="text-sm text-gray-400">Chapter II</p>
          <h3 className="text-xl mt-1">Philautia</h3>
          <p className="text-gray-400 mt-2">
            The quiet struggle of loving oneself.
          </p>
        </div>

        {/* Placeholder future chapters */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 
                        rounded-2xl p-6 opacity-60">
          <p className="text-sm text-gray-400">More chapters</p>
          <h3 className="text-xl mt-1">Coming Soon</h3>
        </div>
      </section>
    </main>
  );
}
