import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const SwiftUIIcon = () => (
  <StaticImage
    src="../../images/swift-ui.png"
    alt="Swift UI bird"
    placeholder="blurred"
    formats={['webp', 'jpg']}
    objectFit="contain"
    height={64}
    width={64}
  />
)

export default SwiftUIIcon
