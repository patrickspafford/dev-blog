import React, { useState, useEffect, useRef } from 'react'
import { ReactNativeIcon, SwiftUIIcon, GoLangIcon, EthIcon } from '@components'

const IconSwitcher = () => {
  const images = useRef([
    ReactNativeIcon,
    SwiftUIIcon,
    GoLangIcon,
    EthIcon,
  ]).current
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
  const Image = images[imageIdx]
  return <Image />
}

export default IconSwitcher
