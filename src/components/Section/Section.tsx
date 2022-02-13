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
        `block min-h-144 bg-opacity-90 w-full px-10`,
        className,
      )}
      style={style}
    >
      {children}
    </section>
  )
}

export default Section
