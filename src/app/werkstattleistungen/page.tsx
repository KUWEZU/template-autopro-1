import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeadline } from "@/components/PageHeadline";
import { Werkstattleistungen } from "@/components/sections/Werkstattleistungen";
import { client } from "@/data/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Werkstattleistungen | ${client.name}`,
  description: `Alle Leistungen von ${client.name} — ${client.branche} in ${client.ort}. Reparaturen, HU/AU, Karosserie und mehr.`,
};

export default function WerkstattleistungenPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <PageHeadline title="Werkstattleistungen" />
        <Werkstattleistungen />
      </main>
      <Footer />
    </>
  );
}
