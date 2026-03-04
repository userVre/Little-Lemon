import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Darkor.ai - AI Interior Design',
  description: 'Fire your interior designer with Darkor.ai',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
