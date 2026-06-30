import { SmartLink } from "../lib/SmartLink";
import { DECKS_URL } from "../data/network";

const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
    {children}
  </svg>
);

const socials = [
  {
    label: "X (Twitter)",
    href: "https://x.com/EniacMedia",
    icon: (
      <Svg>
        <path d="M18.9 1.2h3.68l-8.04 9.19L24 22.8h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.2h7.6l5.24 6.93L18.9 1.2zm-1.29 19.4h2.04L6.48 3.3H4.3l13.31 17.3z" />
      </Svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/eniacmedia/",
    icon: (
      <Svg>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.33 6 7.66V24h-5v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8z" />
      </Svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/+MX7di6Eu8WU4MGI1",
    icon: (
      <Svg>
        <path d="M21.94 4.27 18.6 20.02c-.25 1.1-.9 1.38-1.83.86l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.01.5l.36-5.13L17.9 6.6c.4-.36-.09-.56-.63-.2L6.72 13.18l-4.98-1.56c-1.08-.34-1.1-1.08.23-1.6L20.54 2.7c.9-.34 1.69.2 1.4 1.57z" />
      </Svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/eniac_media/",
    icon: (
      <Svg>
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
      </Svg>
    ),
  },
];

const cols = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", to: "#top" },
      { label: "About", to: "#about" },
      { label: "Services", to: "#services" },
      { label: "Blogs", to: "#" },
      { label: "News", to: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Decks", to: DECKS_URL, external: true },
      { label: "Resources", to: "#" },
      { label: "Brand Kit", to: "#contact" },
      { label: "Careers", to: "#contact" },
      { label: "Team Verify", to: "#contact" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Privacy Policy", to: "#" },
      { label: "Terms & Conditions", to: "#" },
      { label: "Disclaimer", to: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SmartLink to="#top" className="flex items-center">
              <img src="/brand/eniac-logo.svg" alt="ENIAC Media" className="h-8 w-auto" />
            </SmartLink>
            <p className="mt-6 max-w-sm text-balance font-display text-2xl font-medium leading-snug">
              Embrace the Future of Web3 &amp; Blockchain
            </p>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Let's collaborate to build communities, drive adoption, and create meaningful
              growth opportunities in the decentralized economy.
            </p>
            <SmartLink to="#contact" className="btn-primary mt-8">
              Book a Free Strategy Call
            </SmartLink>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="label-mono">{c.title}</h4>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.external ? (
                        <a href={l.to} target="_blank" rel="noreferrer" className="text-sm text-muted transition-colors hover:text-bone">
                          {l.label}
                        </a>
                      ) : l.to === "#" ? (
                        <a href="#" className="text-sm text-muted transition-colors hover:text-bone">
                          {l.label}
                        </a>
                      ) : (
                        <SmartLink to={l.to} className="text-sm text-muted transition-colors hover:text-bone">
                          {l.label}
                        </SmartLink>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="label-mono">Contact Information</h4>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href="mailto:info@eniacmedia.com" className="text-muted transition-colors hover:text-bone">
                    info@eniacmedia.com
                  </a>
                </li>
                <li>
                  <a href="https://t.me/Eniacmedia" target="_blank" rel="noreferrer" className="text-muted transition-colors hover:text-bone">
                    t.me/Eniacmedia
                  </a>
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-muted transition-all hover:border-lime/40 hover:text-lime"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted sm:flex-row">
          <span>© 2026 Eniac Media. All Rights Reserved.</span>
          <span>Built for Web3 Growth, PR &amp; Marketing.</span>
        </div>
      </div>
    </footer>
  );
}
