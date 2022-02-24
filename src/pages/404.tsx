import React from 'react'
import { Layout, H1, Button } from '@components'
import { Pug } from '@images'
import {} from 'gatsby'

// markup
const NotFoundPage = () => {
  return (
    <Layout pageTitle="404">
      <H1 className="w-full text-center text-black p-8">
        Oops! Page Not Found
      </H1>
      <div className="flex items-center justify-center">
        <img src={Pug} className="w-1/2 object-cover mt-8 mb-8" />
      </div>
      <div className="flex items-center w-full justify-center">
        <Button href="/" className="pl-16 pr-16">
          Go Home
        </Button>
      </div>
    </Layout>
  )
}

export default NotFoundPage
