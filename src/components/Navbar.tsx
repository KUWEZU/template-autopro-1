"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { client } from "@/data/client";

const NAV_ITEMS = [
  { label: "Start",              anchor: ""           },
  { label: "Werkstattleistungen", anchor: "leistungen" },
  { label: "Kontakt",            anchor: "kontakt"    },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(anchor: string) {
    setOpen(false);
    if (anchor === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  const initials = client.name.slice(0, 2).toUpperCase();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-200"
      style={{
        backgroundColor: "#024089",
        boxShadow: scrolled ? "0 2px 12px rgba(2,64,137,0.35)" : "none",
      }}
    >
      {/* Top bar: contact info */}
      <div
        className="hidden md:block border-b"
        style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "#012f66" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-1.5 flex items-center justify-between text-xs text-white/80">
          <div className="flex items-center gap-5">
            {client.oeffnungszeiten.mo_fr && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                Mo–Fr: {client.oeffnungszeiten.mo_fr}
                {client.oeffnungszeiten.sa && ` | Sa: ${client.oeffnungszeiten.sa}`}
              </span>
            )}
            {client.adresse && (
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                {client.adresse}
              </span>
            )}
          </div>
          {client.telefon && (
            <a
              href={`tel:${client.telefon.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-yellow-300 transition-colors"
            >
              <Phone className="w-3 h-3" />
              {client.telefon}
            </a>
          )}
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("")}
            className="flex items-center gap-3 shrink-0"
            aria-label="Zur Startseite"
          >
            {client.logo ? (
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={44}
                className="h-10 w-auto object-contain"
                unoptimized
              />
            ) : (
              <div className="flex items-center gap-2">
                <div
                  className="w-9 h-9 rounded flex items-center justify-center shrink-0 font-black text-sm"
                  style={{ backgroundColor: "#ffd100", color: "#024089" }}
                >
                  {initials}
                </div>
                <div className="leading-tight">
                  <div className="text-white font-black text-sm tracking-wide uppercase">autoPRO</div>
                  <div className="text-white/70 text-[11px] font-medium truncate max-w-[180px]">{client.name}</div>
                </div>
              </div>
            )}
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.anchor}
                onClick={() => scrollTo(item.anchor)}
                className="px-4 py-2 text-sm font-semibold text-white/90 hover:text-white rounded transition-colors uppercase tracking-wide"
                style={{ letterSpacing: "0.06em" }}
              >
                {item.label}
              </button>
            ))}
            {client.telefon && (
              <a
                href={`tel:${client.telefon.replace(/\s/g, "")}`}
                className="ml-3 flex items-center gap-2 px-4 py-2 rounded font-bold text-sm uppercase tracking-wide transition-colors"
                style={{ backgroundColor: "#ffd100", color: "#024089" }}
              >
                <Phone className="w-4 h-4" />
                Anrufen
              </a>
            )}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 text-white"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden border-t"
          style={{ borderColor: "rgba(255,255,255,0.15)", backgroundColor: "#012f66" }}
          aria-label="Mobile Navigation"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.anchor}
                onClick={() => scrollTo(item.anchor)}
                className="text-left px-3 py-3 text-white font-semibold text-sm rounded hover:bg-white/10 transition-colors uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
            {client.telefon && (
              <a
                href={`tel:${client.telefon.replace(/\s/g, "")}`}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded font-bold text-sm"
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
