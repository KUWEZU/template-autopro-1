"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { client } from "@/data/client";

export function Kontakt() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    telefon: "",
    rueckruf: false,
    nachricht: "",
    datenschutz: false,
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function setField<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.nachricht.trim()) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    if (!form.datenschutz) {
      setError("Bitte stimmen Sie der Datenschutzerklärung zu.");
      return;
    }
    setSending(true);
    setError(null);
    try {
      await new Promise((r) => setTimeout(r, 800));
      setSent(true);
    } catch {
      setError("Fehler beim Senden. Bitte versuchen Sie es erneut.");
    } finally {
      setSending(false);
    }
  }

  const oz = client.oeffnungszeiten;
  const ozLines: string[] = [];
  if (oz.mo_fr) ozLines.push(`Mo–Fr: ${oz.mo_fr}`);
  if (oz.sa) ozLines.push(`Sa: ${oz.sa}`);
  if (oz.so) ozLines.push(`So: geschlossen`);

  const mapsQuery = encodeURIComponent(client.adresse);

  return (
    <section
      id="kontakt"
      aria-label="Kontakt"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* ── Left: SO ERREICHEN SIE UNS ───────────────────────────────── */}
          <div>
            <h2
              className="font-black uppercase mb-5 text-sm"
              style={{ color: "#024089", letterSpacing: "0.1em" }}
            >
              So erreichen Sie uns
            </h2>

            {/* Info box — light blue */}
            <div
              className="p-6 mb-6 space-y-4"
              style={{ backgroundColor: "#dce9f7", border: "1px solid #b3cceb" }}
            >
              {client.adresse && (
                <div className="flex items-start gap-3 text-sm" style={{ color: "#4a4a49" }}>
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#024089" }} />
                  <div>
                    <p className="font-bold">{client.name}</p>
                    <p>{client.adresse}</p>
                  </div>
                </div>
              )}
              {client.telefon && (
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 shrink-0" style={{ color: "#024089" }} />
                  <a
                    href={`tel:${client.telefon.replace(/\s/g, "")}`}
                    className="font-bold hover:underline"
                    style={{ color: "#024089" }}
                  >
                    {client.telefon}
                  </a>
                </div>
              )}
              {client.email && (
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 shrink-0" style={{ color: "#024089" }} />
                  <a
                    href={`mailto:${client.email}`}
                    className="hover:underline"
                    style={{ color: "#4a4a49" }}
                  >
                    {client.email}
                  </a>
                </div>
              )}

              {/* Divider */}
              {ozLines.length > 0 && <hr style={{ borderColor: "#b3cceb" }} />}

              {/* Opening hours */}
              {ozLines.length > 0 && (
                <div>
                  <p
                    className="font-black uppercase text-xs mb-2 flex items-center gap-1.5"
                    style={{ color: "#024089", letterSpacing: "0.07em" }}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    Öffnungszeiten
                  </p>
                  <div className="space-y-1">
                    {ozLines.map((line) => {
                      const [day, ...rest] = line.split(":");
                      return (
                        <div
                          key={line}
                          className="flex justify-between text-sm max-w-[220px]"
                          style={{ color: "#4a4a49" }}
                        >
                          <span>{day}:</span>
                          <span className="font-semibold">{rest.join(":").trim()}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Google Maps link */}
            {client.adresse && (
              <a
                href={`https://maps.google.com/?q=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wide transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#024089", color: "#ffffff" }}
              >
                <MapPin className="w-3.5 h-3.5" />
                Auf Karte anzeigen
              </a>
            )}
          </div>

          {/* ── Right: SCHREIBEN SIE UNS ─────────────────────────────────── */}
          <div>
            <h2
              className="font-black uppercase mb-5 text-sm"
              style={{ color: "#024089", letterSpacing: "0.1em" }}
            >
              Schreiben Sie uns!
            </h2>

            {sent ? (
              <div
                className="flex flex-col items-center justify-center text-center p-8 bg-white border"
                style={{ borderColor: "#c9c8c8", minHeight: "320px" }}
              >
                <CheckCircle className="w-12 h-12 mb-4" style={{ color: "#024089" }} />
                <h3 className="font-bold text-base mb-2" style={{ color: "#024089" }}>
                  Nachricht gesendet!
                </h3>
                <p className="text-sm" style={{ color: "#4a4a49" }}>
                  Wir melden uns so schnell wie möglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {error && (
                  <p
                    className="text-sm px-4 py-3 border"
                    style={{ color: "#c0392b", borderColor: "#e74c3c", backgroundColor: "#fdf2f2" }}
                  >
                    {error}
                  </p>
                )}

                {/* Name */}
                <div>
                  <label htmlFor="k-name" className="block text-xs font-bold uppercase mb-1.5" style={{ color: "#4a4a49", letterSpacing: "0.05em" }}>
                    Name <span style={{ color: "#c0392b" }}>*</span>
                  </label>
                  <input
                    id="k-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    placeholder="Ihr Name"
                    required
                    className="w-full px-3 py-2.5 text-sm border focus:outline-none"
                    style={{ borderColor: "#c9c8c8", color: "#4a4a49", backgroundColor: "#fff" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#024089")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#c9c8c8")}
                  />
                </div>

                {/* E-Mail */}
                <div>
                  <label htmlFor="k-email" className="block text-xs font-bold uppercase mb-1.5" style={{ color: "#4a4a49", letterSpacing: "0.05em" }}>
                    E-Mail <span style={{ color: "#c0392b" }}>*</span>
                  </label>
                  <input
                    id="k-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                    placeholder="ihre@email.de"
                    required
                    className="w-full px-3 py-2.5 text-sm border focus:outline-none"
                    style={{ borderColor: "#c9c8c8", color: "#4a4a49", backgroundColor: "#fff" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#024089")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#c9c8c8")}
                  />
                </div>

                {/* Telefon + Rückruf */}
                <div>
                  <label htmlFor="k-telefon" className="block text-xs font-bold uppercase mb-1.5" style={{ color: "#4a4a49", letterSpacing: "0.05em" }}>
                    Telefon
                  </label>
                  <div className="flex gap-3">
                    <input
                      id="k-telefon"
                      type="tel"
                      value={form.telefon}
                      onChange={(e) => setField("telefon", e.target.value)}
                      placeholder="+49 …"
                      className="flex-1 px-3 py-2.5 text-sm border focus:outline-none"
                      style={{ borderColor: "#c9c8c8", color: "#4a4a49", backgroundColor: "#fff" }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#024089")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#c9c8c8")}
                    />
                    <label className="flex items-center gap-2 text-xs shrink-0 cursor-pointer" style={{ color: "#4a4a49" }}>
                      <input
                        type="checkbox"
                        checked={form.rueckruf}
                        onChange={(e) => setField("rueckruf", e.target.checked)}
                        className="w-4 h-4 cursor-pointer"
                        style={{ accentColor: "#024089" }}
                      />
                      Rückruf
                    </label>
                  </div>
                </div>

                {/* Nachricht */}
                <div>
                  <label htmlFor="k-nachricht" className="block text-xs font-bold uppercase mb-1.5" style={{ color: "#4a4a49", letterSpacing: "0.05em" }}>
                    Nachricht <span style={{ color: "#c0392b" }}>*</span>
                  </label>
                  <textarea
                    id="k-nachricht"
                    rows={4}
                    value={form.nachricht}
                    onChange={(e) => setField("nachricht", e.target.value)}
                    placeholder="Wie können wir Ihnen helfen?"
                    required
                    className="w-full px-3 py-2.5 text-sm border focus:outline-none resize-none"
                    style={{ borderColor: "#c9c8c8", color: "#4a4a49", backgroundColor: "#fff" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#024089")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#c9c8c8")}
                  />
                </div>

                {/* Datenschutz */}
                <label className="flex items-start gap-2.5 text-xs cursor-pointer" style={{ color: "#4a4a49" }}>
                  <input
                    type="checkbox"
                    checked={form.datenschutz}
                    onChange={(e) => setField("datenschutz", e.target.checked)}
                    required
                    className="mt-0.5 w-4 h-4 shrink-0 cursor-pointer"
                    style={{ accentColor: "#024089" }}
                  />
                  <span>
                    Ich habe die{" "}
                    <a href="/datenschutz" className="underline hover:no-underline" style={{ color: "#024089" }}>
                      Datenschutzerklärung
                    </a>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
                    <span style={{ color: "#c0392b" }}>*</span>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 font-bold text-sm uppercase tracking-wide transition-opacity"
                  style={{
                    backgroundColor: "#024089",
                    color: "#ffffff",
                    opacity: sending ? 0.7 : 1,
                  }}
                >
                  <Send className="w-4 h-4" />
                  {sending ? "Wird gesendet…" : "Absenden"}
                </button>

                <p className="text-xs" style={{ color: "#999" }}>
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
