import React from 'react'
import Head from '../Head'
import { IHeader } from './types'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import { useTailwindTheme, useWindowWidth } from '@hooks'

const Header = ({ pageTitle, pages }: IHeader) => {
  const windowWidth = useWindowWidth()
  const theme = useTailwindTheme()
  return (
    <>
      <Head pageTitle={pageTitle} />
      {windowWidth > theme.breakpoints.lg ? (
        <DesktopHeader pages={pages} />
      ) : (
        <MobileHeader pages={pages} />
      )}
    </>
  )
}

export default Header
