import { SmartLink } from "../lib/SmartLink";

const Svg = ({ children }) => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden>
    {children}
  </svg>
);

const socials = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <Svg>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 6 3.33 6 7.66V24h-5v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92V24h-5V8z" />
      </Svg>
    ),
  },
  {
    label: "Telegram",
    href: "#",
    icon: (
      <Svg>
        <path d="M21.94 4.27 18.6 20.02c-.25 1.1-.9 1.38-1.83.86l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.01.5l.36-5.13L17.9 6.6c.4-.36-.09-.56-.63-.2L6.72 13.18l-4.98-1.56c-1.08-.34-1.1-1.08.23-1.6L20.54 2.7c.9-.34 1.69.2 1.4 1.57z" />
      </Svg>
    ),
  },
  {
    label: "X",
    href: "#",
    icon: (
      <Svg>
        <path d="M18.9 1.2h3.68l-8.04 9.19L24 22.8h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.2h7.6l5.24 6.93L18.9 1.2zm-1.29 19.4h2.04L6.48 3.3H4.3l13.31 17.3z" />
      </Svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <Svg>
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
      </Svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <Svg>
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07z" />
      </Svg>
    ),
  },
];

const cols = [
  {
    title: "Services",
    links: [
      { label: "Token Promotion", to: "#services" },
      { label: "Community Building", to: "#services" },
      { label: "KOL Marketing", to: "#services" },
      { label: "Airdrop Marketing", to: "#services" },
      { label: "Presale Marketing", to: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "#about" },
      { label: "Case Studies", to: "/work" },
      { label: "The Network", to: "#network" },
      { label: "Careers", to: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900">
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SmartLink to="#top" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime font-display text-lg font-bold text-white">
                E
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Eniac<span className="text-lime">Media</span>
              </span>
            </SmartLink>
            <p className="mt-6 max-w-sm text-balance font-display text-2xl font-medium leading-snug">
              Embrace the future of Web3 and blockchain.
            </p>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Let's collaborate to shape a future where opportunities are limitless.
            </p>
            <SmartLink to="#contact" className="btn-primary mt-8">
              Book a free strategy call
            </SmartLink>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="label-mono">{c.title}</h4>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <SmartLink to={l.to} className="text-sm text-muted transition-colors hover:text-bone">
                        {l.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h4 className="label-mono">Connect</h4>
              <div className="mt-5 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
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
          <div className="flex gap-6">
            <a href="#" className="hover:text-bone">Privacy</a>
            <a href="#" className="hover:text-bone">Terms</a>
            <SmartLink to="#contact" className="hover:text-bone">Contact</SmartLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
