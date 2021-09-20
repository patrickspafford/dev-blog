import React from 'react'
import { Head, Span, FlexDiv } from '@particles'
import { P } from '@/images'
import { Link } from 'gatsby'
import { IHeader } from './types'
import Popup from 'reactjs-popup'
import { FaCaretDown } from 'react-icons/fa'
import 'reactjs-popup/dist/index.css'

const Header = ({
  pageTitle,
  pages = ['Blog', 'Projects', 'About', 'Resume'],
}: IHeader) => (
  <>
    <Head pageTitle={pageTitle} />
    <header className="w-full h-24 gradient sticky shadow-lg flex items-stretch justify-between pl-2 pr-2 top-0 left-0 right-0">
      <FlexDiv className="justify-start">
        <Link to="/" className="flex-shrink-0">
          <div className="inline-block">
            <img src={P} height={72} width={72} />
          </div>
        </Link>
        <div className="pl-4">
          <Span className="text-2xl font-bold">Patrick Spafford</Span>
          <Span>Software Developer</Span>
        </div>
      </FlexDiv>
      <FlexDiv className="items-stretch justify-evenly flex-1 max-w-1/2">
        {pages.map((page) => (
          <FlexDiv
            className="justify-center m-1 hover:opacity-50 items-stretch"
            key={page}
          >
            <Link to="/" className="flex-1 flex items-stretch justify-center">
              <FlexDiv>
                <Span className="mr-2">{page}</Span>
                <Popup
                  position="bottom right"
                  on={['hover']}
                  mouseLeaveDelay={350}
                  trigger={
                    <div>
                      <FaCaretDown color="#FFFFFF" />
                    </div>
                  }
                >
                  <div className="menu">
                    <Span className="text-center text-xl p-2">Blog</Span>
                    {['Hey', 'Test Item'].map((item) => (
                      <div className="menu-item hover:opacity-50 focus:outline-none focus:ring-2 p-4">
                        <Link to="/">
                          <Span>{item}</Span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Popup>
              </FlexDiv>
            </Link>
          </FlexDiv>
        ))}
      </FlexDiv>
    </header>
  </>
)

export default Header
