'use client';

import { ThemeProvider } from 'next-themes';

// HeroUI v3 no necesita Provider; next-themes pone la clase light/dark en <html>
// y sigue la preferencia del sistema hasta que se elija otra cosa.
export function Proveedores({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
