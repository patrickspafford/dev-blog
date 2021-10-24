import { useTailwindTheme } from '@hooks'
import { showSidebarAtom } from '@state'
import { useRecoilState } from 'recoil'
import React from 'react'
import { useWindowSize } from 'rooks'
import { BiChevronLeft } from 'react-icons/bi'
import FlexDiv from '../FlexDiv'
import Paragraph from '../Paragraph'
import ListItemCard from '../ListItemCard'
import ProfileIcon from '../ProfileIcon'
import { SiGo, SiBuymeacoffee } from 'react-icons/si'
import {
  FaGithub,
  FaLinkedin,
  FaNpm,
  FaReact,
  FaSwift,
  FaEthereum,
  FaDna,
} from 'react-icons/fa'
import { Me } from '@images'

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useRecoilState(showSidebarAtom)
  const windowSize = useWindowSize()
  const theme = useTailwindTheme()
  return (
    <div
      className={`h-full max-w-xs shadow-xl p-6 relative z-10 ${
        showSidebar && windowSize.innerWidth > theme.breakpoints.lg
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
        My name is Patrick Spafford and I am a software developer from Mobile,
        AL.
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
  )
}

export default Sidebar
