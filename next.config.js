/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      
      // Mark @opentelemetry/* as external to prevent bundling issues
      if (!Array.isArray(config.externals)) {
        config.externals = [config.externals];
      }
      
      config.externals.push(
        ({ request }, callback) => {
          if (request && request.startsWith('@opentelemetry/')) {
            return callback(null, `commonjs ${request}`);
          }
          callback();
        }
      );
    }

    return config;
  },
};

module.exports = nextConfig;
