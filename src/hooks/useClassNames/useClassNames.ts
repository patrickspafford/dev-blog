import { twMerge } from 'tailwind-merge'
import { DependencyList, useCallback } from 'react'

const useClassNames = (deps?: DependencyList | undefined) => {
  const classNames = useCallback(
    (...classes: (false | null | undefined | string)[]) => {
      const conditionallyAppliedClassNames = classes.filter(Boolean).join(' ')
      return twMerge(conditionallyAppliedClassNames)
    },
    deps ?? [],
  )

  return classNames
}

export default useClassNames
