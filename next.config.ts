import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Content Security Policy - Upgrade insecure requests to HTTPS
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests; block-all-mixed-content"
          },
          // HTTP Strict Transport Security - Force HTTPS for 1 year
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          // X-Content-Type-Options - Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          // X-Frame-Options - Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          // X-XSS-Protection - Enable XSS filtering
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          // Referrer-Policy - Control referrer information
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ],
      },
    ];
  },
};

export default nextConfig;
