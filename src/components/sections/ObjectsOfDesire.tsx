'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { objectsRail } from '@/lib/content';
import { DoublyLinkedList } from '@/lib/ds';

const captions: Record<number, { title: string; copy: string }> = {
  0: {
    title: 'WALK-IN WARDROBE — SOLITAIRE',
    copy: 'A modular dressing system in smoked oak and brushed bronze. Each compartment is drawn to the architecture rather than the rail.'
  },
  1: {
    title: 'BATHROOM VANITY — TIDE',
    copy: 'Honed travertine over a deep walnut carcass; integrated lighting reads as a quiet horizon beneath the basin.'
  },
  2: {
    title: 'TIGHT CONSOLE — AEQUO',
    copy: 'Positioned within the corridor, the AEQUO Tight Console is a sculptural piece that balances refined proportion with striking materiality. Its silhouette and meticulous detailing create a quiet statement that enhances the architectural rhythm of the space.'
  },
  3: {
    title: 'CABINETRY ATELIER — VERSE',
    copy: 'Floor-to-ceiling joinery designed at full scale in our atelier. Veneers selected leaf-by-leaf and book-matched in the room itself.'
  },
  4: {
    title: 'LOOSE FURNITURE — STILL',
    copy: 'A modular lounge program of upholstered volumes set on a cast-bronze plinth. Designed to occupy the room, never to crowd it.'
  }
};

export default function ObjectsOfDesire() {
  const [active, setActive] = useState(2);

  // Hold the rail as a DLL — visual order survives reorderings without
  // re-binding event listeners.
  const dll = useMemo(() => DoublyLinkedList.from(objectsRail), []);
  void dll;

  return (
    <section className="objects">
      <h2 className="objects__title">
        OBJECTS <span style={{ fontStyle: 'italic' }}>of</span> DESIRE
      </h2>
      <div className="objects__rail" role="list">
        {objectsRail.map((src, i) => (
          <button
            key={src}
            role="listitem"
            type="button"
            className={`object${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
            data-cursor="select"
            aria-label={captions[i]?.title ?? 'Object'}
          >
            <Image src={src} alt="" fill sizes="280px" style={{ objectFit: 'cover' }} />
          </button>
        ))}
      </div>
      <div className="objects__caption">
        <h3>{captions[active]?.title}</h3>
        <p>{captions[active]?.copy}</p>
      </div>
    </section>
  );
}
