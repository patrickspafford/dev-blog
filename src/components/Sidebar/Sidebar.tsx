import { useClassNames, useShowSidebar, useTailwindTheme } from '@hooks'
import React from 'react'
import { BiChevronLeft } from 'react-icons/bi'
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
  const theme = useTailwindTheme()
  const [showSidebar, setShowSidebar] = useShowSidebar()
  const sidebarClassNames = useClassNames([showSidebar])

  const sidebarStyles = sidebarClassNames(
    `h-full max-w-xs shadow-xl relative z-20 p-6 bg-white w-80 overflow-hidden transition-all`,
    showSidebar
      ? 'duration-500 ease'
      : 'w-0 duration-700 ease filter blur opacity-0 -z-1 pl-0 pr-0',
  )
  console.log('Sidebar styles: ', sidebarStyles)
  return (
    <div className={sidebarStyles}>
      <BiChevronLeft
        className="absolute left-4 top-4 h-8 w-8 hover:opacity-50 cursor-pointer dark:text-white"
        onClick={() => setShowSidebar(!showSidebar)}
      />
      <div className="flex items-center justify-center">
        <img src={Me} className="h-48 w-48 object-cover shadow-xl" />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between pt-4 w-48">
          <ProfileIcon
            href="https://github.com/patrickspafford"
            accentColor={theme.colors.github}
          >
            <FaGithub size={36} className="dark:text-white" />
          </ProfileIcon>
          <ProfileIcon
            href="https://www.linkedin.com/in/patrickspafford/"
            accentColor={theme.colors.linkedIn}
          >
            <FaLinkedin size={36} className="dark:text-white" />
          </ProfileIcon>
          <ProfileIcon
            href="https://www.buymeacoffee.com/patrickspafford"
            accentColor={theme.colors.buyMeACoffee}
          >
            <SiBuymeacoffee size={32} className="dark:text-white" />
          </ProfileIcon>
          <ProfileIcon
            href="https://www.npmjs.com/~patrickspafford"
            accentColor={theme.colors.npm}
          >
            <FaNpm size={36} className="dark:text-white" />
          </ProfileIcon>
        </div>
      </div>
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
      <ul className="pt-4 pb-4">
        <ListItemCard
          icon={<FaReact className="h-full w-full dark:text-white" />}
          href="/blog/react-native"
        >
          React Native
        </ListItemCard>
        <ListItemCard
          icon={<FaSwift className="h-full w-full dark:text-white" />}
          href="/blog/swift-ui"
        >
          SwiftUI
        </ListItemCard>
        <ListItemCard
          icon={<SiGo className="h-full w-full dark:text-white" />}
          href="/blog/go"
        >
          Go
        </ListItemCard>
        <ListItemCard
          icon={<FaEthereum className="h-full w-full dark:text-white" />}
          href="/blog/solidity"
        >
          Solidity
        </ListItemCard>
        <ListItemCard
          icon={<FaDna className="h-full w-full p-1 dark:text-white" />}
          href="/blog/evolutionary-computing"
        >
          Evolutionary Computing
        </ListItemCard>
      </ul>
      <Paragraph>And more!</Paragraph>
    </div>
  )
}

export default Sidebar
