import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav>
      <Link data-cy="link-feedback" href="/">Write a review</Link>
      <Link data-cy="link-feedback" href="/feedback">Feedback</Link>
    </nav>
  );
}
