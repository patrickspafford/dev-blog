import { CSSProperties, ReactNode } from 'react'

export interface IStyled {
  className?: string
  style?: CSSProperties
}

export interface IChildren {
  children: ReactNode | number | string
}

export interface IText {
  children: string
}

export interface IClickable {
  onClick: () => void
}

export interface ILoading {
  loading: boolean
}

export interface IMdxTableOfContentsItem {
  url: string
  title: string
  items?: IMdxTableOfContentsItem[]
}

export interface IMdxFrontmatter {
  category: string
  featured: boolean
  title: string
  date: string
  featuredImage: any
}

export interface IMdxQueryNode {
  frontmatter: IMdxFrontmatter
  body: any
  slug: string
  tableOfContents: {
    items?: IMdxTableOfContentsItem[] | undefined
  }
  timeToRead: number
}

export interface IAllMdxQuery {
  allMdx: {
    nodes: IMdxQueryNode[]
  }
}

export interface IMdxNode {
  mdx: IMdxQueryNode
}

export interface IMdxNodeData {
  data: IMdxNode
}

export interface IAllMdxData {
  data: IAllMdxQuery
}

export interface IGroupedMdxPosts {
  [k: string]: IMdxQueryNode[]
}

export interface IFaunaHeadlineNode {
  category: string
  headline: string
  title: string
}

export interface IAllFaunaQuery {
  allFaunaBlogHeadlines: {
    data: IFaunaHeadlineNode[]
  }
}
