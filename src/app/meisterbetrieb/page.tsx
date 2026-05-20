import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeadline } from "@/components/PageHeadline";
import { Meisterbetrieb } from "@/components/sections/Meisterbetrieb";
import { client } from "@/data/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Meisterbetrieb | ${client.name}`,
  description: `${client.name} — anerkannter Kfz-Meisterbetrieb in ${client.ort}. Erfahren Sie mehr über uns.`,
};

export default function MeisterbetriebPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <PageHeadline title="Meisterbetrieb" />
        <Meisterbetrieb />
      </main>
      <Footer />
    </>
  );
}
