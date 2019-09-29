/* eslint arrow-body-style: 0 */

module.exports = {
  query: `
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          site_url: siteUrl
          language
          managingEditor: author
          webMaster: author
        }
      }
    }
  `,
  feeds: [
    {
      serialize: ({ query: { site, allNewsletter } }) => {
        return allNewsletter.nodes.map(newsletter => {
          return {
            title: `Запись в блоге от ` + newsletter.format_date,
            date: newsletter.date,
            //excerpt: newsletter.excerpt,
            url: site.siteMetadata.siteUrl + newsletter.slug,
            guid: site.siteMetadata.siteUrl + newsletter.slug,
            custom_elements: [{ "content:encoded": newsletter.html }],
          }
        })
      },
      query: `
        {
          allNewsletter(sort: { fields: date, order: DESC }) {
            nodes {
              title
              date
              format_date: date(formatString: "LL", locale: "ru")
              excerpt
              slug
              html
            }
          }
        }
      `,
      output: `rss.xml`,
      title: `Торговля фьючерсами на Московской Бирже - Блог`,
    },
  ],
}
