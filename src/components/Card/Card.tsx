import React, { useState } from 'react'
import { Link } from 'gatsby'
import Paragraph from '../Paragraph'
import H1 from '../H1'
import { FaArrowCircleRight } from 'react-icons/fa'
import { useTailwindTheme } from '@hooks'
import { ICard } from './types'

const Card = ({
  title,
  TitleIcon,
  children,
  accentColor,
  views,
  articles,
}: ICard) => {
  const theme = useTailwindTheme()
  const [animateArrow, setAnimateArrow] = useState(false)
  return (
    <div
      className={`overflow-hidden h-64 relative border border-nextjs cursor-pointer transition-all duration-500 bg-white`}
      style={{
        borderColor: animateArrow ? accentColor : undefined,
      }}
      onMouseLeave={() => setAnimateArrow(false)}
      onMouseEnter={() => setAnimateArrow(true)}
    >
      <Link
        className="absolute top-0 left-0 right-0 bottom-0"
        to="/blog/react-native"
      />
      <div className="h-52 overflow-hidden">
        <div className="flex justify-start items-center gap-4 pt-4 pl-4 pr-4">
          <div className="h-16 w-16">
            <TitleIcon
              className="h-full w-full"
              color={animateArrow ? accentColor : theme.colors.black}
            />
          </div>
          <H1 className="font-sourceCode">{title}</H1>
        </div>
        <div className="flex justify-end pt-4 pl-4 pr-12 overflow-hidden">
          <Paragraph>{children}</Paragraph>
        </div>
      </div>
      <div className="flex justify-between pl-4 pr-4 pt-2">
        <div className="flex items-center justify-start gap-4">
          <div>{articles ?? 0} articles</div>
          <div>{views ?? 0} views</div>
        </div>
        <FaArrowCircleRight
          color={animateArrow ? accentColor : theme.colors.black}
          className={`h-6 w-6 transition-all transform duration-500 ${
            animateArrow ? 'opacity-100' : '-translate-x-4 opacity-0'
          }`}
        />
      </div>
    </div>
  )
}

export default Card
