import React from 'react'
import { useRecoilValue } from 'recoil'
import { IStyledWithChild } from '@interfaces'
import { showSidebarAtom } from '@state'
import { useTailwindTheme } from '@hooks'
import { useWindowSize } from 'rooks'

const Section = ({ className, children }: IStyledWithChild) => {
  const showSidebar = useRecoilValue(showSidebarAtom)
  const windowSize = useWindowSize()
  const theme = useTailwindTheme()
  const sidebarCollapsed =
    !showSidebar && windowSize.innerWidth > theme.breakpoints.lg
  return (
    <section
      className={`w-full block min-h-144 bg-opacity-90 transition-all duration-1000 ${
        sidebarCollapsed ? 'pl-24' : 'pl-12'
      } ${className ? className : ''}`}
    >
      {children}
    </section>
  )
}

export default Section
