import React from 'react'
import { Layout, Section, BlogCard, H1, Bar } from '@components'
import { IAllMdxData } from '@interfaces'
import { useTailwindTheme, useCategoryViews } from '@hooks'

interface IBlogPage extends IAllMdxData {
  title: string
  color: string
}

const BlogPage = ({ data, title, color }: IBlogPage) => {
  const theme = useTailwindTheme()
  const { views, loading } = useCategoryViews({ data })
  return (
    <Layout pageTitle={title}>
      <Section className="px-1 md:px-8">
        <H1 className="p-4 mt-4 text-deepBlue font-semibold">{`${title} Blog`}</H1>
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
