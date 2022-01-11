import { Layout, H1, Paragraph, Bar, Section } from '@components'
import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { IMarkdownPostFrontMatter } from '@interfaces'
import { MDXProvider } from '@mdx-js/react'

interface IPostQueryResult {
  data: {
    mdx: {
      frontmatter: IMarkdownPostFrontMatter
      body: any
    }
  }
}

const Post = ({ data }: IPostQueryResult) => {
  console.log(data)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Section className="md:pl-12 md:px-12 grid grid-cols-post">
        <article className="max-w-post py-8">
          <H1 className="font-sourceCode text-black">
            {data.mdx.frontmatter.title}
          </H1>
          <Bar />
          <Paragraph className="inline-block mr-4">
            {data.mdx.frontmatter.date}
          </Paragraph>
          <Paragraph className="inline-block mx-4 text-gray-500 border-nextjs border rounded-full px-3 py-1.5">
            {data.mdx.frontmatter.minuteRead} minute read
          </Paragraph>
          <MDXProvider
            components={{
              p: Paragraph,
            }}
          >
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </article>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        minuteRead
      }
      body
    }
  }
`

export default Post
