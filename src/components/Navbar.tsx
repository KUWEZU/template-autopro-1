"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { client } from "@/data/client";

const NAV_ITEMS = [
  { label: "Start",                href: "/"                     },
  { label: "Aktuelles",            href: "/aktuelles"            },
  { label: "Werkstattleistungen",  href: "/werkstattleistungen"  },
  { label: "Meisterbetrieb",       href: "/meisterbetrieb"       },
  { label: "Kontakt",              href: "/kontakt"              },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const initials = client.name.slice(0, 2).toUpperCase();

  return (
    <header className="sticky top-0 left-0 right-0 z-40">
      {/* ── Top info bar ────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#012f66" }}>
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs text-white/75">
            {client.oeffnungszeiten.mo_fr && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 shrink-0" />
                <span className="hidden sm:inline">
                  Mo–Fr: {client.oeffnungszeiten.mo_fr}
                  {client.oeffnungszeiten.sa ? ` | Sa: ${client.oeffnungszeiten.sa}` : ""}
                </span>
                <span className="sm:hidden">{client.oeffnungszeiten.mo_fr}</span>
              </span>
            )}
            {client.adresse && (
              <span className="hidden md:flex items-center gap-1.5">
                <MapPin className="w-3 h-3 shrink-0" />
                {client.adresse}
              </span>
            )}
          </div>
          {client.telefon && (
            <a
              href={`tel:${client.telefon.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-xs font-bold text-white hover:text-yellow-300 transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              {client.telefon}
            </a>
          )}
        </div>
      </div>

      {/* ── Main nav bar ────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: "#024089" }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Zur Startseite">
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={44}
                  className="h-10 w-auto object-contain"
                  unoptimized
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center shrink-0 font-black text-xs"
                    style={{ backgroundColor: "#ffd100", color: "#024089" }}
                  >
                    {initials}
                  </div>
                  <div className="leading-tight">
                    <div className="text-white font-black text-sm tracking-wide uppercase">autoPRO</div>
                    <div className="text-white/60 text-[10px] truncate max-w-[160px]">{client.name}</div>
                  </div>
                </div>
              )}
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center" aria-label="Hauptnavigation">
              {NAV_ITEMS.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-1 text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors"
                    style={{
                      color: active ? "#ffd100" : "rgba(255,255,255,0.85)",
                      borderBottom: active ? "2px solid #ffd100" : "2px solid transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden p-2 text-white"
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile dropdown ─────────────────────────────────────────────── */}
      {open && (
        <nav
          className="lg:hidden border-t"
          style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "#012f66" }}
          aria-label="Mobile Navigation"
        >
          <div className="px-4 py-3 flex flex-col">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm font-bold uppercase tracking-wide rounded transition-colors"
                  style={{
                    color: active ? "#ffd100" : "rgba(255,255,255,0.85)",
                    backgroundColor: active ? "rgba(255,209,0,0.08)" : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
            {client.telefon && (
              <a
                href={`tel:${client.telefon.replace(/\s/g, "")}`}
                className="mt-3 flex items-center justify-center gap-2 px-4 py-2.5 font-bold text-sm uppercase rounded"
                style={{ backgroundColor: "#ffd100", color: "#024089" }}
              >
                <Phone className="w-4 h-4" />
                {client.telefon}
              </a>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
