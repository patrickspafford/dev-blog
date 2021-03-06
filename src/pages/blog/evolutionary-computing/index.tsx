import React from 'react'
import { graphql } from 'gatsby'
import { BlogPage } from '@components'
import { IAllMdxData } from '@interfaces'
import { FaDna } from 'react-icons/fa'

const EvolutionaryComputing = ({ data }: IAllMdxData) => {
  return (
    <BlogPage
      title="Evolutionary Computing"
      color="evComputing"
      icon={FaDna}
      data={data}
    />
  )
}

export const query = graphql`
  query EvolutionaryComputingQuery {
    allMdx(
      filter: {
        slug: { regex: "/evolutionary-computing/" }
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

export default EvolutionaryComputing
