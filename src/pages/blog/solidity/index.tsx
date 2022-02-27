import React from 'react'
import { graphql } from 'gatsby'
import { BlogPage } from '@components'
import { IAllMdxData } from '@interfaces'
import { FaEthereum } from 'react-icons/fa'

const Solidity = ({ data }: IAllMdxData) => {
  return (
    <BlogPage title="Solidity" color="solidity" data={data} icon={FaEthereum} />
  )
}

export const query = graphql`
  query SolidityQuery {
    allMdx(
      filter: {
        slug: { regex: "/solidity/" }
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

export default Solidity
