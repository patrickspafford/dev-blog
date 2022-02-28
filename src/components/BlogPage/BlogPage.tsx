import React from 'react'
import { Layout, Section, BlogCard, H1, Bar } from '@components'
import { IAllMdxData } from '@interfaces'
import { useTailwindTheme, useCategoryViews } from '@hooks'
import { IconType } from 'react-icons'

interface IBlogPage extends IAllMdxData {
  title: string
  color: string
  icon: IconType
  type?: string
}

const BlogPage = ({ data, title, color, icon, type = 'Blog' }: IBlogPage) => {
  const theme = useTailwindTheme()
  const Icon = icon
  const { views, loading } = useCategoryViews({ data })
  return (
    <Layout pageTitle={title}>
      <Section className="px-1 md:px-8">
        <div className="flex items-center justify-start gap-1 mt-4">
          <Icon className="h-12 w-12 text-black dark:text-white m-2" />
          <H1 className="px-2 md:p-4 text-deepBlue font-semibold">{`${title} ${type}`}</H1>
        </div>
        <Bar className="my-2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 p-1 gap-1 sm:p-4 sm:gap-4">
          {data.allMdx.nodes.map((node) => {
            return (
              <BlogCard
                key={node.slug}
                views={views[node.slug] ?? 0}
                loading={loading}
                accentColor={theme.colors[color]}
                frontmatter={node.frontmatter}
                slug={node.slug}
                timeToRead={node.timeToRead}
              />
            )
          })}
        </div>
      </Section>
    </Layout>
  )
}

export default BlogPage
