import React from 'react'
import { graphql } from 'gatsby'
import { BlogPage } from '@components'
import { IAllMdxData } from '@interfaces'

const Go = ({ data }: IAllMdxData) => {
  return <BlogPage title="Go" color="golang" data={data} />
}

export const query = graphql`
  query GoQuery {
    allMdx(
      filter: {
        slug: { regex: "/go/" }
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

export default Go
