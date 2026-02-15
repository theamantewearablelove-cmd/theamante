import Navbar from "../../components/Navbar";

export default function StoryPage() {
  return (
    <main className="relative min-h-[200vh] text-white">
      <Navbar />
{/* BACKGROUND WRAPPER */}
<div className="absolute inset-0 -z-10">
  <div
    className="h-full w-full"
    style={{
      backgroundImage: "url('/banners/story-bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
  <div className="absolute inset-0 bg-black/20" />
</div>


      {/* INTRO */}
      <section className="pt-32 pb-24 px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#3A2416]">
            A Book of Love
          </h1>

          <p className="text-[#3E2F23] text-lg leading-relaxed whitespace-pre-line">
Love has never belonged to one definition.
It does not wait for permission. It does not arrive announced.

It exists everywhere — in moments, in silence,
in distance, in memory, in loss, in warmth.

We recognize it only when it touches us.
And sometimes, even then, we fail to name it.

There are loves that stay.
There are loves that leave.
There are loves that never speak aloud,
yet change the course of a life.

Some begin with a glance.
Some begin with a wound.
Some are built slowly — habit by habit — until one day they feel inevitable.
          </p>

          <p className="text-[#3E2F23] leading-relaxed">
            This is not a story about love.
            This is a collection of the ways love appears.
          </p>
        </div>
      </section>

      {/* CONTINUATION */}
      <section className="px-8 pb-32">
  <div className="max-w-2xl text-center mx-auto space-y-8">
    <p className="text-[#3E2F23] text-lg leading-relaxed whitespace-pre-line">

This is not a story about one kind of love.
This is not a tale of perfection.

This is a collection of encounters —
of two hands that met at the right time,
of two souls that met at the wrong one,
of the quiet devotion no one applauds,
of the kind of love that hurts, but refuses to disappear.

Every chapter carries a different face.
Every page carries a different weight.

Some will feel familiar.
Some will feel uncomfortable.
All of them are real.

Because love is not rare.
What is rare is recognizing it while it is still in your hands.

Welcome to the many ways it appears.
        </p>
        </div>
      </section>

      {/* CONTENTS */}
      <section className="px-6 md:px-12 pt-20 pb-40 max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl text-[#3A2416] mb-8">
          Contents
        </h2>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition hover:bg-white/10">
          <p className="text-sm text-[#3E2F23]">Chapter I</p>
          <h3 className="text-[#3A2416] mt-1">Eros</h3>
          <p className="text-[#3E2F23] mt-2">
            Passion. Desire. The beginning of connection.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition hover:bg-white/10">
          <p className="text-sm text-[#3E2F23]">Chapter II</p>
          <h3 className="text-[#3A2416] mt-1">Philautia</h3>
          <p className="text-[#3E2F23] mt-2">
            The quiet struggle of loving oneself.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 opacity-60">
          <p className="text-[#3A2416] text-[#3E2F23]0">More chapters</p>
          <h3 className="text-[#3E2F23] mt-1">Coming Soon</h3>
        </div>
      </section>

    </main>
  );
}
