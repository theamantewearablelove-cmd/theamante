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

It does not wait for permission. It does not arrive announced.

It exists everywhere — in moments, in silence, in distance, in memory, in loss, in warmth.

We recognize it only when it touches us.

And sometimes, even then, we fail to name it.

This is not a story about love.

This is a collection of the ways love appears.`
  },
  {
    slug: "eros",
    label: "Chapter I",
    title: "Eros",
    content: `The night had no intention of changing anything.

The sky was scattered with indifferent stars.

Nothing in the world announced that something irreversible was about to begin.

But something had shifted.

Not loudly.

Just enough.`
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
    <main className="relative min-h-[200vh] text-white">
      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/banners/story-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
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