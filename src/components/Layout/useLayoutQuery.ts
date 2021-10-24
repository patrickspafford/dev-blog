import { useStaticQuery, graphql } from 'gatsby'
import { IUseLayoutStaticQuery } from './types'
import { IGroupedMarkdownPosts } from '@interfaces'

const useLayoutQuery = () => {
  const queryResult: IUseLayoutStaticQuery = useStaticQuery(graphql`
    query LayoutQuery {
      allMdx {
        nodes {
          frontmatter {
            category
            date
            featured
            title
            minuteRead
          }
          slug
        }
      }
    }
  `)
  const groupedMarkdownPosts: IGroupedMarkdownPosts = {}
  queryResult.allMdx.nodes.forEach((node) => {
    const { category } = node.frontmatter
    if (!groupedMarkdownPosts[category]) {
      groupedMarkdownPosts[category] = [
        { ...node.frontmatter, slug: node.slug },
      ]
    } else {
      groupedMarkdownPosts[category].push({
        ...node.frontmatter,
        slug: node.slug,
      })
    }
  })
  return groupedMarkdownPosts
}

export default useLayoutQuery
