import newsRaw from "@/data/news.json";

type NewsItem = {
  id: number;
  titel: string;
  datum: string;
  vorschau: string;
  bild: string | null;
};

const news = newsRaw as NewsItem[];

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function Aktuelles() {
  if (news.length === 0) {
    return (
      <section
        id="aktuelles"
        aria-label="Aktuelles"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <p className="text-base" style={{ color: "#777" }}>
            Aktuell keine Neuigkeiten vorhanden.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="aktuelles"
      aria-label="Aktuelles"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#c9c8c8]">
          {news.map((item, i) => (
            <article
              key={item.id}
              className="flex flex-col bg-white"
              style={{
                borderRight: i < news.length - 1 && i % 4 !== 3 ? "1px solid #c9c8c8" : "none",
              }}
            >
              {/* Image placeholder */}
              <div
                className="aspect-[3/2] flex items-center justify-center border-b border-[#c9c8c8]"
                style={{ backgroundColor: "#ebebeb" }}
              >
                <span className="text-xs font-medium" style={{ color: "#aaa" }}>
                  Bild
                </span>
              </div>

              <div className="flex flex-col flex-1 p-5">
                <p className="text-xs mb-2" style={{ color: "#aaa" }}>
                  {formatDate(item.datum)}
                </p>
                <h3
                  className="font-bold uppercase text-sm mb-2 leading-snug"
                  style={{ color: "#024089", letterSpacing: "0.03em" }}
                >
                  {item.titel}
                </h3>
                <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "#4a4a49" }}>
                  {item.vorschau}
                </p>
                <div>
                  <span
                    className="inline-block px-4 py-2 text-xs font-bold uppercase tracking-wide"
                    style={{ backgroundColor: "#024089", color: "#ffffff" }}
                  >
                    Weiterlesen
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
