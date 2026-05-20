import { client } from "@/data/client";
import Image from "next/image";

// ── SVG icon set — 12 generic automotive service icons ────────────────────────
function IconWrench() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#eef3fb" />
      <path d="M44 20a10 10 0 0 0-13.5 13.5L18 46a2.83 2.83 0 0 0 4 4l12.5-12.5A10 10 0 0 0 44 24" stroke="#024089" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="44" cy="22" r="2" fill="#ffd100" />
    </svg>
  );
}
function IconTuev() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#eef3fb" />
      <path d="M20 32l8 8 16-16" stroke="#024089" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 14l2 4h4l-3 3 1 4-4-2-4 2 1-4-3-3h4l2-4z" fill="#ffd100" stroke="#ffd100" strokeWidth="0.5" />
    </svg>
  );
}
function IconCar() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#eef3fb" />
      <rect x="13" y="28" width="38" height="14" rx="3" stroke="#024089" strokeWidth="2.5" />
      <path d="M18 28l6-8h16l6 8" stroke="#024089" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="21" cy="42" r="3.5" fill="#ffd100" stroke="#024089" strokeWidth="1.5" />
      <circle cx="43" cy="42" r="3.5" fill="#ffd100" stroke="#024089" strokeWidth="1.5" />
    </svg>
  );
}
function IconGlas() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#eef3fb" />
      <rect x="11" y="22" width="42" height="22" rx="4" stroke="#024089" strokeWidth="2.5" fill="rgba(2,64,137,0.05)" />
      <path d="M26 30l4 5 8-8" stroke="#024089" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M44 22l-6 6" stroke="#ffd100" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
function IconBremse() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#eef3fb" />
      <circle cx="32" cy="32" r="14" stroke="#024089" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="6" stroke="#ffd100" strokeWidth="2.5" />
      <path d="M32 18v4M32 42v4M18 32h4M42 32h4" stroke="#024089" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconReifen() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#eef3fb" />
      <circle cx="32" cy="32" r="15" stroke="#024089" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="5" fill="#ffd100" stroke="#024089" strokeWidth="1.5" />
      <path d="M32 17v4M32 43v4M17 32h4M43 32h4M22.5 22.5l2.8 2.8M38.7 38.7l2.8 2.8M22.5 41.5l2.8-2.8M38.7 25.3l2.8-2.8" stroke="#024089" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconElektrik() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#eef3fb" />
      <path d="M36 14l-8 18h10l-8 18" stroke="#024089" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="28" cy="32" r="2.5" fill="#ffd100" />
    </svg>
  );
}
function IconMotor() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#eef3fb" />
      <rect x="18" y="24" width="28" height="18" rx="3" stroke="#024089" strokeWidth="2.5" />
      <path d="M24 24v-5M32 24v-5M40 24v-5" stroke="#024089" strokeWidth="2" strokeLinecap="round" />
      <path d="M46 30h4M46 36h4M14 30h4M14 36h4" stroke="#024089" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="33" r="4" fill="#ffd100" stroke="#024089" strokeWidth="1.5" />
    </svg>
  );
}
function IconKlima() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#eef3fb" />
      <path d="M32 14v36M14 32h36" stroke="#024089" strokeWidth="2" strokeLinecap="round" />
      <path d="M22.5 22.5l19 19M41.5 22.5l-19 19" stroke="#024089" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="32" r="5" fill="#ffd100" stroke="#024089" strokeWidth="1.5" />
    </svg>
  );
}
function IconGetriebe() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#eef3fb" />
      <circle cx="22" cy="26" r="8" stroke="#024089" strokeWidth="2.5" />
      <circle cx="22" cy="26" r="3" fill="#ffd100" />
      <circle cx="42" cy="38" r="8" stroke="#024089" strokeWidth="2.5" />
      <circle cx="42" cy="38" r="3" fill="#ffd100" />
      <path d="M28 30l8 4" stroke="#024089" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconLack() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#eef3fb" />
      <path d="M28 44c0 2.2 1.8 4 4 4s4-1.8 4-4c0-4-4-14-4-14s-4 10-4 14z" fill="#ffd100" stroke="#024089" strokeWidth="1.5" />
      <path d="M32 30V16" stroke="#024089" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 20h12M24 24h16" stroke="#024089" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function IconUnfall() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="#024089" strokeWidth="2" fill="#eef3fb" />
      <path d="M20 36l4-8 5 4 5-10 5 6 5-4" stroke="#024089" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 20v4M28 22l2.8 2.8M36 22l-2.8 2.8" stroke="#ffd100" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const ICON_LIST = [
  IconWrench, IconTuev, IconCar, IconGlas,
  IconBremse, IconReifen, IconElektrik, IconMotor,
  IconKlima, IconGetriebe, IconLack, IconUnfall,
];

export function Werkstattleistungen() {
  const { leistungen } = client;

  return (
    <section
      id="werkstattleistungen"
      aria-label="Werkstattleistungen"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-0 border border-[#c9c8c8]">
          {leistungen.map((l, i) => {
            const Icon = ICON_LIST[i % ICON_LIST.length];
            const colIndex = i % 4;
            const isLastRow = i >= leistungen.length - (leistungen.length % 4 || 4);
            return (
              <div
                key={l.slug}
                className="flex flex-col items-center text-center px-5 py-8"
                style={{
                  borderRight: colIndex < 3 ? "1px solid #c9c8c8" : "none",
                  borderBottom: !isLastRow ? "1px solid #c9c8c8" : "none",
                  backgroundColor: "#ffffff",
                }}
              >
                {l.bild && !l.bild.startsWith("/images/") ? (
                  <div className="w-14 h-14 rounded-full overflow-hidden mb-4 shrink-0 border border-[#c9c8c8]">
                    <Image
                      src={l.bild}
                      alt={l.title}
                      width={56}
                      height={56}
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
                  className="font-bold uppercase text-xs mb-2 leading-snug"
                  style={{ color: "#024089", letterSpacing: "0.04em" }}
                >
                  {l.title}
                </h3>
                {l.description && (
                  <p className="text-xs leading-relaxed" style={{ color: "#4a4a49" }}>
                    {l.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
