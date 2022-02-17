import { useEffect, useState } from 'react'
import useViewCounter from '../useViewCounter'
import useLoading from '../useLoading'
import { IMarkdownPostFrontMatter } from '@interfaces'

interface IBlogPost {
  slug: string
  frontmatter: IMarkdownPostFrontMatter
}

interface IQueryResult {
  data: {
    allMdx: {
      nodes: IBlogPost[]
    }
  }
}

interface IBlogViews {
  [k: string]: number
}

const useCategoryViews = (props: IQueryResult) => {
  const { getAndIncrementViews } = useViewCounter({})
  const { loading, setLoading } = useLoading()
  const [views, setViews] = useState<IBlogViews>({})
  useEffect(() => {
    const effect = async () => {
      try {
        const localViews: IBlogViews = {}
        await Promise.all(
          props.data.allMdx.nodes.map(async (node) => {
            localViews[node.slug] = await getAndIncrementViews({
              slug: node.slug,
              readOnly: true,
            })
          }),
        )
        setViews(localViews)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    effect()
  }, [])

  return {
    views,
    loading,
  }
}

export default useCategoryViews
