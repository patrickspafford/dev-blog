import { twMerge } from 'tailwind-merge'
import { useCallback } from 'react'

const useClassNames = () => {
  const classNames = useCallback(
    (...classes: (false | null | undefined | string)[]) => {
      const conditionallyAppliedClassNames = classes
        .filter((potentialClass) => Boolean(potentialClass))
        .join(' ')
      return twMerge(conditionallyAppliedClassNames)
    },
    [],
  )

  return classNames
}

export default useClassNames
