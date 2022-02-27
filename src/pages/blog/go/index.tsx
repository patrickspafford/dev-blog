import React from 'react'
import { graphql } from 'gatsby'
import { BlogPage } from '@components'
import { IAllMdxData } from '@interfaces'
import { SiGo } from 'react-icons/si'

const Go = ({ data }: IAllMdxData) => {
  return <BlogPage title="Go" color="golang" data={data} icon={SiGo} />
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
