import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout/Layout';
import Seo from '../components/Seo/Seo';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
	<Layout>
		<Seo title={frontmatter.title}></Seo>
		<div
          className="content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
	</Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
		title
		category
      }
    }
  }
`