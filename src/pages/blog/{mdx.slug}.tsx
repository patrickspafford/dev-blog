import {
  Layout,
  H1,
  H2,
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
import { IMdxNodeData } from '@interfaces'
import { MDXProvider } from '@mdx-js/react'
import { useViewCounter } from '@hooks'

const Post = ({ data }: IMdxNodeData) => {
  const { hits: viewCounter, loading } = useViewCounter({
    slug: data.mdx.slug,
    readOnly: false,
  })
  return (
    <Layout
      pageTitle={data.mdx.frontmatter.title}
      description={data.mdx.excerpt}
      imageLink={data.mdx.frontmatter.featuredImage.publicURL}
    >
      <Section className="px-6 md:pl-12 xl:pr-0 grid grid-cols-1 xl:grid-cols-toc gap-4 min-h-screen h-full">
        <article className="max-w-post py-8 min-h-huge">
          <H1 className="font-sourceCode text-black">
            {data.mdx.frontmatter.title}
          </H1>
          <Bar />
          <RoundedLabelGroup loading={loading}>
            <Paragraph className="inline-block mr-4">
              {data.mdx.frontmatter.date}
            </Paragraph>
            <RoundedLabel>{data.mdx.timeToRead} min read</RoundedLabel>
            <RoundedLabel>
              {viewCounter} {viewCounter === 1 ? 'view' : 'views'}
            </RoundedLabel>
          </RoundedLabelGroup>
          <div className="py-6">
            <MDXProvider
              components={{
                p: Paragraph,
                h1: (props) => (
                  <div
                    className="mt-12 mb-6 scroll-margin-top-header"
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
                h2: (props) => (
                  <div
                    className="mt-8 mb-4 scroll-margin-top-header"
                    id={`${props.children
                      .toString()
                      .split(' ')
                      .join('-')
                      .toLowerCase()}`}
                  >
                    <H2 className="text-black font-semibold">
                      {props.children}
                    </H2>
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
                ? data.mdx.tableOfContents.items.map((item) => {
                    return (
                      <>
                        <Link to={item.url}>
                          <Span className="mb-3 text-gray-500 hover:opacity-50">
                            {item.title}
                          </Span>
                        </Link>
                        {item?.items?.map((subitem) => {
                          return (
                            <Link to={subitem.url}>
                              <Span className="mb-3 ml-2 text-gray-500 hover:opacity-50">
                                {subitem.title}
                              </Span>
                            </Link>
                          )
                        })}
                      </>
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
        featuredImage {
          publicURL
        }
      }
      body
      slug
      tableOfContents
      timeToRead
      excerpt
    }
  }
`

export default Post
