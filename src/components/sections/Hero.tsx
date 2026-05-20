"use client";

import Image from "next/image";
import { Phone, CheckCircle } from "lucide-react";
import { client } from "@/data/client";
import reviewsRaw from "@/data/reviews.json";

type ReviewsJson = { averageRating: number | null; totalCount: number };
const reviewsData = reviewsRaw as ReviewsJson;

export function Hero() {
  const { bild, ueberschrift, untertext, ctaPrimary } = client.hero;

  const rating    = reviewsData?.averageRating;
  const ratingCnt = reviewsData?.totalCount;
  const hasRating = rating !== null && rating !== undefined && rating > 0;

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "520px", paddingTop: "96px" }}
      aria-label="Startbereich"
    >
      {/* Background image */}
      {bild ? (
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={bild}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            unoptimized={bild.endsWith(".svg")}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(160deg, rgba(2,48,110,0.78) 0%, rgba(0,0,0,0.52) 100%)",
            }}
          />
        </div>
      ) : (
        <div className="absolute inset-0" style={{ backgroundColor: "#024089" }} aria-hidden="true" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="max-w-2xl">
          {/* TÜV badge */}
          {client.tuev_termine && (
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold mb-5"
              style={{ backgroundColor: "#ffd100", color: "#024089" }}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              TÜV-Abnahme direkt vor Ort
            </div>
          )}

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-black italic text-white mb-4 leading-tight"
            style={{ textTransform: "none", borderBottom: "none", paddingBottom: 0, color: "#fff" }}
          >
            {ueberschrift}
          </h1>

          {/* Subtext */}
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            {untertext}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href={ctaPrimary.href}
              className="flex items-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-wide rounded transition-colors"
              style={{ backgroundColor: "#ffd100", color: "#024089" }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Phone className="w-4 h-4" />
              {ctaPrimary.text}
            </a>
            <a
              href="#leistungen"
              className="flex items-center gap-2 px-6 py-3 font-bold text-sm uppercase tracking-wide rounded border-2 border-white/60 text-white hover:bg-white/10 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("leistungen")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Leistungen ansehen
            </a>
          </div>

          {/* Google rating */}
          {hasRating && (
            <div className="mt-6 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4"
                    fill={i < Math.round(rating!) ? "#ffd100" : "rgba(255,255,255,0.3)"}
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/80 text-sm">
                {String(rating!).replace(".", ",")} bei Google
                {ratingCnt ? ` · ${ratingCnt} Bewertungen` : ""}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
