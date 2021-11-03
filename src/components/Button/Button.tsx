import { useTailwindTheme } from '@hooks'
import { Link } from 'gatsby'
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
  const [animateArrow, setAnimateArrow] = useState(false)
  return (
    <div
      className={`min-w-sm relative inline-flex bg-white bg-opacity-90 gap-4 border border-nextjs hover:shadow-next transition-boxShadow hover:border-transparent items-center pl-8 pr-8 pt-6 pb-6 text-black cursor-pointer ${
        className ?? ''
      }`}
      onMouseEnter={() => setAnimateArrow(true)}
      onMouseLeave={() => setAnimateArrow(false)}
    >
      <Link to={href} className="absolute top-0 left-0 right-0 bottom-0" />
      <Span className="text-black">{children}</Span>
      {!rightIcon && showRightIcon ? (
        <FaArrowCircleRight
          color={theme.colors.black}
          size={24}
          className={`transform duration-200 ${
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
