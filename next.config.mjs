import withPWA from 'next-pwa';

const pwaConfig = {
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fdn2.gsmarena.com', 'fdn.gsmarena.com', 'data.phoneo.in'],
  },
};

export default withPWA(pwaConfig)(nextConfig);


