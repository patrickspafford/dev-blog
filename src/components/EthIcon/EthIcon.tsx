import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const EthIcon = () => (
  <StaticImage
    src="../../images/eth.png"
    height={64}
    objectFit="contain"
    width={64}
    alt="Solidity symbol"
  />
)

export default EthIcon
