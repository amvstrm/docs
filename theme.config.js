export default {
  github: 'https://github.com/amvstrm/docs',
  docsRepositoryBase: 'https://github.com/amvstrm/docs/blob/master',
  titleSuffix: ' – amvstrm',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">amvstrm Documentation</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        The Official Documentation for amvstrm
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="amvstrm Official Documentation" />
      <meta name="og:description" content="amvstrm Official Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="og.png" />
      <meta name="twitter:site:domain" content="docs.amvstr.ml" />
      <meta name="twitter:url" content="https://docs.amvstr.ml" />
      <meta name="og:title" content="amvstrm Official Documentation" />
      <meta name="og:image" content="og.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © amvstrm.</>,
  unstable_faviconGlyph: '📖',
}
