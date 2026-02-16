"use client";

import { useState, useRef } from "react";
import Navbar from "../../components/Navbar";

/* ================================
   📚 CHAPTER CONTENT
   Paste your full stories below
================================ */

const chapters = [
  {
    slug: "introduction",
    label: "Introduction",
    title: "A Book of Love",
    content: `Love has never belonged to one definition.
It does not wait for permission. It does not arrive announced.It exists everywhere — in moments, in silence,in distance, in memory, in loss, in warmth.
We recognize it only when it touches us.And sometimes, even then, we fail to name it.
There are loves that stay.There are loves that leave.There are loves that never speak aloud,yet change the course of a life.
Some begin with a glance.Some begin with a wound.Some are built slowly — habit by habit — until one day they feel inevitable.

This is not a story about one kind of love.
This is not a tale of perfection.This is a collection of encounters —of two hands that met at the right time,of two souls that met at the wrong one,of the quiet devotion no one applauds, of the kind of love that hurts, but refuses to disappear.
Every chapter carries a different face.Every page carries a different weight.

Some will feel familiar.
Some will feel uncomfortable.
All of them are real.

Because love is not rare.What is rare is recognizing it while it is still in your hands.

Welcome to the many ways it appears.`
  },
  {
    slug: "eros",
    label: "Chapter I",
    title: "Eros",
    content: `The night had no intention of changing anything.

The sky was scattered with indifferent stars. The moon rested in its usual place, pale and distant, casting a quiet glow over rooftops and passing streets. Nothing in the world announced that something irreversible was about to begin.
Inside the room, light spilled softly across walls. Conversations overlapped. Glasses touched. Laughter rose and dissolved.
It was an ordinary evening.
Until a pause stretched slightly longer than it should have.
Across the room, two glances collided and retreated almost instantly — as if caught doing something forbidden.

The world did not notice.
But something had shifted.
Not dramatically. Not loudly.

Just enough.

A faint warmth stirred beneath the ribs — unexpected, uninvited. The kind that feels like memory, even when no memory exists. Breath slowed. Fingers tightened slightly around nothing in particular.
The mind tried to continue as usual. Continue speaking. Continue listening.
But awareness had already awakened.
Across the same space, a similar hesitation. A similar stillness. A subtle disruption in rhythm.
Two separate lives, moving independently — yet suddenly aware of the same invisible disturbance in the air.

It is never obvious at first.
There is no thunder. No sign.

Only a red thread, somewhere beyond sight, drawing gently between two unaware hands.
Not tight enough to demand attention.
Just enough to resist being ignored.

Eyes meet again.
This time, they do not retreat immediately.
There is no smile yet. No gesture. No step forward.
Only recognition — fragile and electric.
The room continues its noise. People speak, unaware that between two quiet pulses, something ancient has begun.
Heat gathers slowly in the chest. Not overwhelming. Not reckless. A contained fire — crimson and steady — waiting for oxygen.
Distance feels heavier than before.

Every accidental movement becomes significant.
A turn of the head.
A shift in posture.
A step closer without admitting intention.

Time behaves strangely in moments like these. It expands and contracts without warning. Minutes feel suspended, yet everything moves too quickly.
A path opens between them.

Not created.
Discovered.

The first step is subtle. A crossing of space disguised as coincidence. A pause near the same window. A shared observation about something irrelevant — the music, the night air, the way the moon seems brighter than usual.
Words are exchanged.
Ordinary words.
But beneath them, something trembles.
Silence follows — not empty, not uncomfortable. Full. Charged.
The kind of silence that feels like standing at the edge of water before deciding whether to step in.
A shoulder brushes lightly against another.
It could have been accidental.

Neither moves away.
The air narrows.
Breath becomes noticeable. Not just one — but two. Adjusting. Aligning. Almost synchronizing.

No confession escapes. No bold move is made.
And yet, something irreversible has already occurred.
The red thread tightens — gently, but with intention.
Risk enters quietly.

To lean closer is to admit vulnerability.
To remain is to accept uncertainty.
To walk away would be easier.

But neither walks away.
Instead, they stand in that fragile middle space — where tension feels safer than distance, where possibility feels more alive than certainty ever could.
The fire within the chest grows warmer. Not destructive. Not wild. Just present. Just undeniable.
Outside, the moon continues its silent watch.
Inside, the world has reduced itself to two figures near a window.
Time does not ask permission before altering lives. It simply tilts them slightly off balance.
A question hovers unspoken:
What happens now?
Nothing dramatic answers.

A small smile.
A glance held a second longer.
A breath released almost at the same time.

The thread hums.
Not pulling violently — but steady, persistent.
A step closer.
Not touching fully. Not claiming.
Just proximity.

And in that nearness, something fragile turns real.
The tension softens — not disappearing, but transforming.
Uncertainty remains, but it no longer feels threatening. It feels necessary.
Like the space between two notes before they become harmony.
Outside, stars remain indifferent.
Inside, two separate fires begin to burn in rhythm.
The world will not remember this evening. No one else will mark it as significant.
But somewhere within two quiet chests, something has shifted permanently.
The thread will not loosen back to what it was.

It cannot.
Because once awareness awakens — once the flame recognizes another flame — indifference becomes impossible.

Nothing has been promised.
Nothing has been claimed.
Yet something has begun.
And beginnings, even silent ones, carry more power than endings ever will.



And long after the night returned to ordinary, the quiet warmth beneath their ribs refused to forget.`
  },
  {
    slug: "philautia",
    label: "Chapter II",
    title: "Philautia",
    content: `PASTE YOUR FULL PHILAUTIA STORY HERE.`
  }
];

