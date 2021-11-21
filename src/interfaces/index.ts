import { ReactNode } from 'react'

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
}

export interface IStyledWithChild extends IWithChild {
  className?: string
}

export interface IMarkdownPostFrontMatter {
  category: string
  featured: boolean
  title: string
  date: string
  minuteRead: number
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
