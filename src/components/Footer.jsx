import { SmartLink } from "../lib/SmartLink";

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
];

const cols = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", to: "#top" },
      { label: "About", to: "#about" },
      { label: "Services", to: "#services" },
      { label: "Case Studies", to: "/work" },
      { label: "Network", to: "#network" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Deck", to: "#contact" },
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
            <SmartLink to="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime font-display text-lg font-bold text-white">
                E
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Eniac<span className="text-lime">Media</span>
              </span>
            </SmartLink>
            <p className="mt-6 max-w-sm text-balance font-display text-2xl font-medium leading-snug">
              Embrace the future of Web3 &amp; blockchain.
            </p>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Let's collaborate to build communities, drive adoption, and create meaningful
              growth opportunities in the decentralized economy.
            </p>
            <SmartLink to="#contact" className="btn-primary mt-8">
              Book a free strategy call
            </SmartLink>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="label-mono">{c.title}</h4>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.to === "#" ? (
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
              <h4 className="label-mono">Contact</h4>
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
          <span>© {new Date().getFullYear()} Eniac Media. All rights reserved.</span>
          <span>Built for Web3 Growth, PR &amp; Marketing.</span>
        </div>
      </div>
    </footer>
  );
}
