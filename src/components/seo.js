import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        console.log('data.site.siteMetadata', data.site.siteMetadata);
        return (
          <Helmet
            htmlAttributes={ { lang } }              
            title={title}
            titleTemplate={data.site.siteMetadata.title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: data.site.siteMetadata.titleShort,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: data.site.siteMetadata.titleShort
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: data.site.siteMetadata.image
              },
              {
                name: `twitter:url`,
                content: data.site.siteMetadata.url
              },
              {
                name: `og:type`,
                content: `website`
              },
              {
                name: `og:url`,
                content: data.site.siteMetadata.url
              },
              {
                name: `og:title`,
                content: data.site.siteMetadata.titleShort
              },
              {
                name: `og:description`,
                content: metaDescription
              },
              {
                name: `og:image`,
                content: data.site.siteMetadata.image
              },
              {
                name: `theme-color`,
                content: '#97c33b'
              },
              {
                name: `msapplication-navbutton-color`,
                content: '#97c33b'
              },
              {
                name: `apple-mobile-web-app-status-bar-style`,
                content: '#97c33b'
              }
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
