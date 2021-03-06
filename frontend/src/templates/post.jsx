import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styles from "./post.module.scss";
import { Disqus, CommentCount } from "gatsby-plugin-disqus";
import SEO from "../components/seo";

export const addExtraFormatting = html =>
  html.replace("---", "—").replace("...", "…");

export default ({ data, location }) => {
  const post = data.markdownRemark;
  const postUrl = data.site.siteMetadata.siteUrl + location.pathname;
  const heroImage = data.file.childImageSharp.fixed;
  const disqusConfig = {
    url: postUrl,
    identifier: post.fields.slug.slice(1),
    title: post.frontmatter.title
  };

  return (
    <Layout>
      <SEO 
      title={post.frontmatter.title} 
      image={heroImage} 
      description={post.excerpt}
      />
      <div className={styles.post}>
        <h1 id="post-title">{post.frontmatter.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: addExtraFormatting(post.html) }}
        ></div>
        <Disqus config={disqusConfig} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!, $heroGlob: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date
      }
      html
    }
    site {
      siteMetadata {
        siteUrl
      }
    }

    file(relativePath: { glob: $heroGlob }) {
      childImageSharp {
        fixed {
          height
          width
          src
        }
      }
    }
  }
`;
