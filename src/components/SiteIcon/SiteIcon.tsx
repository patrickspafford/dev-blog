import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const SiteIcon = () => (
  <StaticImage
    height={72}
    width={72}
    placeholder="blurred"
    objectFit="contain"
    formats={['webp', 'jpg']}
    alt="Typescript symbol but with a P, so PS"
    src="../../images/P.png"
  />
)

export default SiteIcon
