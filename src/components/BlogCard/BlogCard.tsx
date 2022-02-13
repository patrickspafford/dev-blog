import { IMarkdownPostFrontMatter } from '@interfaces'
import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useClassNames, useTailwindTheme } from '@hooks'
import { FaArrowCircleRight } from 'react-icons/fa'

interface IBlogCard {
  frontmatter: IMarkdownPostFrontMatter
  accentColor: string
  views: number
  slug: string
}

const BlogCard = ({ slug, frontmatter, accentColor, views }: IBlogCard) => {
  const [animateArrow, setAnimateArrow] = useState(false)
  const classNames = useClassNames()
  const theme = useTailwindTheme()
  return (
    <div
      className={`overflow-hidden min-h-64 relative border border-nextjs cursor-pointer transition-all duration-500 bg-white max-w-md`}
      style={{
        borderColor: animateArrow ? accentColor : undefined,
      }}
      onMouseLeave={() => setAnimateArrow(false)}
      onMouseEnter={() => setAnimateArrow(true)}
    >
      <Link className="absolute top-0 left-0 right-0 bottom-0" to={slug} />
      <div className="min-h-52 bg-gray-500">
        <img src={frontmatter.featuredImage} />
      </div>
      <h1 className="px-4 py-4 font-sourceCode text-sm sm:text-md md:text-lg lg:text-xl text-black dark:text-white">
        {frontmatter.title}
      </h1>
      <div className="flex justify-between pl-4 pr-4 pt-2 pb-2">
        <div className="flex items-center justify-start gap-4">
          <div className="flex-1 whitespace-nowrap text-xs md:text-lg">
            {views ?? 0} views
          </div>
          <div className="flex-1 whitespace-nowrap text-xs md:text-lg">
            {frontmatter.minuteRead ?? 0} minute read
          </div>
        </div>
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

export default BlogCard
