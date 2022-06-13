import React from 'react'
import { Script } from 'gatsby'
import { Helmet } from 'react-helmet'
import { IHead } from './types'
import useHeadQuery from './useHeadQuery'

const Head = ({ pageTitle }: IHead) => {
  const data = useHeadQuery()
  return (
    <head>
      <Helmet title={`${pageTitle} | ${data.site.siteMetadata.title}`} />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8762746208937385"
        crossOrigin="anonymous"
      />
    </head>
  )
}

export default Head
