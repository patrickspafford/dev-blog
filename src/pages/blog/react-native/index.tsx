import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Layout, Section, BlogCard } from '@components'
import { IMarkdownPostFrontMatter } from '@interfaces'
import { useTailwindTheme, useViewCounter } from '@hooks'

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

interface IReactNativeViews {
  [k: string]: number
}

const ReactNative = ({ data }: IReactNativeQueryResult) => {
  const theme = useTailwindTheme()
  const [reactNativeViews, setReactNativeViews] = useState<IReactNativeViews>(
    {},
  )
  console.log('RN Views: ', reactNativeViews)
  const { getAndIncrementViews } = useViewCounter({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const effect = async () => {
      try {
        const localRNViews: IReactNativeViews = {}
        await Promise.all(
          data.allMdx.nodes.map(async (node) => {
            localRNViews[node.slug] = await getAndIncrementViews({
              slug: node.slug,
              readOnly: true,
            })
          }),
        )
        setReactNativeViews(localRNViews)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    effect()
  }, [])
  return (
    <Layout pageTitle="React Native">
      <Section className="px-1 md:px-8">
        <div className="grid grid-cols-2 p-1 gap-1 sm:p-4 sm:gap-4">
          {data.allMdx.nodes.map((node) => {
            return (
              <BlogCard
                key={node.frontmatter.slug}
                views={reactNativeViews[node.slug] ?? 0}
                loading={loading}
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
          featuredImage {
            childImageSharp {
              gatsbyImageData
            }
          }
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
