import React from 'react'
import { ILayout } from './types'
import Footer from '../Footer'
import Header from '../Header'
import Span from '../Span'
import Sidebar from '../Sidebar'
import useLayoutQuery from './useLayoutQuery'
import { push as Menu } from 'react-burger-menu'
import { menuOpenAtom } from '@state'
import { useRecoilState } from 'recoil'
import Link from 'gatsby-link'
import { useClassNames } from '@hooks'
import { Helmet } from 'react-helmet'

const Layout = ({ children, pageTitle, description, imageLink }: ILayout) => {
  const groupedMarkdownPosts = useLayoutQuery()
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenAtom)
  const classNames = useClassNames()
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description || 'Patrick Spafford'} />
        {imageLink && <meta property="og:image" content={imageLink}></meta>}
      </Helmet>
      <div id="outer-container" className=" bg-typescriptBlue dark:bg-deepBlue">
        <Menu
          isOpen={menuOpen}
          right
          pageWrapId="page-wrap"
          onClose={() => setMenuOpen(false)}
          outerContainerId="outer-container"
        >
          <div className="h-full">
            <div className="w-full pt-4 pb-4 pl-4 mt-4 mb-4">
              {Object.keys(groupedMarkdownPosts).map((groupKey) => (
                <Link
                  to={`/${groupKey.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  key={groupKey}
                >
                  <Span
                    className="mb-6 mt-8 font-bold text-xl line-clamp-3"
                    key={groupKey}
                  >
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
              `min-h-screen bg-white dark:bg-deepBlue relative grid grid-cols-1 lg:grid-cols-2-col`,
            )}
          >
            <div className="hidden lg:block relative shadow-xl">
              <Sidebar className="sticky top-24 left-0 bottom-0 overflow-y-scroll h-full-minus-header hide-scrollbar" />
            </div>
            <div className={classNames(`relative`)}>{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
