import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { TopLeistungen } from "@/components/sections/TopLeistungen";
import { Kontakt } from "@/components/sections/Kontakt";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Intro />
        <TopLeistungen />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
