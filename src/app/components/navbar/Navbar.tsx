import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <Link data-cy="link-feedback" href="/feedback">Feedback</Link>
  );
}
