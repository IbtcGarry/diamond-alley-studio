import { createFileRoute } from "@tanstack/react-router";

import { MediaSlot } from "@/components/media-slot";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Toosh Tatoos" },
      {
        name: "description",
        content:
          "Healed and fresh tattoo work from Toosh Tatoos: blackwork, screentone shading, and saturated color pieces.",
      },
      { property: "og:title", content: "Gallery — Toosh Tatoos" },
      {
        property: "og:description",
        content: "Blackwork, screentone shading and saturated color tattoo pieces.",
      },
    ],
  }),
  component: Gallery,
});

const pieces = [
  { src: work1, title: "Golden Arrow", meta: "Forearm · 5 hours" },
  { src: work2, title: "Crazy Diamond", meta: "Full back · 3 sessions" },
  { src: work3, title: "Kira Roses", meta: "Hand · 4 hours" },
  { src: work2, title: "Bad Company", meta: "Ribs · blackwork" },
  { src: work3, title: "Sheer Heart", meta: "Sternum · color" },
  { src: work1, title: "Stray Cat", meta: "Calf · linework" },
];

function Gallery() {
  return (
    <main className="halftone bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h1 className="manga-outline text-[clamp(2.75rem,8vw,6rem)] text-primary">
          GALLERY
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Six recent pieces. Everything is drawn in-house — no flash sheets, no
          copies of someone else's work.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((p, i) => (
            <figure key={`${p.title}-${i}`} className="panel">
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                width={912}
                height={1104}
                className="h-72 w-full border-b-4 border-ink object-cover"
              />
              <figcaption className="p-4">
                <span className="block font-display text-xl text-secondary">
                  {p.title}
                </span>
                <span className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
                  {p.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
