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
          }
        }
      }
    }
  `)
  const groupedMarkdownPosts: IGroupedMarkdownPosts = {}
  queryResult.allMdx.nodes.forEach((node) => {
    const { category } = node.frontmatter
    if (!groupedMarkdownPosts[category]) {
      groupedMarkdownPosts[category] = [node.frontmatter]
    } else {
      groupedMarkdownPosts[category].push(node.frontmatter)
    }
  })
  return groupedMarkdownPosts
}

export default useLayoutQuery
