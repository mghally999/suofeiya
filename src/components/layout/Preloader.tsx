'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`preloader${hidden ? ' is-hidden' : ''}`} aria-hidden={hidden}>
      <div className="preloader__brand">SUOFEIYA</div>
      <div className="preloader__sub">Crafting timeless tailored spaces</div>
    </div>
  );
}
