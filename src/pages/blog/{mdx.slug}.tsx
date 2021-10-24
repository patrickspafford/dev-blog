import { Layout, H1, Paragraph, Bar } from '@components'
import React from 'react'
import { graphql } from 'gatsby'
import { IMarkdownPostFrontMatter } from '@interfaces'

interface IPostQueryResult {
  data: {
    mdx: {
      frontmatter: IMarkdownPostFrontMatter
    }
  }
}

const Post = ({ data }: IPostQueryResult) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <H1 className="font-sourceCode">{data.mdx.frontmatter.title}</H1>
      <Bar />
      <Paragraph>{data.mdx.frontmatter.date}</Paragraph>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default Post
