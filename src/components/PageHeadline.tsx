interface PageHeadlineProps {
  title: string;
  subtitle?: string;
}

/**
 * Italic company-name headline with HR divider — used on homepage
 * and as page title on subpages. Matches the reference site's H1 style.
 */
export function PageHeadline({ title, subtitle }: PageHeadlineProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-8 pb-2">
      <h1
        className="text-2xl sm:text-3xl"
        style={{
          fontStyle: "italic",
          fontWeight: 900,
          color: "#4a4a49",
          textTransform: "none",
          borderBottom: "none",
          paddingBottom: 0,
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-sm" style={{ color: "#777" }}>
          {subtitle}
        </p>
      )}
      <hr className="mt-4" style={{ borderColor: "#ebe8e8", borderTopWidth: "2px" }} />
    </div>
  );
}
