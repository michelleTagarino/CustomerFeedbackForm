'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link data-cy="link-feedback" href="/" className={pathname == '/' ? 'active' : ''}>Write a review</Link>
      <Link data-cy="link-feedback" href="/feedback" className={pathname == '/feedback' ? 'active' : ''}>Feedback</Link>
    </nav>
  );
}
