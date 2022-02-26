import React from 'react'
import { useClassNames, useShowSidebar, useTailwindTheme } from '@hooks'
import { BiChevronLeft } from 'react-icons/bi'
import Paragraph from '../Paragraph'
import ListItemCard from '../ListItemCard'
import ProfileIcon from '../ProfileIcon'
import { Me } from '@components'
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
import { IStyled } from '@interfaces'

const SidebarContent = ({ className }: IStyled) => {
  const theme = useTailwindTheme()
  const classNames = useClassNames()
  return (
    <div
      className={classNames(
        'p-4 bg-white dark:bg-deepBlue dark:border-r dark:border-gray-500',
        className,
      )}
    >
      <div className="flex items-center justify-center">
        <Me />
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

export default SidebarContent
