import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Kreee's Home Page`,
    siteUrl: `https://www.ohmykreee.top`,
    description: `Home page of ohmykreee.top`,
    image: `/cover.jpg`,
    twitterUsername: `@ohmykreee`,
    sourceCode: `https://github.com/ohmykreee/kreee-home-page`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sitemap",

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            require(`remark-gfm`),
          ],
        },
      },
    },

    // { resolve: 'gatsby-source-filesystem',
    //   options: {
    //     "name": "pages",
    //     "path": "./src/pages/"
    //   },
    //   __key: "pages"
    // },
    { 
      resolve: 'gatsby-source-filesystem',
      options: {
        "path": "./src/mdx/"
      },
    },

    { 
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Ubuntu Mono`,
            file: `https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400&display=swap`,
          },
        ],
      },
    },

    "gatsby-transformer-json",

    { 
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  
  "gatsby-plugin-sass",
  "gatsby-plugin-catch-links"
]
};

export default config;
