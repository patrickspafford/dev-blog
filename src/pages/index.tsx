import React, { useEffect, useState } from 'react'
import { graphql, Link } from 'gatsby'
import {
  Layout,
  BouncingItem,
  Section,
  H1,
  Span,
  Button,
  TypewriterChain,
} from '@components'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import { Typewriter } from 'react-typewriting-effect'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism.css'
import { Muffin } from '@images'

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
  return (
    <Layout pageTitle="Home">
      <Section className="pt-8 flex relative flex-col bg-mountain bg-cover">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-deepBlue to-transparentDeepBlue bg-opacity-75 z-0" />
        <div className="flex-1 flex justify-between flex-col z-10 pt-16 pb-16">
          <div className=" flex justify-start gap-4 items-center">
            <div className="bg-react-native bg-contain h-24 w-24" />
            <H1 className="font-sourceCode font-bold text-white text-4xl">
              Patrick Spafford
            </H1>
          </div>
          <TypewriterChain
            className={`block font-sourceCode text-white mt-6 mb-6 max-w-article text-xl`}
            delay={80}
            lines={[
              {
                line: 'Hello (and Welcome) World!',
                delayAfter: 1000,
              },
              {
                line: `If it wasn't already obvious, my name is Patrick Spafford, and I enjoy creating things with code. :)`,
                delayAfter: 1000,
              },
              {
                line: `...And in case you were curious, this isn't just some stock image. I took this photo of Mt. Rainier in July of 2020.`,
                delayAfter: 5000,
              },
            ]}
          />
          <div className="flex justify-start flex-wrap gap-8">
            <Button href="/blog">Start Reading</Button>
            <Button href="/resume">View Resume</Button>
          </div>
        </div>
      </Section>
      <Section className="bg-gray-50">
        <Editor
          value={`const helloWorld = () => {
            alert('Hello world!');
          }`}
          disabled
          onValueChange={() => {}}
          padding={16}
          highlight={(v) => highlight(v, languages.js)}
          className="text-2xl"
        />
      </Section>
      <BouncingItem />
    </Layout>
  )
}

export default Home
