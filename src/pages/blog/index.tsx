import React from 'react'
import { Layout, Section, Card } from '@components'
import { graphql } from 'gatsby'
import { FaDna, FaReact } from 'react-icons/fa'
import { useTailwindTheme } from '@hooks'
import { IFaunaBlogHeadlinesQuery } from '@interfaces'
import { SiEthereum, SiGo, SiSwift } from 'react-icons/si'
import { groupArrayByKey } from '@utils'

interface IBlogHome {
  data: IFaunaBlogHeadlinesQuery
}

const BlogHome = ({ data }: IBlogHome) => {
  const theme = useTailwindTheme()
  const faunaCards = groupArrayByKey(
    data.allFaunaBlogHeadlines.nodes,
    'category',
  )
  return (
    <Layout pageTitle="Blog">
      <Section>
        <div className="grid grid-cols-2 p-4 gap-4">
          <Card
            title={faunaCards['react-native'].title}
            TitleIcon={FaReact}
            accentColor={theme.colors.reactNative}
            articles={5}
            views={20}
          >
            {faunaCards['react-native'].headline}
          </Card>
          <Card
            title={faunaCards['swift-ui'].title}
            TitleIcon={SiSwift}
            accentColor={theme.colors.swiftUI}
          >
            {faunaCards['swift-ui'].headline}
          </Card>
          <Card
            title={faunaCards['go'].title}
            TitleIcon={SiGo}
            accentColor={theme.colors.golang}
          >
            {faunaCards['go'].headline}
          </Card>
          <Card
            title={faunaCards['solidity'].title}
            TitleIcon={SiEthereum}
            accentColor={theme.colors.ethereum}
          >
            {faunaCards['solidity'].headline}
          </Card>
          <Card
            title={faunaCards['evolutionary-computing'].title}
            TitleIcon={FaDna}
            accentColor={theme.colors.evComputing}
          >
            {faunaCards['evolutionary-computing'].headline}
          </Card>
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query AllBlogHeadlines {
    allFaunaBlogHeadlines {
      nodes {
        headline
        category
        title
      }
    }
  }
`

export default BlogHome
