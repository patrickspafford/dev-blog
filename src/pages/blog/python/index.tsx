import React from 'react'
import { graphql } from 'gatsby'
import { BlogPage } from '@components'
import { IAllMdxData } from '@interfaces'
import { FaPython } from 'react-icons/fa'

const Python = ({ data }: IAllMdxData) => {
  return <BlogPage title="Python" color="python" icon={FaPython} data={data} />
}

export const query = graphql`
  query PythonQuery {
    allMdx(
      filter: {
        slug: { regex: "/python/" }
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

export default Python
