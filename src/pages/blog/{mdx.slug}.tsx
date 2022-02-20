import {
  Layout,
  H1,
  Paragraph,
  Bar,
  Span,
  Section,
  CodeBlock,
  RoundedLabelGroup,
  RoundedLabel,
} from '@components'
import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { IMarkdownPostFrontMatter } from '@interfaces'
import { MDXProvider } from '@mdx-js/react'
import { useViewCounter } from '@hooks'

interface ITableOfContentsItem {
  url: string
  title: string
}

interface IPostQueryResult {
  data: {
    mdx: {
      frontmatter: IMarkdownPostFrontMatter
      body: any
      slug: string
      tableOfContents: {
        items?: ITableOfContentsItem[] | undefined
      }
    }
  }
}

const Post = ({ data }: IPostQueryResult) => {
  const { hits: viewCounter, loading } = useViewCounter({
    slug: data.mdx.slug,
    readOnly: false,
  })
  console.log(data)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Section className="md:pl-12 xl:pr-0 grid grid-cols-1 xl:grid-cols-toc gap-4 min-h-screen h-full">
        <article className="max-w-post py-8 min-h-huge">
          <H1 className="font-sourceCode text-black">
            {data.mdx.frontmatter.title}
          </H1>
          <Bar />
          <RoundedLabelGroup loading={loading}>
            <Paragraph className="inline-block mr-4">
              {data.mdx.frontmatter.date}
            </Paragraph>
            <RoundedLabel>
              {data.mdx.frontmatter.minuteRead} min read
            </RoundedLabel>
            <RoundedLabel>{viewCounter} views</RoundedLabel>
          </RoundedLabelGroup>
          <div className="py-6">
            <MDXProvider
              components={{
                p: Paragraph,
                h1: (props) => (
                  <div
                    className="mt-12 mb-6"
                    id={`${props.children
                      .toString()
                      .split(' ')
                      .join('-')
                      .toLowerCase()}`}
                  >
                    <H1 className="text-black font-semibold">
                      {props.children}
                    </H1>
                    <Bar />
                  </div>
                ),
                code: CodeBlock,
              }}
            >
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </article>
        <div className="hidden xl:block relative shadow-xl">
          <nav className="sticky top-24 left-0 bottom-0 overflow-y-scroll h-full-minus-header hide-scrollbar p-4">
            <Span className="block text-lg w-full text-center font-semibold text-gray-500">
              Table of Contents
            </Span>
            <div className="w-full mt-4">
              {data.mdx.tableOfContents.items
                ? data.mdx.tableOfContents.items.map((item, idx) => {
                    return (
                      <Link to={item.url}>
                        <Span className="mb-3 text-gray-500">{item.title}</Span>
                      </Link>
                    )
                  })
                : 'This post has no sections.'}
            </div>
          </nav>
        </div>
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
      tableOfContents
    }
  }
`

export default Post
