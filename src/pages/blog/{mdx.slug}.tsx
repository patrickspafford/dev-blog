import { Layout, H1, Paragraph, Bar, Section, CodeBlock } from '@components'
import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { IMarkdownPostFrontMatter } from '@interfaces'
import { MDXProvider } from '@mdx-js/react'
import { useClassNames, useViewCounter } from '@hooks'

interface IPostQueryResult {
  data: {
    mdx: {
      frontmatter: IMarkdownPostFrontMatter
      body: any
      slug: string
    }
  }
}

const Post = ({ data }: IPostQueryResult) => {
  const { hits: viewCounter, loading } = useViewCounter({
    slug: data.mdx.slug,
    readOnly: false,
  })
  const classNames = useClassNames()
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Section className="md:pl-12 md:px-12 grid grid-cols-post">
        <article className="max-w-post py-8">
          <H1 className="font-sourceCode text-black">
            {data.mdx.frontmatter.title}
          </H1>
          <Bar />
          <Paragraph className="inline-block mr-4 ">
            {data.mdx.frontmatter.date}
          </Paragraph>
          <Paragraph className="inline-block mx-4 text-gray-500 border-nextjs border rounded-full px-3 py-1.5">
            {data.mdx.frontmatter.minuteRead} minute read
          </Paragraph>
          <Paragraph
            className={classNames(
              'inline-block mx-4 text-gray-500 border-nextjs border rounded-full px-3 py-1.5 opacity-0 transition-opacity duration-300',
              !loading && 'opacity-100',
            )}
          >
            {viewCounter} views
          </Paragraph>
          <div className="py-6">
            <MDXProvider
              components={{
                p: Paragraph,
                code: CodeBlock,
              }}
            >
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
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
      slug
    }
  }
`

export default Post
