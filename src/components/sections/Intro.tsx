import { client } from "@/data/client";
import { ShieldCheck } from "lucide-react";

export function Intro() {
  const { name, branche, hero, tuev_termine, oeffnungszeiten } = client;

  return (
    <section
      id="ueber-uns"
      className="py-16"
      style={{ backgroundColor: "#ffffff" }}
      aria-label="Über uns"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-2xl sm:text-3xl font-black italic mb-6"
            style={{ color: "#4a4a49" }}
          >
            {hero.ueberschrift}
          </h1>

          <h2
            className="text-lg font-bold uppercase mb-4"
            style={{ color: "#024089", fontSize: "1rem", letterSpacing: "0.08em" }}
          >
            Unsere Werkstatt
          </h2>

          <p className="text-base leading-relaxed mb-4" style={{ color: "#4a4a49" }}>
            {hero.untertext}
          </p>

          <p className="text-base leading-relaxed" style={{ color: "#4a4a49" }}>
            Wir erledigen sämtliche Kfz-Reparaturen und Servicearbeiten mit höchster Sorgfalt
            {(branche as string) === "Kfz-Werkstatt" || (branche as string) === "Autowerkstatt"
              ? " und sind auf Karosserieinstandsetzung und Autoglasreparaturen spezialisiert."
              : "."}
          </p>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div
              className="flex items-center gap-2 px-4 py-2 rounded border font-semibold text-sm"
              style={{ borderColor: "#024089", color: "#024089" }}
            >
              <ShieldCheck className="w-4 h-4" />
              Meisterbetrieb
            </div>
            {tuev_termine && (
              <div
                className="flex items-center gap-2 px-4 py-2 rounded border font-semibold text-sm"
                style={{ borderColor: "#024089", color: "#024089" }}
              >
                <ShieldCheck className="w-4 h-4" />
                TÜV-Abnahme vor Ort
              </div>
            )}
            {oeffnungszeiten.mo_fr && (
              <div
                className="flex items-center gap-2 px-4 py-2 rounded border font-semibold text-sm"
                style={{ borderColor: "#c9c8c8", color: "#4a4a49" }}
              >
                Mo–Fr: {oeffnungszeiten.mo_fr}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
