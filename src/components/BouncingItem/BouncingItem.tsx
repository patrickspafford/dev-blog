import { useClassNames } from '@hooks'
import React, { useState } from 'react'

const images = ['bg-react-native', 'bg-swift-ui', 'bg-golang', 'bg-solidity']

const BouncingItem = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const classNames = useClassNames()
  return (
    <div className="bouncing-container h-full w-full absolute top-0 left-0 right-0 bottom-0 z-0">
      <div
        className={classNames(
          `bouncing-item bg-contain bg-opacity-0`,
          images[currentImageIndex],
        )}
        onAnimationIteration={() => {
          setCurrentImageIndex((currentImageIndex + 1) % images.length)
        }}
      ></div>
    </div>
  )
}

export default BouncingItem
