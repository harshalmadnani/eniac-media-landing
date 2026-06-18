import { useState } from "react";

export default function TokenCoin({ token, img, size = 36 }) {
  const [failed, setFailed] = useState(!img);
  const ticker = token.replace("$", "");
  return (
    <span
      className="grid shrink-0 place-items-center overflow-hidden rounded-full border border-white/10 bg-ink-700"
      style={{ width: size, height: size }}
    >
      {failed ? (
        <span className="bg-gradient-to-br from-lime to-mint bg-clip-text font-display font-bold text-transparent"
          style={{ fontSize: size * 0.3 }}>
          {ticker.slice(0, 3)}
        </span>
      ) : (
        <img
          src={img}
          alt={token}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
    </span>
  );
}
