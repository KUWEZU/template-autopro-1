"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { client } from "@/data/client";

export function Kontakt() {
  const [form, setForm] = useState({ name: "", email: "", telefon: "", nachricht: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set(k: keyof typeof form, v: string) {
    setForm((p) => ({ ...p, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.nachricht.trim()) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    setSending(true);
    setError(null);
    try {
      // In a real deployment this would POST to a form endpoint
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
  if (oz.sa)    ozLines.push(`Sa: ${oz.sa}`);
  if (oz.so)    ozLines.push(`So: ${oz.so}`);

  return (
    <section
      id="kontakt"
      aria-label="Kontakt"
      style={{ backgroundColor: "#ffffff", borderTop: "1px solid #c9c8c8" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2
          className="text-center font-bold uppercase mb-12"
          style={{ color: "#024089", letterSpacing: "0.08em", fontSize: "1.1rem" }}
        >
          Kontakt & Öffnungszeiten
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div className="space-y-8">
            {/* Company info */}
            <div>
              <h3
                className="font-bold uppercase text-sm mb-4"
                style={{ color: "#024089", letterSpacing: "0.06em" }}
              >
                {client.name}
              </h3>
              <div className="space-y-3 text-sm" style={{ color: "#4a4a49" }}>
                {client.adresse && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#024089" }} />
                    <span>{client.adresse}</span>
                  </div>
                )}
                {client.telefon && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 shrink-0" style={{ color: "#024089" }} />
                    <a
                      href={`tel:${client.telefon.replace(/\s/g, "")}`}
                      className="font-semibold hover:underline"
                      style={{ color: "#024089" }}
                    >
                      {client.telefon}
                    </a>
                  </div>
                )}
                {client.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 shrink-0" style={{ color: "#024089" }} />
                    <a
                      href={`mailto:${client.email}`}
                      className="hover:underline"
                      style={{ color: "#024089" }}
                    >
                      {client.email}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Hours */}
            {ozLines.length > 0 && (
              <div>
                <h3
                  className="font-bold uppercase text-sm mb-4 flex items-center gap-2"
                  style={{ color: "#024089", letterSpacing: "0.06em" }}
                >
                  <Clock className="w-4 h-4" />
                  Öffnungszeiten
                </h3>
                <div className="space-y-1.5">
                  {ozLines.map((line) => (
                    <div key={line} className="text-sm flex justify-between max-w-[220px]" style={{ color: "#4a4a49" }}>
                      <span>{line.split(":")[0]}:</span>
                      <span className="font-semibold">{line.split(":").slice(1).join(":").trim()}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TÜV */}
            {client.tuev_termine && (
              <div
                className="p-4 rounded border"
                style={{ borderColor: "#ffd100", backgroundColor: "#fffbeb" }}
              >
                <p className="text-sm font-bold uppercase mb-1" style={{ color: "#024089" }}>
                  TÜV-Termine
                </p>
                <p className="text-sm" style={{ color: "#4a4a49" }}>
                  Haupt- und Abgasuntersuchungen direkt vor Ort — rufen Sie uns für einen Termin an.
                </p>
              </div>
            )}
          </div>

          {/* Right: Form */}
          <div>
            {sent ? (
              <div
                className="flex flex-col items-center justify-center text-center p-8 rounded border"
                style={{ borderColor: "#c9c8c8", minHeight: "280px" }}
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
                    className="text-sm px-4 py-3 rounded border"
                    style={{ color: "#c0392b", borderColor: "#e74c3c", backgroundColor: "#fdf2f2" }}
                  >
                    {error}
                  </p>
                )}

                {[
                  { key: "name",     label: "Name",     type: "text",  required: true,  placeholder: "Ihr Name" },
                  { key: "email",    label: "E-Mail",   type: "email", required: true,  placeholder: "ihre@email.de" },
                  { key: "telefon",  label: "Telefon",  type: "tel",   required: false, placeholder: "+49 …" },
                ].map(({ key, label, type, required, placeholder }) => (
                  <div key={key}>
                    <label
                      htmlFor={`kontakt-${key}`}
                      className="block text-xs font-semibold uppercase mb-1.5"
                      style={{ color: "#4a4a49", letterSpacing: "0.05em" }}
                    >
                      {label} {required && <span style={{ color: "#c0392b" }}>*</span>}
                    </label>
                    <input
                      id={`kontakt-${key}`}
                      type={type}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => set(key as keyof typeof form, e.target.value)}
                      placeholder={placeholder}
                      required={required}
                      className="w-full px-3 py-2.5 text-sm border rounded focus:outline-none transition-colors"
                      style={{
                        borderColor: "#c9c8c8",
                        color: "#4a4a49",
                        backgroundColor: "#fff",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#024089")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#c9c8c8")}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="kontakt-nachricht"
                    className="block text-xs font-semibold uppercase mb-1.5"
                    style={{ color: "#4a4a49", letterSpacing: "0.05em" }}
                  >
                    Nachricht <span style={{ color: "#c0392b" }}>*</span>
                  </label>
                  <textarea
                    id="kontakt-nachricht"
                    rows={4}
                    value={form.nachricht}
                    onChange={(e) => set("nachricht", e.target.value)}
                    placeholder="Wie können wir Ihnen helfen?"
                    required
                    className="w-full px-3 py-2.5 text-sm border rounded focus:outline-none transition-colors resize-none"
                    style={{ borderColor: "#c9c8c8", color: "#4a4a49" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#024089")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#c9c8c8")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 font-bold text-sm uppercase tracking-wide transition-opacity"
                  style={{
                    backgroundColor: "#ffd100",
                    color: "#333333",
                    opacity: sending ? 0.7 : 1,
                  }}
                >
                  <Send className="w-4 h-4" />
                  {sending ? "Wird gesendet…" : "Nachricht senden"}
                </button>

                <p className="text-xs" style={{ color: "#777" }}>
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
