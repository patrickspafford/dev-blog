import { useClassNames, useTailwindTheme, useWindowWidth } from '@hooks'
// import { Link } from 'gatsby'
import Link from 'gatsby-link'
import React, { useState } from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
import Span from '../Span'
import { IButton } from './types'

const Button = ({
  children,
  className,
  rightIcon,
  href,
  showRightIcon = true,
}: IButton) => {
  const theme = useTailwindTheme()
  const classNames = useClassNames()
  const [animateArrow, setAnimateArrow] = useState(false)
  return (
    <div
      className={classNames(
        `relative inline-flex justify-evenly bg-white dark:bg-deepBlue bg-opacity-90 gap-4 border border-nextjs hover:shadow-next transition-boxShadow hover:border-transparent items-center px-4 py-4 sm:px-8 sm:py-6 text-black cursor-pointer`,
        className,
      )}
      onMouseEnter={() => setAnimateArrow(true)}
      onMouseLeave={() => setAnimateArrow(false)}
    >
      <Link to={href} className="absolute top-0 left-0 right-0 bottom-0" />
      <Span className="text-black">{children}</Span>
      {!rightIcon && showRightIcon ? (
        <FaArrowCircleRight
          // color={theme.colors.black}
          size={24}
          className={`hidden md:block transform duration-200 text-black dark:text-white ${
            animateArrow ? 'translate-x-1' : ''
          }`}
        />
      ) : (
        rightIcon
      )}
    </div>
  )
}

export default Button
