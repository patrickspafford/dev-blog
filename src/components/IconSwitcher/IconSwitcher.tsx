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
    <div className={`${images[imageIdx]} bg-contain h-24 w-24 bg-no-repeat`} />
  )
}

export default IconSwitcher
