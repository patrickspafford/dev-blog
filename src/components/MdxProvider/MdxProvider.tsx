import React, { ReactNode } from 'react'
import Paragraph from '../Paragraph'
import H1 from '../H1'
import Bar from '../Bar'
import H2 from '../H2'
import H3 from '../H3'
import H4 from '../H4'
import CodeBlock from '../CodeBlock'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import { Link } from 'gatsby'

interface IMdxProvider {
  children: any
}

const anchorify = (children: any) =>
  `${(children ?? '').toString().split(' ').join('-').toLowerCase()}`

const MdxProvider = ({ children }: IMdxProvider) => {
  return (
    <div className="py-6">
      <MDXProvider
        components={{
          p: Paragraph,
          a: (props) => (
            <Link
              to={props.href}
              id={anchorify(props.children)}
              className="text-typescriptBlue dark:text-blue-200 scroll-margin-top-header"
            >
              {props.children}
            </Link>
          ),
          h1: (props) => (
            <div
              className="mt-6 mb-12 scroll-margin-top-header"
              id={anchorify(props.children)}
            >
              <H1 className="text-black font-semibold">{props.children}</H1>
              <Bar />
            </div>
          ),
          h2: (props) => (
            <div
              className="mt-8 mb-4 scroll-margin-top-header"
              id={anchorify(props.children)}
            >
              <H2 className="text-black font-semibold">{props.children}</H2>
            </div>
          ),
          h3: (props) => (
            <div
              className="mt-6 my-3 scroll-margin-top-header"
              id={anchorify(props.children)}
            >
              <H3 className="text-black font-semibold">{props.children}</H3>
            </div>
          ),
          h4: (props) => (
            <div
              className="my-2 scroll-margin-top-header"
              id={anchorify(props.children)}
            >
              <H4 className="text-black font-semibold">{props.children}</H4>
            </div>
          ),
          ul: (props) => (
            <ul className="list-disc dark:text-white my-2">{props.children}</ul>
          ),
          li: (props) => (
            <li className="list-disc dark:text-white py-1 ml-4">
              {props.children}
            </li>
          ),
          code: CodeBlock,
        }}
      >
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default MdxProvider
