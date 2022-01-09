import { useState, useEffect } from 'react'
import { useWindowSize as useWindowSizeClient } from 'rooks'

const useWindowWidth = () => {
  const windowSizeClient = useWindowSizeClient()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (windowSizeClient.innerWidth !== 0 && typeof window !== 'undefined') {
      setWidth(windowSizeClient.innerWidth)
    }
  }, [windowSizeClient.innerWidth])

  return width
}

export default useWindowWidth
