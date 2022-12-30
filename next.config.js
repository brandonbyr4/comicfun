/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_ANALYTICS_GID: process.env.GOOGLE_ANALYTICS_GID || "none",
    MICROSOFT_CLARITY_ID: process.env.MICROSOFT_CLARITY_ID || "none",
    SENDINBLUE_API_KEY: process.env.SENDINBLUE_API_KEY || "none",
  }
}

module.exports = nextConfig
