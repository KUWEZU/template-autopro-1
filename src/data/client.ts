/**
 * client.ts — AutoPRO Template Konfiguration.
 * Wird vom KUWEZU Generator automatisch mit Kundendaten befüllt.
 */

const R2 = "https://r2.kuwezu.de";

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "Detlef Frank GmbH" as string,
  branche: "Kfz-Werkstatt" as string,
  ort: "Hamm" as string,
  adresse: "Waterkamp 29, 59075 Hamm",
  telefon: "+49 2381 12345",
  fax: "" as string,
  email: "info@autopro-werkstatt.de",
  website: "https://autopro-werkstatt.de",
  logo: null as string | null,
  kundeId: 0 as number,

  // ── Template-Farben (fest — nicht überschreiben) ───────────────────────────
  farben: {
    primary:   "#024089",
    secondary: "#4a4a49",
    accent:    "#ffd100",
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: true as boolean,
  oeffnungszeiten: {
    mo_fr: "08:00 – 17:00" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "/images/hero.svg" as string | null,
    ueberschrift: "autoPRO Fahrzeugtechnik Detlef Frank!",
    untertext:
      "Schon seit 1990 steht unsere Meisterwerkstatt für saubere Arbeit und eine zuverlässige Partnerschaft mit unseren Kunden.",
    ctaPrimary:   { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Leistungen (Top 4 — fest im Template) ─────────────────────────────────
  leistungen: [
    {
      slug: "kfz-reparaturen",
      title: "Kfz-Reparaturen aller Fabrikate",
      bild: `${R2}/bibliothek/Inspektion/1777808114491-leistung_inspektion.jpg`,
      description:
        "Sämtliche Kfz-Reparaturen und Servicearbeiten für alle Fabrikate — mit höchster Sorgfalt und jahrzehntelanger Erfahrung.",
    },
    {
      slug: "hu-au",
      title: "AU- und HU-Abnahme",
      bild: `${R2}/bibliothek/HU/AU/1777808071378-leistung_tu_v.png`,
      description:
        "Haupt- und Abgasuntersuchungen für Benzin- und Dieselfahrzeuge nach § 29 StVZO und § 47a StVZO — direkt vor Ort.",
    },
    {
      slug: "karosserie",
      title: "Karosserieinstandsetzung",
      bild: `${R2}/bibliothek/Karosserie/1777808101772-leistung_karosserie.jpeg`,
      description:
        "Egal ob kleine Schramme oder größere Reparatur nach einem Unfall — wir setzen Ihre Fahrzeugkarosserie fachgerecht instand.",
    },
    {
      slug: "autoglas",
      title: "Autoglasreparaturen",
      bild: `${R2}/bibliothek/Autoglas/1777808080567-autoglas_reparatur.png`,
      description:
        "Steinschlagschäden und defekte Windschutzscheiben — wir reparieren und tauschen schnell und fachgerecht.",
    },
  ],

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr: 08:00 – 17:00"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: false as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
