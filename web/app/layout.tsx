import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from 'next/font/google';
import { Proveedores } from './proveedores';
import './globals.css';

const plex = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex' });
const plexCondensed = IBM_Plex_Sans_Condensed({ subsets: ['latin'], weight: ['500', '600'], variable: '--font-plex-condensed' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono' });

export const metadata: Metadata = {
  title: 'Flip-Flop',
  description: 'Flashcards, cuestionarios y teoría generados desde las notas del tutor de estudios.',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${plex.variable} ${plexCondensed.variable} ${plexMono.variable}`}>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <Proveedores>{children}</Proveedores>
      </body>
    </html>
  );
}
