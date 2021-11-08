import { useEffect, useState } from 'react'

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  const getDocHeight = () => {
    if (typeof document === 'undefined') {
      return 100 // some default value
    }
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    )
  }

  const calculateScrollDistance = () => {
    if (typeof window !== 'undefined') {
      const scrollTop = window.pageYOffset
      const windowHeight = window.innerHeight
      const docHeight = getDocHeight()
      const totalDocScrollLength = docHeight - windowHeight
      return (scrollTop / totalDocScrollLength) * 100
    }
    return 0
  }
  useEffect(() => {
    const listener = () => {
      // requestAnimationFrame(() => {
      const prog = calculateScrollDistance()
      setProgress(prog)
      // })
    }
    document.addEventListener('scroll', listener)
    return () => {
      document.removeEventListener('scroll', listener)
    }
  }, [])

  return progress
}

export default useScrollProgress
