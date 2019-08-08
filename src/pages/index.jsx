import React from "react";
import Header from "../components/header";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <Header headerText={data.site.siteMetadata.title} />
    <p>
      <Link to="/about-css-modules/">About CSS Modules</Link>
    </p>

    <img
      style={{ borderRadius: "10px" }}
      src="https://source.unsplash.com/random/400x200"
      alt=""
    />

    <hr />
    <div className="blog-posts">
      <h2>Blog Posts</h2>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.excerpt}</p>
            <pre>{node.fields.slug}</pre>
          </li>
        ))}
      </ul>
    </div>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/blog/posts/**/index.md" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
  }
`;
