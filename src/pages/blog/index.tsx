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
    data.fauna.allFaunaBlogHeadlines.data,
    'category',
  )
  return (
    <Layout pageTitle="Blog">
      <Section className="px-1 md:px-8">
        <div className="grid grid-cols-2 p-1 gap-1 sm:p-4 sm:gap-4">
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
  }
`

export default BlogHome
