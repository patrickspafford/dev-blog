import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const GoLangIcon = () => (
  <StaticImage
    src="../../images/golang.png"
    alt="Golang"
    formats={['webp', 'jpg']}
    placeholder="blurred"
    objectFit="scale-down"
    height={68}
    width={48}
  />
)

export default GoLangIcon
