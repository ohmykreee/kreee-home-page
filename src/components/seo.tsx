import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

interface SEO {
  title?: string
  description?: string
  pathname?: string
  children?: JSX.Element
}

export const SEO = ({ title, description, pathname, children }: SEO): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitterUsername
          image
          siteUrl
        }
      }
    }
  `).site.siteMetadata

  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = data

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
    baseUrl: siteUrl,
  }

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en-us",
        }}
      />
      <title>{seo.title}</title>

      <meta name="siteBaseUrl" content={seo.baseUrl} />
      <meta charSet="utf-8" />
      <meta http-httpEquiv="content-language" content="en-US" />
      <meta name="author" content="Kreee" />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content="kreee,personal,responsive,font awesome,react" />
      <meta name="title" content={seo.title} />
      <meta itemProp="name" content={seo.title} />
      <meta itemProp="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:site_name" content="Kreee's Home Page" />
      <meta property="og:type" content="website" />
      <meta name="image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      {children}
    </>
  )
}