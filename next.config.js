/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pdf-viewe-2024.s3.amazonaws.com'], // Añade el dominio aquí
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configuración de caché para el lado del cliente
      config.cache = {
        type: 'filesystem',
      };
    }
    return config;
  },
};

module.exports = nextConfig;
