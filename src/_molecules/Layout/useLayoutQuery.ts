import { useStaticQuery, graphql } from 'gatsby'
import { IUseLayoutQuery } from './types'

const useLayoutQuery = () => {
  const queryResult: IUseLayoutQuery = useStaticQuery(graphql`
    query LayoutQuery {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `)
  const paths = queryResult.allSitePage.nodes.map((node) => {
    return node.path
  })
  return paths
}

export default useLayoutQuery
