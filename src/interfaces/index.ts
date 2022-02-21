import { CSSProperties, FC, ReactNode } from 'react'

export interface IStyled {
  className?: string
  style?: CSSProperties
}

export interface IChildren {
  children: ReactNode
}

export interface IText {
  children: string
}

export interface IClickable {
  onClick: () => void
}

export interface IWithStyles {
  className?: string
}

export interface IWithChild {
  children: ReactNode
}

export interface IWithText {
  children: string | ReactNode
}

export interface IWithTextStyled extends IWithText {
  className?: string
  style?: CSSProperties
}

export interface IStyledWithChild extends IWithChild {
  className?: string
  style?: CSSProperties
}

export interface IMarkdownPostFrontMatter {
  category: string
  featured: boolean
  title: string
  date: string
  featuredImage: any
  slug: string
}

export interface IGroupedMarkdownPosts {
  [k: string]: IMarkdownPostFrontMatter[]
}

interface IFaunaBlogHeadlineNode {
  category: string
  headline: string
  title: string
}

interface IFaunaPageHitNode {
  hits: number
  slug: string
  category: string
}

interface IMdxPageHitNode {
  slug: string
  frontmatter: {
    category: string
  }
}

export interface IFaunaBlogHeadlinesQuery {
  fauna: {
    allFaunaBlogHeadlines: {
      data: IFaunaBlogHeadlineNode[]
    }
  }
  allMdx: {
    nodes: IMdxPageHitNode[]
  }
}
