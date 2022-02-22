import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Section, BlogCard } from '@components'
import { IMarkdownPostFrontMatter } from '@interfaces'
import { useTailwindTheme, useCategoryViews } from '@hooks'

interface IReactNativeBlogPost {
  slug: string
  frontmatter: IMarkdownPostFrontMatter
  timeToRead: number
}

interface IReactNativeQueryResult {
  data: {
    allMdx: {
      nodes: IReactNativeBlogPost[]
    }
  }
}

const ReactNative = ({ data }: IReactNativeQueryResult) => {
  const theme = useTailwindTheme()
  const { views, loading } = useCategoryViews({ data })
  return (
    <Layout pageTitle="React Native">
      <Section className="px-1 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 p-1 gap-1 sm:p-4 sm:gap-4">
          {data.allMdx.nodes.map((node) => {
            return (
              <BlogCard
                key={node.frontmatter.slug}
                views={views[node.slug] ?? 0}
                loading={loading}
                accentColor={theme.colors.reactNative}
                frontmatter={node.frontmatter}
                slug={node.slug}
                timeToRead={node.timeToRead}
              />
            )
          })}
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query ReactNativeQuery {
    allMdx(
      filter: {
        slug: { regex: "/react-native/" }
        frontmatter: { category: { eq: "Blog" } }
      }
    ) {
      nodes {
        frontmatter {
          category
          date
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
          featured
          title
        }
        slug
        timeToRead
      }
    }
  }
`

export default ReactNative
