import useLoading from '../useLoading'
import { useState, useEffect, useCallback } from 'react'

interface IGetAndIncrementViewsParam {
  slug: string
  readOnly: boolean
}

interface IUseViewCounterParam {
  slug?: string
  readOnly?: boolean
}

interface IUseViewCounterReturn {
  hits: number
  getAndIncrementViews: (props: IGetAndIncrementViewsParam) => Promise<number>
  loading: boolean
}

const useViewCounter = ({
  slug,
  readOnly = false,
}: IUseViewCounterParam): IUseViewCounterReturn => {
  const [hits, setHits] = useState(undefined)
  const { loading, setLoading } = useLoading()

  const getAndIncrementViews = useCallback(
    async ({ slug, readOnly }: IGetAndIncrementViewsParam): Promise<number> => {
      try {
        setLoading(true)
        const res = await fetch(
          readOnly ? `/api/views/${slug}?readOnly=true` : `/api/views/${slug}`,
        )
        const resJson = await res.json()
        if (typeof resJson.hits === 'number') {
          setHits(resJson.hits)
          return resJson.hits
        }
        return 0
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    },
    [],
  )

  useEffect(() => {
    // Don't count hits on localhost
    /*
    if (process.env.NODE_ENV !== 'production') {
      return
    }
    */
    getAndIncrementViews({
      slug: slug,
      readOnly: readOnly,
    })
  }, [getAndIncrementViews])
  return {
    hits: typeof hits === 'undefined' ? 0 : hits,
    getAndIncrementViews,
    loading,
  }
}

export default useViewCounter
