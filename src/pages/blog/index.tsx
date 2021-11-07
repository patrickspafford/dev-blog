import React from 'react'
import { Layout, Section, H1, Card, Paragraph } from '@components'
import { Link } from 'gatsby'
import { FaArrowCircleRight, FaDna, FaReact } from 'react-icons/fa'
import { useTailwindTheme } from '@hooks'
import { SiEthereum, SiGo, SiSwift } from 'react-icons/si'

const BlogHome = () => {
  const theme = useTailwindTheme()
  return (
    <Layout pageTitle="Blog">
      <Section>
        <div className="grid grid-cols-2 p-4 gap-4">
          <Card
            title="React Native"
            TitleIcon={FaReact}
            accentColor={theme.colors.reactNative}
            articles={5}
            views={20}
          >
            Headline
          </Card>
          <Card
            title="SwiftUI"
            TitleIcon={SiSwift}
            accentColor={theme.colors.swiftUI}
          >
            Headline
          </Card>
          <Card title="Go" TitleIcon={SiGo} accentColor={theme.colors.golang}>
            Headline
          </Card>
          <Card
            title="Solidity"
            TitleIcon={SiEthereum}
            accentColor={theme.colors.ethereum}
          >
            Headline
          </Card>
          <Card
            title="Evolutionary Computing"
            TitleIcon={FaDna}
            accentColor={theme.colors.evComputing}
          >
            Headline
          </Card>
        </div>
      </Section>
    </Layout>
  )
}

export default BlogHome
