import { useEffect, useState } from 'react'
const useIsClientSide = () => {
  const [isClientSide, setIsClientSide] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClientSide(true)
    }
  }, [])

  return isClientSide
}

export default useIsClientSide
