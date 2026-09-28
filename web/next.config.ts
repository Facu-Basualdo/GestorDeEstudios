import type { NextConfig } from 'next';

// Export estático: `npm run build` deja la web en out/, lista para abrir con
// `npm start` o subir a cualquier hosting estático.
const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default config;
