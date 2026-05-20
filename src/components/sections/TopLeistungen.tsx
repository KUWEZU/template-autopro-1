import Link from "next/link";
import { client } from "@/data/client";
import Image from "next/image";

// ── Inline SVG icons matching autopro style ───────────────────────────────────
function IconWrench() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#f0f5ff" />
      <path d="M44 20a10 10 0 0 0-13.5 13.5L18 46a2.83 2.83 0 0 0 4 4l12.5-12.5A10 10 0 0 0 44 24"
        stroke="#024089" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="44" cy="22" r="2" fill="#ffd100" />
    </svg>
  );
}

function IconTuev() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#f0f5ff" />
      <path d="M20 32l8 8 16-16" stroke="#024089" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 14l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z" fill="#ffd100" stroke="#ffd100" strokeWidth="0.5" />
    </svg>
  );
}

function IconKarosserie() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#f0f5ff" />
      <rect x="14" y="28" width="36" height="14" rx="3" stroke="#024089" strokeWidth="2.5" />
      <path d="M18 28l6-8h16l6 8" stroke="#024089" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="20" cy="42" r="3" fill="#ffd100" stroke="#024089" strokeWidth="1.5" />
      <circle cx="44" cy="42" r="3" fill="#ffd100" stroke="#024089" strokeWidth="1.5" />
    </svg>
  );
}

function IconGlas() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#f0f5ff" />
      <rect x="12" y="22" width="40" height="22" rx="4" stroke="#024089" strokeWidth="2.5" fill="rgba(2,64,137,0.06)" />
      <path d="M26 29l4 5 8-8" stroke="#024089" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 22l-6 6" stroke="#ffd100" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const ICONS = [IconWrench, IconTuev, IconKarosserie, IconGlas];

// Default service cards shown when no Leistungen are configured in the DB
const FALLBACK_LEISTUNGEN = [
  { slug: "kfz-reparaturen",  title: "Kfz-Reparaturen",         bild: "", description: "Alle Fabrikate — schnell, sauber, zu fairen Preisen." },
  { slug: "hu-au",            title: "HU- und AU-Abnahme",       bild: "", description: "Haupt- und Abgasuntersuchungen direkt vor Ort." },
  { slug: "karosserie",       title: "Karosserieinstandsetzung", bild: "", description: "Von der kleinen Delle bis zur großen Unfallreparatur." },
  { slug: "autoglas",         title: "Autoglasreparaturen",      bild: "", description: "Steinschlag und Scheibentausch — schnell erledigt." },
] as const;

export function TopLeistungen() {
  const { leistungen } = client;
  const items = leistungen.length > 0 ? leistungen : FALLBACK_LEISTUNGEN;

  return (
    <section
      id="leistungen"
      aria-label="Unsere Leistungen"
      style={{ backgroundColor: "#f5f5f5", borderTop: "1px solid #c9c8c8", borderBottom: "1px solid #c9c8c8" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <h2
          className="text-center font-bold uppercase mb-10"
          style={{ color: "#024089", letterSpacing: "0.08em", fontSize: "1.1rem" }}
        >
          Unsere Top-Leistungen für Sie
        </h2>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {items.slice(0, 4).map((l, i) => {
            const Icon = ICONS[i] ?? IconWrench;
            return (
              <div
                key={l.slug}
                className="flex flex-col items-center text-center px-6 py-8"
                style={{
                  borderLeft: i > 0 ? "1px solid #c9c8c8" : "none",
                }}
              >
                {/* Icon or image */}
                {l.bild && !l.bild.startsWith("/images/") ? (
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 shrink-0">
                    <Image
                      src={l.bild}
                      alt={l.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                ) : (
                  <div className="mb-4">
                    <Icon />
                  </div>
                )}

                <h3
                  className="font-bold uppercase text-sm mb-3 leading-tight"
                  style={{ color: "#024089", letterSpacing: "0.04em" }}
                >
                  {l.title}
                </h3>

                {l.description && (
                  <p className="text-sm leading-relaxed" style={{ color: "#4a4a49" }}>
                    {l.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href="/kontakt"
            className="inline-block px-6 py-3 font-bold text-sm uppercase tracking-wide transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#ffd100", color: "#333333" }}
          >
            Termin vereinbaren
          </Link>
        </div>
      </div>
    </section>
  );
}
