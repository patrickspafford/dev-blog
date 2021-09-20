import React from 'react'
import { ILayout } from './types'
import { Footer, Header } from '@atoms'
import useLayoutQuery from './useLayoutQuery'

const Layout = ({ children, pageTitle }: ILayout) => {
  return (
    <>
      <Header pageTitle={pageTitle} />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
