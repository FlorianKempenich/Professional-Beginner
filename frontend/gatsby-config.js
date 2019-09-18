module.exports = {
  siteMetadata: {
    title: "Professional Beginner",
    siteUrl: "https://professionalbeginner.com",
    config: {
      postsPerPage: 6
    }
  },
  plugins: [
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("autoprefixer")]
      }
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!--end-->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
              showCaptions: true,
              quality: 100
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: "±",
              prompt: {
                user: "floriankempenich",
                host: "localhost",
                global: false
              }
            }
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Professional Beginner",
        short_name: "PB",
        start_url: "/",
        background_color: "#FFFCF5",
        theme_color: "#A59E94",
        // Enaables the "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 100
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/pages/*`] }
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `professionalbeginner`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/post/*", `/debug/*`, `/manifesto`]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-61995895-2",
        anonymize: true,
        exclude: ["/post/*", `/debug/*`, `/manifesto`]
      }
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [
          {
            userAgent: "*",
            allow: "/",
            disallow: ["/debug"]
          }
        ]
      }
    }
  ]
};