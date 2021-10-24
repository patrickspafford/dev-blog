import React from 'react'
import Head from '../Head'
import { IHeader } from './types'
import { useWindowSize } from 'rooks'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'
import { useTailwindTheme } from '@hooks'

const Header = ({ pageTitle, pages }: IHeader) => {
  const windowSize = useWindowSize()
  const theme = useTailwindTheme()
  return (
    <>
      <Head pageTitle={pageTitle} />
      {windowSize.innerWidth > theme.breakpoints.md ? (
        <DesktopHeader pages={pages} />
      ) : (
        <MobileHeader pages={pages} />
      )}
    </>
  )
}

export default Header
