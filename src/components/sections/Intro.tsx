import { client } from "@/data/client";

export function Intro() {
  const { hero } = client;
  const ueberUns = (client as unknown as { ueberUns?: { text1?: string } }).ueberUns;
  const text = ueberUns?.text1 || hero.untertext;

  return (
    <section
      id="werkstatt"
      className="py-12"
      style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #c9c8c8" }}
      aria-label="Unsere Werkstatt"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="font-black uppercase mb-5"
          style={{ color: "#024089", fontSize: "0.95rem", letterSpacing: "0.1em" }}
        >
          Unsere Werkstatt
        </h2>
        <p className="text-base leading-relaxed max-w-3xl" style={{ color: "#4a4a49" }}>
          {text}
        </p>
      </div>
    </section>
  );
}
