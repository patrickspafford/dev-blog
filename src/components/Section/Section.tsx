import React, { useContext } from 'react'
import { IStyledWithChild } from '@interfaces'
import { BlogContext } from '@state'
import { useTailwindTheme, useWindowWidth } from '@hooks'

const Section = ({ className, children }: IStyledWithChild) => {
  const { showSidebar } = useContext(BlogContext)
  const windowWidth = useWindowWidth()
  const theme = useTailwindTheme()
  const sidebarCollapsed = !showSidebar && windowWidth > theme.breakpoints.lg
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
