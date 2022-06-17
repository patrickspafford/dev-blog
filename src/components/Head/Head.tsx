import React from 'react'
import { Helmet } from 'react-helmet'
import { IHead } from './types'
import useHeadQuery from './useHeadQuery'

const Head = ({ pageTitle }: IHead) => {
  const data = useHeadQuery()
  return (
    <head>
      <Helmet title={`${pageTitle} | ${data.site.siteMetadata.title}`} />
    </head>
  )
}

export default Head
