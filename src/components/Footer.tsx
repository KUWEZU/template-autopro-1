import { client } from "@/data/client";
import Image from "next/image";

// ── SSL Lock Icon ─────────────────────────────────────────────────────────────
function SslIcon() {
  return (
    <svg className="w-5 h-6 shrink-0" viewBox="0 0 23 29.515" fill="currentColor" aria-hidden="true">
      <path d="M2.269,10.992c0.226,0.007,0.449,0.022,0.671,0.022c6.084,0.003,12.165,0.003,18.248,0.003c1.284,0,1.813,0.531,1.813,1.825c0,5.165-0.004,10.331-0.006,15.497c-0.015,0.032-0.027,0.07-0.039,0.104c-0.212,0.563-0.607,0.92-1.19,1.071c-6.845,0-13.692,0-20.534,0c-0.07-0.011-0.14-0.02-0.21-0.031c-0.445-0.237-0.814-0.544-0.984-1.04C0.024,28.41,0.012,28.372,0,28.34c0-5.391,0-10.777,0.004-16.169c0.012-0.032,0.025-0.069,0.037-0.103c0.316-0.764,0.887-1.115,1.713-1.056C1.924,11.025,2.098,10.999,2.269,10.992z" />
      <path d="M19.455,4.2c0.819,1.494,1.381,3.073,1.643,4.763c0.227,1.44,0.252,1.438-1.204,1.438c-0.483,0-0.967-0.026-1.451,0.008c-0.382,0.026-0.494-0.095-0.514-0.479c-0.074-1.256-0.411-2.452-1.001-3.56C15.25,3.188,10.873,2.251,7.82,4.374C6.168,5.521,5.562,7.225,5.172,9.069c-0.042,0.186-0.07,0.374-0.093,0.563c-0.101,0.769-0.098,0.764-0.897,0.771c-0.745,0-1.486,0.009-2.228,0.012c-0.188-0.027-0.188-0.166-0.175-0.311c0.169-2.201,0.7-4.305,1.961-6.135C5.43,1.913,7.855,0.653,10.803,0.43c2.771-0.209,5.194,0.668,7.265,2.52c0.443,0.394,0.791,0.864,1.159,1.32L19.455,4.2z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const initials = client.name.slice(0, 2).toUpperCase();

  return (
    <footer style={{ backgroundColor: "#024089" }} aria-label="Seitenende">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            {client.logo ? (
              <Image
                src={client.logo}
                alt={client.name}
                width={120}
                height={36}
                className="h-9 w-auto object-contain"
                unoptimized
              />
            ) : (
              <>
                <div
                  className="w-9 h-9 rounded flex items-center justify-center shrink-0 font-black text-sm"
                  style={{ backgroundColor: "#ffd100", color: "#024089" }}
                >
                  {initials}
                </div>
                <div>
                  <div className="text-white font-black text-sm tracking-wide uppercase">autoPRO</div>
                  <div className="text-white/60 text-xs">{client.name}</div>
                </div>
              </>
            )}
          </div>

          {/* SSL Badge */}
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <SslIcon />
            <span className="font-semibold">SSL-verschlüsselt</span>
          </div>

          {/* Links */}
          <div className="text-xs text-white/70 text-right">
            <p className="mb-1">© {year} {client.name}</p>
            <div className="flex gap-3">
              <a href="/datenschutz" className="text-white/70 hover:text-white transition-colors">
                Datenschutz
              </a>
              <span className="text-white/30">|</span>
              <a href="/impressum" className="text-white/70 hover:text-white transition-colors">
                Impressum
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
