import React from 'react'
import { ILayout } from './types'
import Footer from '../Footer'
import Header from '../Header'
import Span from '../Span'
import Sidebar from '../Sidebar'
import SidebarCollapsed from '../SidebarCollapsed'
import useLayoutQuery from './useLayoutQuery'
import { push as Menu } from 'react-burger-menu'
import { menuOpenAtom } from '@state'
import { useRecoilState } from 'recoil'
import { Rainier } from '@images'
import Link from 'gatsby-link'
import { useClassNames, useTailwindTheme, useWindowWidth } from '@hooks'

const Layout = ({ children, pageTitle }: ILayout) => {
  const groupedMarkdownPosts = useLayoutQuery()
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenAtom)
  const windowWidth = useWindowWidth()
  const classNames = useClassNames()
  const theme = useTailwindTheme()
  return (
    <div id="outer-container" className=" bg-typescriptBlue dark:bg-deepBlue">
      <Menu
        isOpen={menuOpen}
        right
        pageWrapId="page-wrap"
        onClose={() => setMenuOpen(false)}
        outerContainerId="outer-container"
      >
        <div className="h-full">
          <img
            src={Rainier}
            className="absolute h-full w-full object-contain object-bottom -z-1"
          />
          <div className="w-full pt-4 pb-4 pl-4 mt-4 mb-4">
            {Object.keys(groupedMarkdownPosts).map((groupKey) => (
              <Link to={`/${groupKey.toLowerCase()}`}>
                <Span className="mb-6 mt-8 font-bold text-xl" key={groupKey}>
                  {groupKey}
                </Span>
              </Link>
            ))}
          </div>
        </div>
      </Menu>
      <div id="page-wrap">
        <Header pageTitle={pageTitle} pages={groupedMarkdownPosts} />
        <main
          className={classNames(
            `min-h-screen bg-white dark:bg-deepBlue relative transition-gridTemplateColumns main-grid`,
          )}
        >
          <Sidebar />
          {windowWidth > theme.breakpoints.lg && <SidebarCollapsed />}
          <div
            className={classNames(
              `relative transition-all duration-700 ease-in-out`,
            )}
          >
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
