import React from 'react'
import FlexDiv from '../FlexDiv'
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
    <FlexDiv className="items-stretch justify-evenly flex-1 max-w-xl">
      {Object.keys(pages).map((groupKey) => {
        return (
          <FlexDiv
            className="justify-center m-1 hover:opacity-50 items-stretch"
            key={groupKey}
          >
            <Link to="/" className="flex-1 flex items-stretch justify-center">
              <FlexDiv>
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
                    <Span className="text-center text-xl p-2 pt-4">
                      {groupKey}
                    </Span>
                    {pages[groupKey].map((item) => (
                      <div
                        className="menu-item hover:opacity-50 focus:outline-none focus:ring-2 p-4"
                        key={item.title}
                      >
                        <Link to={`/blog/${item.slug}`}>
                          <Span>{item.title}</Span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Popup>
              </FlexDiv>
            </Link>
          </FlexDiv>
        )
      })}
    </FlexDiv>
  </HeaderContainer>
)

export default DesktopHeader
