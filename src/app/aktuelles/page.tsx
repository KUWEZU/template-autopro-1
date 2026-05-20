import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeadline } from "@/components/PageHeadline";
import { Aktuelles } from "@/components/sections/Aktuelles";
import { client } from "@/data/client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Aktuelles | ${client.name}`,
  description: `Neuigkeiten und Aktionen von ${client.name} in ${client.ort}.`,
};

export default function AktuellesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <PageHeadline title="Aktuelles" />
        <Aktuelles />
      </main>
      <Footer />
    </>
  );
}
