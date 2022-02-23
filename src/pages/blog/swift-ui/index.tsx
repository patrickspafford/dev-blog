import React from 'react'
import { graphql } from 'gatsby'
import { BlogPage } from '@components'
import { IAllMdxData } from '@interfaces'

const SwiftUI = ({ data }: IAllMdxData) => {
  return <BlogPage title="SwiftUI" color="swiftUI" data={data} />
}

export const query = graphql`
  query SwiftUIQuery {
    allMdx(
      filter: {
        slug: { regex: "/swift-ui/" }
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

export default SwiftUI