/* ================================= */

export default function StoryPage() {
  const [activeSlug, setActiveSlug] = useState("introduction");
  const [animating, setAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeChapter =
    chapters.find((c) => c.slug === activeSlug) || chapters[0];

  const paragraphs = activeChapter.content.split("\n\n");

  const switchChapter = (slug: string) => {
    if (slug === activeSlug) return;

    setAnimating(true);
    document.body.style.overflow = "hidden";

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      setActiveSlug(slug);

      setTimeout(() => {
        setAnimating(false);
        document.body.style.overflow = "auto";
      }, 700);
    }, 500);
  };

  return (
   <main
  className="relative min-h-screen text-white bg-cover bg-center"
  style={{
    backgroundImage: "url('/banners/story-bg.png')",
  }}
>
      <Navbar />
{/* BACKGROUND */}
<div className="absolute inset-0 -z-10">
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/backgrounds/story-bg.png')",
    }}
  />
  <div className="absolute inset-0 bg-black/20" />
</div>


      {/* CONTENT */}
      <section className="pt-32 pb-24 px-8">
        <div
          ref={containerRef}
          className={`max-w-2xl mx-auto text-center space-y-10 transition-opacity duration-700 ${
            animating ? "opacity-0" : "opacity-100"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#3A2416]">
            {activeChapter.title}
          </h1>

          {paragraphs.map((para, index) => (
            <p
              key={index}
              className={`text-[#3E2F23] text-lg leading-relaxed whitespace-pre-line transition-all duration-700 ${
                animating
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* CHAPTER NAVIGATION */}
      <section className="px-6 md:px-12 pb-40 max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl text-[#3A2416] mb-8">Contents</h2>

        {chapters.map((chapter) =>
          chapter.slug === activeSlug ? null : (
            <div
              key={chapter.slug}
              onClick={() => switchChapter(chapter.slug)}
              className="cursor-pointer bg-[#3A2416]/30 backdrop-blur-sm border border-[#3A2416]/40 rounded-2xl p-6 transition hover:bg-[#3A2416]/40"
            >
              <p className="text-sm text-[#3E2F23]">{chapter.label}</p>
              <h3 className="text-[#3A2416] mt-1">{chapter.title}</h3>
            </div>
          )
        )}

        {/* Coming Soon */}
        <div className="bg-[#3A2416]/20 border border-[#3A2416]/30 rounded-2xl p-6 opacity-60">
          <p className="text-sm text-[#3E2F23]">More Chapters</p>
          <h3 className="text-[#3A2416] mt-1">Coming Soon</h3>
        </div>
      </section>
    </main>
  );
}