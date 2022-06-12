import React from 'react'
import { Helmet } from 'react-helmet'
import { IHead } from './types'
import useHeadQuery from './useHeadQuery'

const Head = ({ pageTitle }: IHead) => {
  const data = useHeadQuery()
  return (
    <head>
      <Helmet title={`${pageTitle} | ${data.site.siteMetadata.title}`} />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8762746208937385"
        crossOrigin="anonymous"
      ></script>
    </head>
  )
}

export default Head
