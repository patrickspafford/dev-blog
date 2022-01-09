import React, { useState, useRef } from 'react'
import ReactNativeIcon from '../ReactNativeIcon'
import SwiftUIIcon from '../SwiftUIIcon'
import GoLangIcon from '../GoLangIcon'
import EthIcon from '../EthIcon'

const BouncingItem = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = useRef([
    ReactNativeIcon,
    SwiftUIIcon,
    GoLangIcon,
    EthIcon,
  ]).current
  const Image = images[currentImageIndex]
  return (
    <div className="bouncing-container h-full w-full absolute top-0 left-0 right-0 bottom-0 z-0">
      <div
        className={`bouncing-item`}
        onAnimationIteration={() => {
          setCurrentImageIndex((currentImageIndex + 1) % images.length)
        }}
      >
        <Image />
      </div>
    </div>
  )
}

export default BouncingItem
