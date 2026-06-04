/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'n3uralia.com',
          },
        ],
        destination: 'https://www.n3uralia.com/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
