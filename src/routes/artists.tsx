import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists — Morioh Ink Tattoo" },
      {
        name: "description",
        content:
          "Meet the three resident tattoo artists at Morioh Ink and the styles each of them specializes in.",
      },
      { property: "og:title", content: "Artists — Morioh Ink Tattoo" },
      {
        property: "og:description",
        content: "Three resident artists, three very different specialties.",
      },
    ],
  }),
  component: Artists,
});

const artists = [
  {
    name: "JOSUKE H.",
    role: "Resident · repair & cover-ups",
    blurb:
      "Takes on the pieces other shops call unfixable. Heavy outline rework and saturated color healing.",
    accent: "bg-accent text-accent-foreground",
  },
  {
    name: "OKUYASU N.",
    role: "Resident · bold blackwork",
    blurb:
      "Big shapes, flat black, zero hesitation. Best for ribs, backs and anything that needs presence from across the room.",
    accent: "bg-primary text-primary-foreground",
  },
  {
    name: "ROHAN K.",
    role: "Guest · fine line & lettering",
    blurb:
      "Reads your reference obsessively before touching skin. Delicate linework, script and small ornamental panels.",
    accent: "bg-secondary text-secondary-foreground",
  },
];

function Artists() {
  return (
    <main className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h1 className="manga-outline text-[clamp(2.75rem,8vw,6rem)] text-primary">
          ARTISTS
        </h1>
        <div className="mt-14 space-y-8">
          {artists.map((a) => (
            <article
              key={a.name}
              className="panel grid gap-6 p-7 md:grid-cols-[1fr_2fr] md:items-center"
            >
              <div>
                <h2 className="text-4xl text-foreground">{a.name}</h2>
                <span
                  className={`mt-3 inline-block border-4 border-ink px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${a.accent}`}
                >
                  {a.role}
                </span>
              </div>
              <p className="text-lg text-muted-foreground">{a.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
