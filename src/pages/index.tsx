import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { Layout, H1, BouncingItem, FlexDiv } from '@components'
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

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

const Home = ({ data }: IHome) => {
  const [showSubheader, setShowSubheader] = useState(false)
  return (
    <Layout pageTitle="Home">
      <Typewriter
        className="block font-sourceCode text-black text-3xl"
        string="Hello and Welcome"
        onComplete={() => setShowSubheader(true)}
        stopBlinkinOnComplete
        delay={80}
      />
      {showSubheader && (
        <Typewriter
          className="block font-sourceCode text-black text-lg mt-4"
          string="Find some of my most recent dev articles below..."
          onComplete={() => {}}
          stopBlinkinOnComplete
          delay={80}
        />
      )}
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
}

export default Home
