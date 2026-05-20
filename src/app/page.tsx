import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { TopLeistungen } from "@/components/sections/TopLeistungen";
import { Footer } from "@/components/Footer";
import { PageHeadline } from "@/components/PageHeadline";
import { client } from "@/data/client";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <PageHeadline title={client.hero.ueberschrift} />
        <Intro />
        <TopLeistungen />
      </main>
      <Footer />
    </>
  );
}
