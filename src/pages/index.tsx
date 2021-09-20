import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '@molecules'

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
    <h1 className="text-3xl">Ahoy</h1>
    <ul>
      {data.allFile.nodes.map((node) => {
        return <li key={node.name}>{node.name}</li>
      })}
    </ul>
  </Layout>
)

export default Home
