module.exports = {
  async rewrites() {
    return [
      {
        // used to serve sitemap.js from the project root as "sitemap.xml"
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ];
  }
}
