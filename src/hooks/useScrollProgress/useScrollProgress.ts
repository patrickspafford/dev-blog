import { useEffect, useState } from 'react'

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  const getDocHeight = () => {
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
    const scrollTop = window.pageYOffset
    const windowHeight = window.innerHeight
    const docHeight = getDocHeight()
    const totalDocScrollLength = docHeight - windowHeight
    return (scrollTop / totalDocScrollLength) * 100
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
