import React from 'react'
import { graphql } from 'gatsby'
import { BlogPage } from '@components'
import { IAllMdxData } from '@interfaces'
import { FaReact } from 'react-icons/fa'

const ReactNative = ({ data }: IAllMdxData) => {
  return (
    <BlogPage
      title="React Native"
      color="reactNative"
      icon={FaReact}
      data={data}
    />
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
