import { useClassNames, useShowSidebar, useTailwindTheme } from '@hooks'
import React from 'react'
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

const Sidebar = () => {
  const theme = useTailwindTheme()
  const [showSidebar, setShowSidebar] = useShowSidebar()
  const sidebarClassNames = useClassNames()

  const baseStyles = `h-full max-w-xs shadow-xl relative ease bg-white overflow-hidden transition-all w-0 duration-700 -z-1 pl-0 pr-0 lg:z-20 lg:w-80 lg:duration-500 lg:p-6`
  const showSidebarStyles = `z-20 w-80 duration-500 p-6`
  const hideSidebarStyles = `filter blur opacity-0 w-0 lg:filter lg:blur lg:opacity-0 lg:w-0`

  const sidebarStyles = sidebarClassNames(
    baseStyles,
    showSidebar ? showSidebarStyles : hideSidebarStyles,
  )

  return <div className={sidebarStyles}></div>
}

export default Sidebar
