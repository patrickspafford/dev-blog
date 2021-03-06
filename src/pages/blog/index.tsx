import React, { useEffect, useState } from 'react'
import { Layout, Section, Card } from '@components'
import { graphql } from 'gatsby'
import { FaDna, FaPython, FaReact } from 'react-icons/fa'
import { useLoading, useTailwindTheme, useViewCounter } from '@hooks'
import { IAllFaunaQuery, IAllMdxQuery } from '@interfaces'
import { SiEthereum, SiGo, SiSwift } from 'react-icons/si'
import { groupArrayByKey } from '@utils'

interface IBlogHomeData extends IAllFaunaQuery, IAllMdxQuery {}

interface IBlogHome {
  data: IBlogHomeData
}

interface IBlogCountsAndViews {
  [k: string]: {
    articles: number
    views: number
  }
}

const BlogHome = ({ data }: IBlogHome) => {
  const theme = useTailwindTheme()
  const faunaCards = groupArrayByKey(
    data.fauna.allFaunaBlogHeadlines.data,
    'category',
  )
  const { loading, setLoading } = useLoading()
  const [blogCountsAndViewsState, setBlogsCountAndViewsState] =
    useState<IBlogCountsAndViews>({})
  const { getAndIncrementViews } = useViewCounter({})
  useEffect(() => {
    const effect = async () => {
      try {
        const blogCountsAndViews: IBlogCountsAndViews = {}
        await Promise.all(
          data.allMdx.nodes.map(async (node) => {
            // Count number of articles
            const category = node.slug.split('/')[0]
            if (!blogCountsAndViews[category]) {
              blogCountsAndViews[category] = {
                articles: 1,
                views: 0,
              }
            } else {
              blogCountsAndViews[category].articles += 1
            }
            // Count
            const hits = await getAndIncrementViews({
              slug: node.slug,
              readOnly: true,
            })
            blogCountsAndViews[category].views += hits
          }),
        )
        setBlogsCountAndViewsState(blogCountsAndViews)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    effect()
  }, [])

  return (
    <Layout pageTitle="Blog">
      <Section className="px-1 md:px-8">
        <div className="grid grid-cols-2 p-1 gap-1 sm:p-4 sm:gap-4">
          <Card
            title={faunaCards['react-native'].title}
            TitleIcon={FaReact}
            category="react-native"
            loading={loading}
            accentColor={theme.colors.reactNative}
            articles={blogCountsAndViewsState?.['react-native']?.articles ?? 0}
            views={blogCountsAndViewsState?.['react-native']?.views ?? 0}
          >
            {faunaCards['react-native'].headline}
          </Card>
          <Card
            title={faunaCards['evolutionary-computing'].title}
            TitleIcon={FaDna}
            loading={loading}
            category="evolutionary-computing"
            accentColor={theme.colors.evComputing}
            articles={
              blogCountsAndViewsState?.['evolutionary-computing']?.articles ?? 0
            }
            views={
              blogCountsAndViewsState?.['evolutionary-computing']?.views ?? 0
            }
          >
            {faunaCards['evolutionary-computing'].headline}
          </Card>
          <Card
            title={faunaCards['python'].title}
            TitleIcon={FaPython}
            loading={loading}
            category="python"
            accentColor={theme.colors.python}
            articles={blogCountsAndViewsState?.['python']?.articles ?? 0}
            views={blogCountsAndViewsState?.['python']?.views ?? 0}
          >
            {faunaCards['python'].headline}
          </Card>
          <Card
            title={faunaCards['swift-ui'].title}
            TitleIcon={SiSwift}
            category={'swift-ui'}
            loading={loading}
            accentColor={theme.colors.swiftUI}
            articles={blogCountsAndViewsState?.['swift-ui']?.articles ?? 0}
            views={blogCountsAndViewsState?.['swift-ui']?.views ?? 0}
          >
            {faunaCards['swift-ui'].headline}
          </Card>
          <Card
            title={faunaCards['go'].title}
            TitleIcon={SiGo}
            loading={loading}
            category="go"
            accentColor={theme.colors.golang}
            articles={blogCountsAndViewsState?.['go']?.articles ?? 0}
            views={blogCountsAndViewsState?.['go']?.views ?? 0}
          >
            {faunaCards['go'].headline}
          </Card>
          <Card
            title={faunaCards['solidity'].title}
            TitleIcon={SiEthereum}
            loading={loading}
            category="solidity"
            accentColor={theme.colors.ethereum}
            articles={blogCountsAndViewsState?.['solidity']?.articles ?? 0}
            views={blogCountsAndViewsState?.['solidity']?.views ?? 0}
          >
            {faunaCards['solidity'].headline}
          </Card>
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query {
    fauna {
      allFaunaBlogHeadlines {
        data {
          category
          headline
          title
        }
      }
    }
    allMdx {
      nodes {
        slug
        frontmatter {
          category
        }
      }
    }
  }
`

export default BlogHome
