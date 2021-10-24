import React from 'react'
import { ILayout } from './types'
import Footer from '../Footer'
import Header from '../Header'
import FlexDiv from '../FlexDiv'
import Span from '../Span'
import Paragraph from '../Paragraph'
import ProfileIcon from '../ProfileIcon'
import ListItemCard from '../ListItemCard'
import useLayoutQuery from './useLayoutQuery'
import { push as Menu } from 'react-burger-menu'
import { useRecoilState } from 'recoil'
import { menuOpenAtom, showSidebarAtom } from '@state'
import { Galaxy, Me, Rainier } from '@images'
import { useTailwindTheme } from '@hooks'
import { useWindowSize } from 'rooks'
import { FaGithub, FaLinkedin, FaReact, FaSwift, FaNpm } from 'react-icons/fa'
import {
  SiBuymeacoffee,
  FaEthereum,
  SiGo,
  FaDna,
  BiChevronLeft,
  BiChevronRight,
} from 'react-icons/all'

const Layout = ({ children, pageTitle }: ILayout) => {
  const groupedMarkdownPosts = useLayoutQuery()
  const [menuOpen, setMenuOpen] = useRecoilState(menuOpenAtom)
  const [showSidebar, setShowSidebar] = useRecoilState(showSidebarAtom)
  const windowSize = useWindowSize()
  const theme = useTailwindTheme()
  console.log('Show sidebar: ', showSidebar)
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
              <>
                <Span className="mb-6 mt-8 font-bold text-xl">{groupKey}</Span>
              </>
            ))}
          </div>
        </div>
      </Menu>
      <div id="page-wrap">
        <Header pageTitle={pageTitle} pages={groupedMarkdownPosts} />
        <main
          className={`min-h-screen bg-white dark:bg-deepBlue gap-4 relative ${
            showSidebar ? 'main-grid' : 'main-grid-no-sidebar'
          }`}
        >
          <div
            className={`h-full max-w-xs shadow-xl p-6 relative z-10 ${
              showSidebar && windowSize.innerWidth > theme.breakpoints.md
                ? 'transform duration-500 ease'
                : 'transform -translate-x-96 duration-1000 ease'
            }`}
          >
            <BiChevronLeft
              className="absolute left-4 top-4 h-8 w-8 hover:opacity-50 cursor-pointer dark:text-white"
              onClick={() => setShowSidebar(!showSidebar)}
            />
            <FlexDiv className="justify-center">
              <img src={Me} className="h-48 w-48 object-cover shadow-xl" />
            </FlexDiv>
            <FlexDiv className="justify-center">
              <FlexDiv className="justify-between pt-4 w-48">
                <ProfileIcon href="https://github.com/patrickspafford">
                  <FaGithub size={36} className="dark:text-white" />
                </ProfileIcon>
                <ProfileIcon href="https://www.linkedin.com/in/patrickspafford/">
                  <FaLinkedin size={36} className="dark:text-white" />
                </ProfileIcon>
                <ProfileIcon href="https://www.buymeacoffee.com/patrickspafford">
                  <SiBuymeacoffee size={32} className="dark:text-white" />
                </ProfileIcon>
                <ProfileIcon href="https://www.npmjs.com/~patrickspafford">
                  <FaNpm size={36} className="dark:text-white" />
                </ProfileIcon>
              </FlexDiv>
            </FlexDiv>
            <Paragraph className="text-black pt-4 pb-4 text-center">
              Hi there,
            </Paragraph>
            <Paragraph>Thanks for visiting my dev site!</Paragraph>
            <Paragraph>
              My name is Patrick Spafford and I am a software developer from
              Mobile, AL.
            </Paragraph>
            <Paragraph>
              Here you can find well-written articles on things like:
            </Paragraph>
            <ul className="pb-4">
              <ListItemCard
                icon={<FaReact className="h-full w-full dark:text-white" />}
                href="/"
              >
                React Native
              </ListItemCard>
              <ListItemCard
                icon={<FaSwift className="h-full w-full dark:text-white" />}
                href="/"
              >
                SwiftUI
              </ListItemCard>
              <ListItemCard
                icon={<SiGo className="h-full w-full dark:text-white" />}
                href="/"
              >
                Go
              </ListItemCard>
              <ListItemCard
                icon={<FaEthereum className="h-full w-full dark:text-white" />}
                href="/"
              >
                Solidity
              </ListItemCard>
              <ListItemCard
                icon={<FaDna className="h-full w-full p-1 dark:text-white" />}
                href="/"
              >
                Evolutionary Computing
              </ListItemCard>
            </ul>
            <Paragraph>And more!</Paragraph>
          </div>
          {window.innerWidth > theme.breakpoints.md && (
            <div
              className={`absolute h-full transition-all duration-500 ease-in ${
                !showSidebar ? 'w-10 opacity-100' : 'w-0 opacity-5'
              } shadow-2xl flex justify-center`}
            >
              <BiChevronRight
                className="mt-4 h-8 w-8 hover:opacity-50
              cursor-pointer z-10 rounded-full shadow-3xl dark:text-white"
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </div>
          )}
          <div
            className={`p-6 pl-4 md:pl-12 transition-all duration-700 ease-in-out ${
              showSidebar && window.innerWidth > theme.breakpoints.md
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
