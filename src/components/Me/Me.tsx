import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const MeImage = () => (
  <StaticImage
    src={'../../images/me.jpg'}
    placeholder="blurred"
    objectFit="cover"
    formats={['webp', 'jpg']}
    alt="Patrick Spafford Headshot"
    width={196}
    height={196}
  />
)

export default MeImage
