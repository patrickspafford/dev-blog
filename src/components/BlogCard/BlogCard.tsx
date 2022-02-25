import { IMarkdownPostFrontMatter } from '@interfaces'
import React, { useState } from 'react'
import { Link } from 'gatsby'
import Paragraph from '../Paragraph'
import RoundedLabelGroup from '../RoundedLabelGroup'
import RoundedLabel from '../RoundedLabel'
import { useClassNames, useTailwindTheme } from '@hooks'
import { FaArrowCircleRight } from 'react-icons/fa'
import { GatsbyImage } from 'gatsby-plugin-image'

interface IBlogCard {
  frontmatter: IMarkdownPostFrontMatter
  accentColor: string
  timeToRead: number
  views: number
  slug: string
  loading: boolean
}

const BlogCard = ({
  slug,
  frontmatter,
  accentColor,
  views,
  timeToRead,
  loading,
}: IBlogCard) => {
  const [animateArrow, setAnimateArrow] = useState(false)
  const classNames = useClassNames()
  const theme = useTailwindTheme()
  return (
    <Link to={`/blog/${slug}`}>
      <div
        className={`overflow-hidden h-96 relative border border-nextjs cursor-pointer transition-all duration-500 bg-white`}
        style={{
          borderColor: animateArrow ? accentColor : undefined,
        }}
        onMouseLeave={() => setAnimateArrow(false)}
        onMouseEnter={() => setAnimateArrow(true)}
      >
        <div className="min-h-68 bg-gray-500 relative">
          <GatsbyImage
            image={frontmatter.featuredImage.childImageSharp.gatsbyImageData}
            objectFit="cover"
            onMouseEnter={() => setAnimateArrow(true)}
            onMouseLeave={() => setAnimateArrow(false)}
            className="absolute inset-0"
            style={{ position: 'absolute' }}
            alt=""
          />
        </div>
        <h2 className="p-4 font-sourceCode text-sm lg:text-md text-black dark:text-white overflow-ellipsis whitespace-nowrap overflow-hidden">
          {frontmatter.title}
        </h2>
        <div className="flex justify-between px-4 py-2 items-center">
          <RoundedLabelGroup loading={loading}>
            <RoundedLabel>
              {views ?? 0} {views === 1 ? 'view' : 'views'}
            </RoundedLabel>
            <RoundedLabel>{timeToRead} min read</RoundedLabel>
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
    </Link>
  )
}

export default BlogCard
