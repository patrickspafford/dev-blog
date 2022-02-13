import { CSSProperties, ReactNode } from 'react'

export interface IWithStyles {
  className?: string
}

export interface IWithChild {
  children: ReactNode
}

export interface IWithText {
  children: string | ReactNode
}

export interface IClickable {
  onClick: () => void
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
  minuteRead: number
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

export interface IFaunaBlogHeadlinesQuery {
  fauna: {
    allFaunaBlogHeadlines: {
      data: IFaunaBlogHeadlineNode[]
    }
  }
}
