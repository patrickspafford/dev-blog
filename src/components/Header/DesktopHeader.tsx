import React from 'react'
import { Link } from 'gatsby'
import Span from '../Span'
import { Popup } from 'reactjs-popup'
import { FaCaretDown, FaMoon, FaRegSun, FaSun } from 'react-icons/fa'
import HeaderContainer from '../HeaderContainer'
import { IHeaderVersion } from './types'
import HeaderLeft from '../HeaderLeft'
import { useDarkMode } from '@hooks'
import { IMdxQueryNode } from '@interfaces'

const DesktopHeader = ({ pages }: IHeaderVersion) => {
  const [darkMode, setDarkMode] = useDarkMode()
  return (
    <HeaderContainer>
      <HeaderLeft />
      <div className="flex items-stretch justify-end gap-2 flex-1">
        <div className="flex items-stretch justify-evenly flex-1 max-w-xl">
          {Object.keys(pages).map((groupKey) => {
            return (
              <div
                className="flex justify-center m-1 hover:opacity-50 items-stretch"
                key={groupKey}
              >
                <Link
                  to={`/${groupKey.toLowerCase()}`}
                  className="flex-1 flex items-stretch justify-center"
                >
                  <div className="flex justify-center">
                    <Popup
                      position="bottom right"
                      on={['hover']}
                      mouseLeaveDelay={400}
                      mouseEnterDelay={375}
                      trigger={
                        <div className="flex items-center">
                          <Span className="mr-2 py-2 rounded-full text-center uppercase">
                            {groupKey}
                          </Span>
                          <FaCaretDown className="text-white" />
                        </div>
                      }
                    >
                      <div className="menu divide-y divide-solid divide-gray-100">
                        {pages[groupKey].map((item: IMdxQueryNode) => {
                          const calculateLink = ({ category, slug }) => {
                            const slugPieces = slug.split('/')
                            if (
                              slugPieces[0].toLowerCase() ===
                                category.toLowerCase() &&
                              slugPieces[1].toLowerCase() ===
                                category.toLowerCase()
                            ) {
                              return `/${category.toLowerCase()}`
                            }
                            const slugPiece = slugPieces[0]
                            if (
                              slugPiece.toLowerCase() === category.toLowerCase()
                            )
                              return `/${item.slug}`
                            return `/${category.toLowerCase()}/${slug}`
                          }
                          return (
                            <div
                              className="menu-item hover:opacity-50 p-4"
                              key={item.frontmatter.title}
                            >
                              <Link
                                to={calculateLink({
                                  category: item.frontmatter.category,
                                  slug: item.slug,
                                })}
                                className="focus:outline-none"
                              >
                                <Span className="text-black line-clamp-3 dark:text-black">
                                  {item.frontmatter.title}
                                </Span>
                              </Link>
                            </div>
                          )
                        })}
                      </div>
                    </Popup>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-center px-4">
          {darkMode ? (
            <FaSun
              className="text-yellow-100 h-10 w-10 p-2 cursor-pointer"
              onClick={() => setDarkMode(false)}
            />
          ) : (
            <FaMoon
              className="text-yellow-100 h-10 w-10 p-2 cursor-pointer"
              onClick={() => setDarkMode(true)}
            />
          )}
        </div>
      </div>
    </HeaderContainer>
  )
}

export default DesktopHeader
