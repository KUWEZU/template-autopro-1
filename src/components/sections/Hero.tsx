"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { client } from "@/data/client";

function TuevAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-0 right-0 z-10 w-52 shadow-xl">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-xs font-black uppercase tracking-wider"
        style={{ backgroundColor: "#024089", color: "#ffd100" }}
        aria-expanded={open}
        aria-controls="tuev-panel"
      >
        <span>TÜV · HU · AU</span>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && (
        <div
          id="tuev-panel"
          className="p-4 text-xs"
          style={{ backgroundColor: "rgba(255,255,255,0.97)", color: "#4a4a49" }}
        >
          <p className="font-black uppercase text-[11px] mb-2" style={{ color: "#024089", letterSpacing: "0.06em" }}>
            Hauptuntersuchung & AU
          </p>
          <p className="mb-3 leading-relaxed">
            HU- und AU-Abnahmen direkt vor Ort — nach § 29 StVZO für alle Fahrzeuge.
            Keine Umwege, keine langen Wartezeiten.
          </p>
          <Link
            href="/kontakt"
            className="block w-full text-center px-3 py-2 text-xs font-bold uppercase tracking-wide transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#ffd100", color: "#024089" }}
          >
            Termin anfragen →
          </Link>
        </div>
      )}
    </div>
  );
}

export function Hero() {
  const { bild } = client.hero;

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ height: "420px" }}
      aria-label="Startbereich"
    >
      {bild && !bild.endsWith(".svg") ? (
        <Image
          src={bild}
          alt={`${client.name} — ${client.branche} in ${client.ort}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          unoptimized
        />
      ) : bild ? (
        /* SVG placeholder or fallback */
        <div className="absolute inset-0" style={{ backgroundColor: "#c9c8c8" }} aria-hidden="true" />
      ) : (
        <div className="absolute inset-0" style={{ backgroundColor: "#c9c8c8" }} aria-hidden="true" />
      )}

      {/* TÜV accordion — top right corner */}
      {client.tuev_termine && <TuevAccordion />}
    </section>
  );
}
