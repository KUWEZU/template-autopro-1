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
  slogan: "Ihre Meisterwerkstatt" as string,
  adresse: "Waterkamp 29, 59075 Hamm" as string,
  telefon: "+49 2381 12345" as string,
  email: "info@autopro-werkstatt.de" as string,
  website: "https://autopro-werkstatt.de" as string,
  logo: null as string | null,
  standort_bild: null as string | null,
  kundeId: 0 as number,

  // ── Template-Farben (fest — nicht überschreiben) ───────────────────────────
  farben: {
    primary:   "#024089",
    secondary: "#4a4a49",
    accent:    "#ffd100",
  },

  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "/images/hero.svg" as string | null,
    overlayOpacity: 0.0,
    ueberschrift: "autoPRO Fahrzeugtechnik Detlef Frank",
    ueberschriftHighlight: "Meisterwerkstatt" as string,
    untertext:
      "Schon seit 1990 steht unsere Meisterwerkstatt für saubere Arbeit und eine zuverlässige Partnerschaft mit unseren Kunden.",
    ctaPrimary:   { text: "Termin vereinbaren", href: "/kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "/werkstattleistungen" },
  },

  // ── Über uns / Meisterbetrieb ──────────────────────────────────────────────
  ueberUns: {
    bild: null as string | null,
    ueberschrift: "Über uns" as string,
    text1:
      "Die Detlef Frank GmbH ist Ihr zuverlässiger Kfz-Meisterbetrieb in Hamm. Mit jahrelanger Erfahrung und modernster Ausrüstung sorgen wir dafür, dass Ihr Fahrzeug stets in bestem Zustand bleibt." as string,
    text2:
      "Als anerkannter Meisterbetrieb stehen wir für höchste Qualität bei allen Kfz-Arbeiten — von der einfachen Inspektion bis zur komplexen Reparatur. Kommen Sie vorbei und überzeugen Sie sich selbst." as string,
    tags: ["Meisterbetrieb", "TÜV-Partner", "Familienbetrieb"] as string[],
    stats: [
      { value: "30+",    label: "Jahre Erfahrung"   },
      { value: "1.000+", label: "Zufriedene Kunden" },
      { value: "5",      label: "Fachkräfte"        },
      { value: "5.000+", label: "Aufträge/Jahr"     },
    ],
  },

  // ── Leistungen (Top 4 auf Homepage, alle auf Werkstattleistungen-Seite) ────
  leistungen: [
    {
      slug: "kfz-reparaturen",
      title: "Kfz-Reparaturen aller Fabrikate",
      bild: `${R2}/bibliothek/Inspektion/1777808114491-leistung_inspektion.jpg`,
      description:
        "Sämtliche Kfz-Reparaturen und Servicearbeiten für alle Fabrikate — mit höchster Sorgfalt und jahrzehntelanger Erfahrung.",
      highlights: ["Alle Fabrikate", "Meisterqualität", "Schnelle Abwicklung"],
    },
    {
      slug: "hu-au",
      title: "AU- und HU-Abnahme",
      bild: `${R2}/bibliothek/HU/AU/1777808071378-leistung_tu_v.png`,
      description:
        "Haupt- und Abgasuntersuchungen für Benzin- und Dieselfahrzeuge nach § 29 StVZO und § 47a StVZO — direkt vor Ort.",
      highlights: ["Direkt vor Ort", "Schnelle Termine", "Alle Fahrzeugtypen"],
    },
    {
      slug: "karosserie",
      title: "Karosserieinstandsetzung",
      bild: `${R2}/bibliothek/Karosserie/1777808101772-leistung_karosserie.jpeg`,
      description:
        "Egal ob kleine Schramme oder größere Reparatur nach einem Unfall — wir setzen Ihre Fahrzeugkarosserie fachgerecht instand.",
      highlights: ["Unfallschäden", "Kleine Beulen", "Lackierung"],
    },
    {
      slug: "autoglas",
      title: "Autoglasreparaturen",
      bild: `${R2}/bibliothek/Autoglas/1777808080567-autoglas_reparatur.png`,
      description:
        "Steinschlagschäden und defekte Windschutzscheiben — wir reparieren und tauschen schnell und fachgerecht.",
      highlights: ["Steinschlag", "Scheibentausch", "Versicherungsabwicklung"],
    },
  ] as { slug: string; title: string; bild: string; description: string; highlights: string[] }[],

  // ── Karriere ───────────────────────────────────────────────────────────────
  karriere: {
    jobs: [
      { title: "Kfz-Mechatroniker (m/w/d)",  type: "Vollzeit",   experience: "Berufserfahrung erwünscht"   },
      { title: "Auszubildende (m/w/d)",       type: "Ausbildung", experience: "Schulabschluss erforderlich" },
    ],
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: true as boolean,
  oeffnungszeiten: {
    mo_fr: "08:00 – 17:00" as string,
    sa:    "" as string,
    so:    "" as string,
  },

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
