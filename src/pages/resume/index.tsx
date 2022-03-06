import {
  Layout,
  H1,
  TableOfContents,
  Paragraph,
  Bar,
  Section,
  MdxProvider,
} from '@components'
import React from 'react'
import { graphql } from 'gatsby'
import { IMdxNodeData } from '@interfaces'

const Resume = ({ data }: IMdxNodeData) => {
  return (
    <Layout
      pageTitle={data.mdx.frontmatter.title}
      description={data.mdx.excerpt}
      imageLink={data.mdx.frontmatter.featuredImage.publicURL}
    >
      <Section className="px-6 md:pl-12 xl:pr-0 grid grid-cols-1 xl:grid-cols-toc gap-4 min-h-screen h-full">
        <article className="max-w-post py-8 min-h-huge">
          <H1 className="text-black font-bold uppercase">
            {data.mdx.frontmatter.title}
          </H1>
          <Bar />
          <Paragraph className="inline-block mr-4">
            {data.mdx.frontmatter.date}
          </Paragraph>
          <MdxProvider>{data.mdx.body}</MdxProvider>
        </article>
        <div className="hidden xl:block relative shadow-xl">
          <TableOfContents items={data.mdx.tableOfContents.items} />
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ResumeQuery {
    mdx(frontmatter: { category: { eq: "Resume" } }) {
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

export default Resume
