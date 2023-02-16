import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { GatsbySeo } from 'gatsby-plugin-next-seo'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <GatsbySeo title={frontmatter.slug} />
      <div className="grid-content--center-6">
        <div>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
        <Link styleName="footer" href="/">
          Agree & Close
        </Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
