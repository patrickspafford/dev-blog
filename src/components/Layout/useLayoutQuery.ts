import { useStaticQuery, graphql } from 'gatsby'
import { IMdxQueryNode } from '@interfaces'
import { IUseLayoutStaticQuery } from './types'

const useLayoutQuery = () => {
  const queryResult: IUseLayoutStaticQuery = useStaticQuery(graphql`
    query LayoutQuery {
      blogPosts: allMdx(
        filter: {
          frontmatter: { featured: { eq: true }, category: { eq: "Blog" } }
        }
      ) {
        nodes {
          frontmatter {
            category
            date
            featured
            title
          }
          slug
          timeToRead
        }
      }
      other: allMdx(filter: { frontmatter: { category: { ne: "Blog" } } }) {
        nodes {
          frontmatter {
            category
            date
            featured
            title
          }
          slug
          timeToRead
        }
      }
    }
  `)
  const groupedMarkdownPosts: Record<string, Partial<IMdxQueryNode>[]> = {}
  const queryResultNodes = [
    ...queryResult.blogPosts.nodes,
    ...queryResult.other.nodes,
  ]
  queryResultNodes.forEach((node) => {
    const { category } = node.frontmatter
    if (!groupedMarkdownPosts[category]) {
      groupedMarkdownPosts[category] = [
        {
          frontmatter: node.frontmatter,
          slug: node.slug,
          body: null,
          tableOfContents: {
            items: undefined,
          },
          timeToRead: 0,
        },
      ]
    } else {
      groupedMarkdownPosts[category].push({
        frontmatter: node.frontmatter,
        slug: node.slug,
        body: null,
        tableOfContents: {
          items: undefined,
        },
        timeToRead: 0,
      })
    }
  })
  return groupedMarkdownPosts
}

export default useLayoutQuery
