import React from 'react'
import { graphql } from 'gatsby'
import { BlogPage } from '@components'
import { IAllMdxData } from '@interfaces'
import { FaCodeBranch } from 'react-icons/fa'

const Projects = ({ data }: IAllMdxData) => {
  return (
    <BlogPage
      title="Projects"
      color="typescriptBlue"
      icon={FaCodeBranch}
      data={data}
      type=""
    />
  )
}

export const query = graphql`
  query AllProjectsQuery {
    allMdx(
      filter: {
        slug: { regex: "/projects/" }
        frontmatter: { category: { eq: "Projects" } }
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

export default Projects
