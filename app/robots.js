export default function robots() {
  const baseUrl = 'https://arindamgupta.dev'; // Replace with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
