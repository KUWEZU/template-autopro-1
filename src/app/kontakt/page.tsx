import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeadline } from "@/components/PageHeadline";
import { Kontakt } from "@/components/sections/Kontakt";
import { client } from "@/data/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Kontakt | ${client.name}`,
  description: `Kontaktieren Sie ${client.name} in ${client.ort}. Rufen Sie uns an oder schreiben Sie uns.`,
};

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <PageHeadline title="Kontakt" />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
