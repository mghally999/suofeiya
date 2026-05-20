'use client';

import { useState } from 'react';
import Link from 'next/link';
import { nav } from '@/lib/content';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header" id="siteHeader">
        <nav className="site-header__nav-left hidden lg:flex">
          {nav.map((item) =>
            'children' in item && item.children ? (
              <div key={item.label} className="nav-dropdown">
                <Link href={item.href} className="nav-dropdown__trigger">
                  {item.label}
                  <span aria-hidden>▾</span>
                </Link>
                <div className="nav-dropdown__menu">
                  {item.children.map((c) => (
                    <Link key={c.href} href={c.href}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <button
          type="button"
          className="lg:hidden text-[14px] uppercase tracking-[0.06em]"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          Menu
        </button>

        <Logo />

        <Link href="/contact" className="site-header__contact hidden lg:inline-flex">
          Contact us
        </Link>

        <Link href="/contact" className="site-header__contact lg:hidden">
          Contact
        </Link>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
