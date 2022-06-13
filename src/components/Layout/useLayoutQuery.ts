import { useStaticQuery, graphql } from 'gatsby'
import { IAllMdxQuery, IMdxQueryNode } from '@interfaces'

const useLayoutQuery = () => {
  const queryResult: IAllMdxQuery = useStaticQuery(graphql`
    query LayoutQuery {
      allMdx(filter: { frontmatter: { featured: { eq: true } } }) {
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
  queryResult.allMdx.nodes.forEach((node) => {
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
