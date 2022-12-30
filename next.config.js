/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_ANALYTICS_GID: process.env.GOOGLE_ANALYTICS_GID || "none",
    MICROSOFT_CLARITY_ID: process.env.MICROSOFT_CLARITY_ID || "none",
    MAILCHIMP_AUDIENCE_ID: process.env.MAILCHIMP_AUDIENCE_ID || "none",
    MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || "none",
    MAILCHIMP_API_SERVER: process.env.MAILCHIMP_API_SERVER || "none",
  }
}

module.exports = nextConfig
