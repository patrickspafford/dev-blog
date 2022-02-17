import { IMarkdownPostFrontMatter } from '@interfaces'
import React, { useState } from 'react'
import { Link } from 'gatsby'
import Paragraph from '../Paragraph'
import { useClassNames, useTailwindTheme } from '@hooks'
import { FaArrowCircleRight } from 'react-icons/fa'
import { GatsbyImage } from 'gatsby-plugin-image'

interface IBlogCard {
  frontmatter: IMarkdownPostFrontMatter
  accentColor: string
  views: number
  slug: string
  loading: boolean
}

const BlogCard = ({
  slug,
  frontmatter,
  accentColor,
  views,
  loading,
}: IBlogCard) => {
  const [animateArrow, setAnimateArrow] = useState(false)
  const classNames = useClassNames()
  const theme = useTailwindTheme()
  return (
    <Link to={`/blog/${slug}`}>
      <div
        className={`overflow-hidden min-h-64 relative border border-nextjs cursor-pointer transition-all duration-500 bg-white max-w-md`}
        style={{
          borderColor: animateArrow ? accentColor : undefined,
        }}
        onMouseLeave={() => setAnimateArrow(false)}
        onMouseEnter={() => setAnimateArrow(true)}
      >
        <div className="min-h-52 bg-gray-500">
          <GatsbyImage
            image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
            objectFit="cover"
            alt=""
          />
        </div>
        <h1 className="px-4 py-4 font-sourceCode text-sm sm:text-md md:text-lg lg:text-xl text-black dark:text-white">
          {frontmatter.title}
        </h1>
        <div className="flex justify-between pl-4 pr-4 pt-2 pb-2">
          <div
            className={classNames(
              'flex items-center justify-start gap-2 sm:gap-4 opacity-0 duration-300 transition-opacity',
              !loading && 'opacity-100',
            )}
          >
            <Paragraph className="inline-block text-gray-500 border-nextjs border-0 sm:border rounded-full px-1.5 sm:px-3 py-1.5">
              {views ?? 0} views
            </Paragraph>
            <Paragraph className="inline-block text-gray-500 border-nextjs border-0 sm:border rounded-full px-3 py-1.5">
              {frontmatter.minuteRead} minute read
            </Paragraph>
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
    </Link>
  )
}

export default BlogCard
