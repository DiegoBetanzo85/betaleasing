/** @type {import('next').NextConfig} */
const MW = 'https://betaleasing-syntage-mw.vercel.app';

const nextConfig = {
  async rewrites() {
    return [
      { source: '/onboarding',               destination: `${MW}/onboarding` },
      { source: '/onboarding/:path+',        destination: `${MW}/onboarding/:path+` },
      { source: '/onboarding-static/:path+', destination: `${MW}/onboarding-static/:path+` },
      { source: '/api/onboarding/:path+',    destination: `${MW}/api/onboarding/:path+` },
    ];
  },
  async redirects() {
    return [{ source: '/cotizador', destination: '/onboarding', permanent: false }];
  },
};

export default nextConfig;
