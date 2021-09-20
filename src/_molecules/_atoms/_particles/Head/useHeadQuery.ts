import { graphql, useStaticQuery } from 'gatsby'
import { IHeadQuery } from './types'

const useHeadQuery = () => {
  const data: IHeadQuery = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return data
}

export default useHeadQuery
