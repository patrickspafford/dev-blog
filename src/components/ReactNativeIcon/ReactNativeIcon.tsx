import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const ReactNativeIcon = () => (
  <StaticImage
    src="../../images/react-native.png"
    alt="React Native"
    placeholder="blurred"
    height={64}
    formats={['webp', 'jpg']}
    objectFit="contain"
    width={64}
  />
)

export default ReactNativeIcon
