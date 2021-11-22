import React, { useState, useEffect } from 'react'

const images = ['bg-react-native', 'bg-swift-ui', 'bg-golang', 'bg-eth']

const IconSwitcher = () => {
  const [imageIdx, setImageIdx] = useState(0)
  useEffect(() => {
    const timer = setInterval(
      () => setImageIdx((imageIdx + 1) % images.length),
      10000,
    )
    return () => {
      clearInterval(timer)
    }
  }, [imageIdx])
  return (
    <div
      className={`bg-contain h-16 w-16 md:h-24 md:w-24 bg-no-repeat bg-transparent bg-opacity-0 ${images[imageIdx]}`}
    />
  )
}

export default IconSwitcher
