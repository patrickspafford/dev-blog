import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  BouncingItem,
  Section,
  H1,
  Span,
  Button,
  TypewriterChain,
  IconSwitcher,
  Bar,
  Paragraph,
  DraggableFirestoreList,
} from '@components'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism.css'
import { FaBars, FaBookOpen, FaHamburger } from 'react-icons/fa'
import { useTailwindTheme } from '@hooks'
import { SiFirebase } from 'react-icons/si'
import { Home as HomeContent } from '@content'

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

import firebase from 'firebase'
import useFirestoreListener from 'react-firestore-listener'
const firebaseConfig = {
  apiKey: 'AIzaSyClqB02diH6m6kG4fjjWXixxyU5TWK3OLg',
  authDomain: 'dev-blog-b454b.firebaseapp.com',
  projectId: 'dev-blog-b454b',
  storageBucket: 'dev-blog-b454b.appspot.com',
  messagingSenderId: '1242265426',
  appId: '1:1242265426:web:afa5456e05565a3b276c8b',
}

// Initialize Firebase
if (
  firebase !== undefined &&
  firebase.apps !== undefined &&
  !firebase.apps.length
) {
  firebase.initializeApp(firebaseConfig)
}

const Home = () => {
  const theme = useTailwindTheme()
  const frogs = useFirestoreListener({
    collection: 'frogs',
    options: {
      conditions: [],
      orderBy: [
        {
          field: 'order',
          descending: false,
        },
      ],
    },
  })
  return (
    <Layout pageTitle="Home">
      <Section className="pt-8 flex relative flex-col bg-mountain bg-cover">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-deepBlue to-transparentDeepBlue bg-opacity-75 z-0" />
        <div className="flex-1 flex justify-between flex-col z-10 pt-16 pb-16">
          <div className="flex justify-start gap-4 items-center">
            <IconSwitcher />
            <H1 className="font-bold text-white text-4xl font-sourceCode">
              Patrick Spafford (Site in Progress)
            </H1>
          </div>
          <TypewriterChain
            className={`block font-sourceCode text-white mt-6 mb-6 max-w-article text-xl`}
            delay={80}
            lines={HomeContent.typewriterChain}
          />
          <div className="flex justify-start flex-wrap gap-8">
            <Button href="/blog">Start Reading</Button>
            <Button href="/resume">View Resume</Button>
          </div>
        </div>
      </Section>
      <Section className="bg-gray-50">
        <div className="pt-12 pb-0 font-sourceCode flex items-end gap-4 text-lg">
          <SiFirebase className="inline-block h-8 w-8" />
          <span className="text-black text-lg">Project Spotlight:</span>
          <code className="bg-gray-100 text-lg">react-firestore-listener</code>
        </div>
        <Bar />
        {HomeContent.projectSpotlightDesc.map((descPiece) => (
          <Paragraph className="text-black p-2 pr-6 text-lg" key={descPiece}>
            {descPiece}
          </Paragraph>
        ))}
        <div className="flex items-start flex-wrap border-t border-nextjs">
          <Editor
            value={HomeContent.codeSnippet}
            disabled
            onValueChange={() => {}}
            padding={24}
            highlight={(v) => highlight(v, languages.js)}
            className="text-2xl flex-2  border-r border-nextjs"
          />
          <div className="flex-1 pl-4 pt-4 pr-8">
            <span className="text-black text-xl">List of Frogs</span>
            <Bar />
            <DraggableFirestoreList docs={frogs} />
          </div>
        </div>
      </Section>
      <div className="relative">
        <BouncingItem />
        <Section className="z-1 relative flex flex-col justify-evenly">
          <Span className="text-black text-2xl flex items-center">
            Like What You've Read So Far?
            <FaBookOpen
              color={theme.colors.black}
              className="inline-block m-4 text-center"
            />
          </Span>
          <div className="pr-8">
            <Span className="text-black text-xl pb-2">
              Sign up for my newsletter for updates!
            </Span>
            <Span className="text-black text-xl pt-2">
              If not, feel free to wait here until the bouncing icon hits the
              corner perfectly.
            </Span>
          </div>
          <form
            className="flex items-center justify-start gap-1"
            action="https://github.us20.list-manage.com/subscribe/post?u=922c792acef7b7aa9d045abbb&amp;id=fa39632237"
            method="post"
          >
            <input
              type="email"
              id="mce-EMAIL"
              placeholder="Your Email"
              name="EMAIL"
              className="border-nextjs border w-96 min-w-sm h-12 p-2 pl-6 outline-none bg-opacity-90 bg-white focus:ring focus:border-typescriptBlue shadow-lg"
            />
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_922c792acef7b7aa9d045abbb_fa39632237"
                tabIndex={-1}
                value=""
              />
            </div>
            <input
              className="shadow-lg h-12 pl-6 pr-6 pt-2 pb-2 bg-typescriptBlue text-white cursor-pointer hover:opacity-50 font-sourceCode"
              type="submit"
              value="SIGN UP"
            />
          </form>
        </Section>
      </div>
      <Section className="bg-left-bottom bg-cover h-16 relative bg-rainier border-t border-gray-200">
        <div />
      </Section>
    </Layout>
  )
}

export default Home
