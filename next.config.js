/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")
const ContentSecurityPolicy = `
  default-src 'self' 127.0.0.1:8000;

  script-src 'unsafe-eval' 'self' *.googletagmanager.com 127.0.0.1:8000;

  child-src 'self';

  style-src 'self' 'unsafe-inline' 127.0.0.1:8000;

	style-src-elem 'self' 'unsafe-inline' 127.0.0.1:8000;

  font-src 'self' 127.0.0.1:8000 data:;  

	img-src 'self' 127.0.0.1:8000 data:;

	script-src-elem 'self' 'unsafe-inline' 127.0.0.1:8000 *.googletagmanager.com;

	connect-src 'self' *.google-analytics.com www.google-analytics.com 127.0.0.1:8000;

	frame-src 'self' 127.0.0.1:8000;
`

const securityHeaders = [
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=63072000; includeSubDomains; preload",
	},
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
	},
	{
		key: "X-Frame-Options",
		value: "SAMEORIGIN",
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "Referrer-Policy",
		value: "strict-origin-when-cross-origin",
	},
	{
		key: "Permissions-Policy",
		value: "fullscreen=()",
	},
	{
		key: "Content-Security-Policy",
		value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim(),
	},
]
const nextConfig = {
	i18n,
	reactStrictMode: true,
	async headers() {
		return [
			{
				// Apply these headers to all routes in your application.
				source: "/:path*",
				headers: securityHeaders,
			},
		]
	},
	poweredByHeader: false,
	reactStrictMode: false,
	images: {
		domains: ["localhost", "127.0.0.1"],
	},
}

module.exports = nextConfig
