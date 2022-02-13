import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Section, BlogCard } from '@components'
import { IMarkdownPostFrontMatter } from '@interfaces'
import { useTailwindTheme } from '@hooks'

interface IReactNativeBlogPost {
  slug: string
  frontmatter: IMarkdownPostFrontMatter
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
  console.log('RN: ', data)
  return (
    <Layout pageTitle="React Native">
      <Section className="px-1 md:px-8">
        <div className="grid grid-cols-2 p-1 gap-1 sm:p-4 sm:gap-4">
          {data.allMdx.nodes.map((node) => {
            return (
              <BlogCard
                key={node.frontmatter.slug}
                views={100}
                accentColor={theme.colors.reactNative}
                frontmatter={node.frontmatter}
                slug={node.slug}
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
          featuredImage
          featured
          minuteRead
          title
        }
        slug
      }
    }
  }
`

export default ReactNative
