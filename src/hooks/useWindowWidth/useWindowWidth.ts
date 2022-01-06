import { useTailwindTheme } from '@hooks'
import { useState, useEffect } from 'react'
import { useWindowSize as useWindowSizeClient } from 'rooks'
import { isBrowser } from 'react-device-detect'

const useWindowWidth = () => {
  const theme = useTailwindTheme()
  const windowSizeClient = useWindowSizeClient()
  const [width, setWidth] = useState(
    isBrowser ? theme.breakpoints.lg + 10 : theme.breakpoints.lg - 10,
  )

  useEffect(() => {
    if (windowSizeClient.innerWidth !== 0) {
      setWidth(windowSizeClient.innerWidth)
    }
  }, [windowSizeClient.innerWidth])

  return width
}

export default useWindowWidth
