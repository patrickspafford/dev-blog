import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const MeImage = () => (
  <StaticImage
    src="https://avatars.githubusercontent.com/u/45982754?v=4"
    placeholder="blurred"
    objectFit="cover"
    alt="Patrick Spafford Headshot"
    width={196}
    height={196}
  />
)

export default MeImage
