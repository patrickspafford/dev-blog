import React from 'react'
import { graphql } from 'gatsby'
import { Layout, H1, BouncingItem } from '@components'

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile {
      nodes {
        name
      }
    }
  }
`

interface Node {
  name: string
}

interface IBlogQuery {
  allFile: {
    nodes: Node[]
  }
}

interface IHome {
  data: IBlogQuery
}

const Home = ({ data }: IHome) => (
  <Layout pageTitle="Home">
    <H1>Ahoy</H1>
    <ul>
      {data.allFile.nodes.map((node) => {
        return (
          <li key={node.name} className="dark:text-white">
            {node.name}
          </li>
        )
      })}
    </ul>
    <BouncingItem />
  </Layout>
)

export default Home
