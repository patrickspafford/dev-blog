import React, { useContext } from 'react'
import { ILayout } from './types'
import Footer from '../Footer'
import Header from '../Header'
import Span from '../Span'
import Sidebar from '../Sidebar'
import SidebarCollapsed from '../SidebarCollapsed'
import useLayoutQuery from './useLayoutQuery'
import { push as Menu } from 'react-burger-menu'
import { BlogContext } from '@state'
import { Rainier } from '@images'
import { useTailwindTheme, useWindowWidth } from '@hooks'

const Layout = ({ children, pageTitle }: ILayout) => {
  const groupedMarkdownPosts = useLayoutQuery()
  const { menuOpen, setMenuOpen, showSidebar } = useContext(BlogContext)
  const windowWidth = useWindowWidth()
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
            className="absolute h-full w-full object-contain object-bottom"
          />
          <div className="w-full pt-4 pb-4 pl-4 mt-4 mb-4">
            {Object.keys(groupedMarkdownPosts).map((groupKey) => (
              <Span className="mb-6 mt-8 font-bold text-xl" key={groupKey}>
                {groupKey}
              </Span>
            ))}
          </div>
        </div>
      </Menu>
      <div id="page-wrap">
        <Header pageTitle={pageTitle} pages={groupedMarkdownPosts} />
        <main
          className={`min-h-screen bg-white dark:bg-deepBlue relative overflow-x-hidden ${
            showSidebar ? 'main-grid' : 'main-grid-no-sidebar'
          }`}
        >
          <Sidebar />
          {windowWidth > theme.breakpoints.lg && <SidebarCollapsed />}
          <div
            className={`relative transition-all duration-700 ease-in-out ${
              showSidebar && windowWidth > theme.breakpoints.lg
                ? 'w-full'
                : 'main-grid-no-sidebar-column'
            }`}
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
