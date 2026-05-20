import { client } from "@/data/client";
import Image from "next/image";
import { ShieldCheck, Award, Users } from "lucide-react";

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Meisterbetrieb" },
  { icon: Award,       label: "TÜV-Partner" },
  { icon: Users,       label: "Familienbetrieb" },
];

export function Meisterbetrieb() {
  const ueberUns = (client as { ueberUns?: { bild?: string; ueberschrift?: string; text1?: string; text2?: string; tags?: string[] } }).ueberUns;
  const { name, branche, ort } = client;

  const photos: string[] = [];
  if (ueberUns?.bild) photos.push(ueberUns.bild);

  const text1 = ueberUns?.text1 || `${name} ist Ihr zuverlässiger Kfz-Meisterbetrieb in ${ort}. Mit jahrelanger Erfahrung und modernster Ausrüstung sorgen wir dafür, dass Ihr Fahrzeug stets in bestem Zustand bleibt.`;
  const text2 = ueberUns?.text2 || `Als anerkannter Meisterbetrieb stehen wir für höchste Qualität in ${branche}-Arbeiten — von der einfachen Inspektion bis zur komplexen Reparatur. Kommen Sie vorbei und überzeugen Sie sich selbst.`;

  return (
    <section
      id="meisterbetrieb"
      aria-label="Meisterbetrieb"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <div>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#4a4a49" }}>
              {text1}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#4a4a49" }}>
              {text2}
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {(ueberUns?.tags ?? TRUST_BADGES.map((b) => b.label)).map((tag) => {
                const badge = TRUST_BADGES.find((b) => b.label === tag) ?? TRUST_BADGES[0];
                const Icon = badge.icon;
                return (
                  <div
                    key={tag}
                    className="flex items-center gap-2 px-4 py-2 border rounded text-sm font-semibold"
                    style={{ borderColor: "#024089", color: "#024089" }}
                  >
                    <Icon className="w-4 h-4" />
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: photos */}
          <div>
            {photos.length > 0 ? (
              <div className="grid grid-cols-2 gap-3">
                {photos.slice(0, 4).map((src, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] relative overflow-hidden rounded"
                    style={{ border: "1px solid #c9c8c8" }}
                  >
                    <Image
                      src={src}
                      alt={`${name} Werkstatt`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Placeholder grid when no photos */
              <div className="grid grid-cols-2 gap-3">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] flex items-center justify-center rounded"
                    style={{ backgroundColor: "#f5f5f5", border: "1px dashed #c9c8c8" }}
                  >
                    <span className="text-xs font-medium" style={{ color: "#aaa" }}>
                      Foto {i + 1}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
