require(`dotenv`).config({
  path: `.env`,
})

const newsletterFeed = require(`./src/utils/feed`)

module.exports = {
  siteMetadata: {
    title: `Торговля фьючерсами, опционами и акциями на российских и зарубежных площадках`,
    titleAlt: `Сайт для тех, кто торгует фьючерсами, опционами и акциями на российских и зарубежных площадках`,
    siteUrl: `https://vertuozzo.com`,
    description: `Данный сайт предназначен для трейдеров, которые торгуют фьючерсами, опционами и акциями на MOEX и CME`,
    headline: `Данный сайт предназначен для трейдеров, которые торгуют фьючерсами, опционами и акциями на MOEX и CME`,
    language: `ru`,
    image: `/banner.png`,
    author: `vertuozzo`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [ { resolve: `gatsby-remark-autolink-headers`, options: { icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill="white" fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`, } }, `gatsby-remark-smartypants`, { resolve: `gatsby-remark-images`, options: { maxWidth: 1200, linkImagesToOriginal: false, quality: 90, withWebp: true, backgroundColor: 'transparent', }, }, ],
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-smartypants`, `gatsby-remark-images`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `newsletter`,
        path: `${__dirname}/newsletter`,
        ignore: [`**/\.*`],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Results`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-feed`,
      options: newsletterFeed,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Сайт для тех, кто торгует фьючерсами, опционами и акциями на российских и зарубежных площадках`,
        short_name: `ТорговляФьючерсамиОпционамиАкциями`,
        description: `Данный сайт предназначен для трейдеров, которые торгуют фьючерсами, опционами и акциями на MOEX и CME`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#5A67D8`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-netlify`,
  ],
}
