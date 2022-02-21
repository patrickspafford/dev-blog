import React from 'react'
import { Link } from 'gatsby'
import Span from '../Span'
import { Popup } from 'reactjs-popup'
import { FaCaretDown } from 'react-icons/fa'
import HeaderContainer from '../HeaderContainer'
import { IHeaderVersion } from './types'
import HeaderLeft from '../HeaderLeft'

const DesktopHeader = ({ pages }: IHeaderVersion) => (
  <HeaderContainer>
    <HeaderLeft />
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
                      <Span className="mr-2">{groupKey}</Span>
                      <div>
                        <FaCaretDown color="#FFFFFF" />
                      </div>
                    </div>
                  }
                >
                  <div className="menu">
                    <Span className="text-center p-2 pt-4 text-black">
                      {groupKey}
                    </Span>
                    {pages[groupKey].map((item) => {
                      const calculateLink = ({ category, slug }) => {
                        const slugPieces = slug.split('/')
                        const slugPiece = slugPieces[0]
                        if (slugPiece.toLowerCase() === category.toLowerCase())
                          return `/${item.slug}`
                        return `/${category.toLowerCase()}/${slug}`
                      }
                      return (
                        <div
                          className="menu-item hover:opacity-50 focus:outline-none focus:ring-2 p-4"
                          key={item.title}
                        >
                          <Link
                            to={calculateLink({
                              category: item.category,
                              slug: item.slug,
                            })}
                          >
                            <Span className="text-black line-clamp-3">
                              {item.title}
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
  </HeaderContainer>
)

export default DesktopHeader
