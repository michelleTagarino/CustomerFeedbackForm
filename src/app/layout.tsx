import 'src/styles/globals.css';
import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import Navbar from './components/navbar/Navbar';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Checkout Challenge',
  description: 'Front end challenge for Checkout.com',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
