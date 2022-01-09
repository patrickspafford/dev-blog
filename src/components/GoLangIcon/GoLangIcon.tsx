import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const GoLangIcon = () => (
  <StaticImage
    src="../../images/golang.png"
    alt="Golang"
    formats={['webp', 'jpg']}
    placeholder="blurred"
    objectFit="contain"
    height={64}
    width={64}
  />
)

export default GoLangIcon
