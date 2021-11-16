import React from 'react'
import { Layout, H1 } from '@components'
import { Pug } from '@images'
import { Link } from 'gatsby'

// markup
const NotFoundPage = () => (
  <Layout pageTitle="404">
    <H1 className="w-1/2 text-center">Oops! Page Not Found</H1>
    <div className="flex items-center justify-start">
      <img src={Pug} className="w-1/2 object-cover mt-8 mb-8" />
    </div>
    <div className="flex items-center w-1/2 justify-evenly">
      <Link
        to="/"
        className="bg-deepBlue shadow-xl m-4 p-6 text-white font-sourceCode hover:opacity-50 cursor-pointer"
      >
        Go Back
      </Link>
      <Link
        to="/"
        className="bg-deepBlue shadow-xl m-4 p-6 text-white font-sourceCode hover:opacity-50 cursor-pointer"
      >
        Go Home
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
