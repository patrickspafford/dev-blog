import React from 'react'
import { IStyledWithChild } from '@interfaces'
import { showSidebarAtom } from '@state'
import { useRecoilValue } from 'recoil'
import { useClassNames, useTailwindTheme, useWindowWidth } from '@hooks'

const Section = ({ className, children, style }: IStyledWithChild) => {
  const showSidebar = useRecoilValue(showSidebarAtom)
  const windowWidth = useWindowWidth()
  const classNames = useClassNames()
  const theme = useTailwindTheme()
  const sidebarCollapsed = !showSidebar && windowWidth > theme.breakpoints.lg
  return (
    <section
      className={classNames(
        `w-full block min-h-144 bg-opacity-90 transition-all duration-1000`,
        sidebarCollapsed ? 'pl-16 pr-8 md:pl-24' : 'px-8 md:pl-12',
        className,
      )}
      style={style}
    >
      {children}
    </section>
  )
}

export default Section
