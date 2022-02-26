import React, { useState } from 'react'
import { Link } from 'gatsby'
import Paragraph from '../Paragraph'
import RoundedLabel from '../RoundedLabel'
import RoundedLabelGroup from '../RoundedLabelGroup'
import { FaArrowCircleRight } from 'react-icons/fa'
import { useClassNames, useTailwindTheme } from '@hooks'
import { ICard } from './types'

const Card = ({
  title,
  TitleIcon,
  children,
  category,
  loading,
  accentColor,
  views,
  articles,
}: ICard) => {
  const theme = useTailwindTheme()
  const [animateArrow, setAnimateArrow] = useState(false)
  const classNames = useClassNames()
  return (
    <div
      className={`overflow-hidden min-h-64 relative border border-nextjs cursor-pointer transition-all duration-500 bg-white dark:bg-deepBlue`}
      style={{
        borderColor: animateArrow ? accentColor : undefined,
      }}
      onMouseLeave={() => setAnimateArrow(false)}
      onMouseEnter={() => setAnimateArrow(true)}
    >
      <Link
        className="absolute top-0 left-0 right-0 bottom-0"
        to={`/blog/${category}`}
      />
      <div className="min-h-52">
        <div className="flex justify-start items-center gap-4 pt-4 pl-4 pr-4">
          <div className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16">
            <TitleIcon
              className="h-full w-full text-black dark:text-white"
              color={animateArrow ? accentColor : undefined}
            />
          </div>
          <h1 className="font-sourceCode text-sm sm:text-md md:text-lg lg:text-xl text-black dark:text-white">
            {title}
          </h1>
        </div>
        <div className="flex justify-end pt-4 pr-6 pl-4 sm:pr-12">
          <Paragraph>{children}</Paragraph>
        </div>
      </div>
      <div className="flex justify-between pl-4 pr-4 pt-2 pb-2 items-center">
        <RoundedLabelGroup loading={loading}>
          <RoundedLabel>
            {articles ?? 0} {articles === 1 ? 'article' : 'articles'}
          </RoundedLabel>
          <RoundedLabel>
            {views ?? 0} {views === 1 ? 'view' : 'views'}
          </RoundedLabel>
        </RoundedLabelGroup>
        <FaArrowCircleRight
          color={animateArrow ? accentColor : theme.colors.black}
          className={classNames(
            `h-6 w-6 transition-all transform duration-500`,
            animateArrow ? 'opacity-100' : '-translate-x-4 opacity-0',
          )}
        />
      </div>
    </div>
  )
}

export default Card
