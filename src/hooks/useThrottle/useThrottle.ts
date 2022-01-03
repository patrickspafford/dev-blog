import { useCallback } from 'react'

const useThrottle = () => {
  const throttle = useCallback(
    (func: (...args: any[]) => any, duration: number) => {
      let shouldWait = false
      return function (...args) {
        if (!shouldWait) {
          func.apply(this, args)
          shouldWait = true
          setTimeout(function () {
            shouldWait = false
          }, duration)
        }
      }
    },
    [],
  )

  return throttle
}

export default useThrottle
