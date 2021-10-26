import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { Layout, H1, BouncingItem, FlexDiv, Paragraph } from '@components'
import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          title
          minuteRead
        }
      }
    }
  }
`

interface IBlogQuery {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string
        title: string
        minuteRead: number
      }
    }[]
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
      <ul className="grid grid-cols-2 gap-4">
        {data.allMdx.nodes.map((node) => {
          return (
            <li
              key={node.frontmatter.title}
              className="dark:text-white w-full p-8 pb-4 bg-white shadow-md mt-8 mb-8 hover:opacity-50 cursor-pointer opacity-95"
            >
              <Paragraph>{node.frontmatter.title}</Paragraph>
            </li>
          )
        })}
      </ul>
      <BouncingItem />
    </Layout>
  )
}

export default Home
