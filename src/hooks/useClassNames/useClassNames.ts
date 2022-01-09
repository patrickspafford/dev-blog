import { twMerge, extendTailwindMerge } from 'tailwind-merge'
import { useCallback } from 'react'

const twMergeCustom = extendTailwindMerge({
  cacheSize: 0,
})

const useClassNames = (disableCache?: boolean | undefined) => {
  const classNames = useCallback(
    (...classes: (false | null | undefined | string)[]) => {
      const conditionallyAppliedClassNames = classes
        .filter((potentialClass) => Boolean(potentialClass))
        .join(' ')
      return disableCache
        ? twMergeCustom(conditionallyAppliedClassNames)
        : twMerge(conditionallyAppliedClassNames)
    },
    [],
  )

  return classNames
}

export default useClassNames
